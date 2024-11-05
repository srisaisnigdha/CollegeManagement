import React from 'react'
import { useState, useEffect } from 'react';
import { useLocation, useNavigate, NavLink } from 'react-router-dom';
import axios from "axios";
import DashboardNavbar from './DashboardNavbar';
import "../css/feereceiptBonafide.css";

const BonafideCertificateStudent = () => {
  const [userName, setuserDetails] = useState(null);
  // const location = useLocation();
  // const user_details = location.state?.userDetails;
  // console.log("in bonafide", user_details)

  // useEffect(() => {
  //   console.log(location);
  //   setuserDetails(location.state?.userDetails.username);
  // }, [location.state]);
  // console.log("user name - ", userName)
  const location = useLocation();
  useEffect(() => {
    setuserDetails(location.state?.userDetails);
  }, []);
  const user_details = location.state?.userDetails;
  console.log("in receipt", user_details)

  useEffect(() => {
    console.log(location);
    setuserDetails(location.state?.userDetails.username);
  }, [location.state]);
  console.log("user name - ", userName)

  const [messageSent, setMessageSent] = useState(false);
  const [messageStatus, setMessageStatus] = useState('');
  const [fileUrl, setFileUrl] = useState('');

  useEffect(() => {
    const checkMessageStatus = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/checkCertificateStatus/', { params: { sender: userName } });
        if (response.data.status === 'Request') {
          setMessageSent(false);
        } else if (response.data.status === false) {
          setMessageSent(true);
          setMessageStatus('Requested');
        } else {
          setMessageSent(true);
          setMessageStatus('Request Accepted');
          setFileUrl(response.data.file_url);
        }
      } catch (error) {
        console.error('Error checking message status:', error);
      }
    };

    if (userName) {
      checkMessageStatus();
    }
  }, [userName]);

  const handleSendMessage = async () => {
    try {
      const data = {
        recipient: 'admin',
        message: 'Request for Bonafide Certificate',
        sender: userName,
      };
      const response = await axios.post('http://localhost:8000/api/sendCertificate/', data);
      setMessageSent(true);
      // alert(response.data.status);
      setMessageStatus('Requested');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <>
      <DashboardNavbar user_details={user_details} />
      <div className='bonafide'>
        <div className="header">
          <p>Request Bonafide Certificate</p>
        </div>

        <div className="status">
          <p>STATUS : </p>
          {/* <button onClick={handleSendMessage} disabled={messageSent}>
            {messageSent ? messageStatus : 'Request'}
          </button> */}
          {messageSent ? (
            <>
              {messageStatus === 'Requested' ? (<button>{messageStatus}</button>) : null}
              {fileUrl && messageStatus === 'Request Accepted' ? (
                <a href={fileUrl} download target="_blank" rel="noopener noreferrer">
                  <button>View File</button>
                </a>
              ) : null}
            </>
          ) : (
            <button onClick={handleSendMessage}>Request</button>
          )}
        </div>
      </div>
    </>
  )
}

export default BonafideCertificateStudent