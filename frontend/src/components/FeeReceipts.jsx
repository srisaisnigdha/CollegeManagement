import React from 'react'
import { useState, useEffect } from 'react';
import { useLocation, useNavigate, NavLink } from 'react-router-dom';
import axios from "axios";
import AdminNavbar from './AdminNavbar'
import "../css/members-display-list.css";

const FeeReceipts = () => {

  const [userDetails, setuserDetails] = useState(null);
  const location = useLocation();
  useEffect(() => {
    setuserDetails(location.state?.userDetails);
  }, []);

  const [messages, setMessages] = useState([]);
  const [fileToUpload, setFileToUpload] = useState(null);
  const [change, setChanges] = useState(0);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/getMessages/');
        setMessages(response.data.student_list);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };
    fetchMessages();
  }, [change]);

  const handleFileChange = (e, index) => {
    const files = e.target.files;
    const messageIndex = index;
    if (files.length > 0) {
      setFileToUpload({ index: messageIndex, file: files[0] });
    }
  };

  const handleResolveMessage = async (index) => {
    try {
      const formData = new FormData();
      formData.append('sender', messages[index].sender);
      if (fileToUpload && fileToUpload.index === index) {
        formData.append('file', fileToUpload.file);
      }

      const response = await axios.post('http://localhost:8000/api/acceptMessage/', formData);
      setChanges(change + 1);
    } catch (error) {
      console.error('Error resolving message:', error);
    }
  };

  const sortedMessages = [...messages].sort((a, b) => a.status - b.status);

  return (
    <>
      <AdminNavbar user_details={userDetails} />
      <div className="fee-receipt-requests-list">
        <div className="header">
          <p>Fee Receipt Requests</p>
        </div>
        {/* <ul>
          {sortedMessages.map((message, index) => (
            <li key={index}>
              {message.roll_no} {'  '} {message.name}{' '}
              {message.status ? (
                <button disabled>Resolved</button>
              ) : (
                <button onClick={() => handleAcceptMessage(message.sender)}>Resolve</button>
              )}
            </li>
          ))}
        </ul> */}
        <div className="list">
          <table>
            <thead>
              <tr>
                <th>ROLL NO</th>
                <th>NAME</th>
                <th >UPLOAD&nbsp;&nbsp;&nbsp;&nbsp;</th>
                <th>STATUS</th>
              </tr>
            </thead>
            {/* <tbody>
              {sortedMessages.map((message, index) => (
                <tr key={index}>
                  <td>{message.roll_no}</td>
                  <td>{message.name}</td>
                  <td>
                    {message.status ? (
                      <button disabled>Resolved</button>
                    ) : (
                      <>
                        <input type="file" onChange={(e) => handleFileChange(e, index)} />
                        <button onClick={() => handleAcceptMessage(message.sender)}>Resolve</button>
                        <button onClick={() => handleResolveMessage(index)}>Resolve</button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody> */}
            <tbody>
              {sortedMessages.map((message, index) => (
                <tr key={index}>
                  <td style={{border: "none" }}>{message.roll_no}</td>
                  <td style={{border: "none"}}>{message.name}</td>
                  <td style={{border: "none"}}>
                    {message.status ? (
                      <input style={{ border: 'none', width: '320px' }} type="file" onChange={(e) => handleFileChange(e, index)} />
                    ) : (
                      <input style={{ border: 'none', width: '320px' }} type="file" onChange={(e) => handleFileChange(e, index)} />
                    )}
                  </td>
                  <td style={{border: "none"}}>
                    {message.status ? (
                      <button disabled>Resolved</button>
                    ) : (
                      <button onClick={() => handleResolveMessage(index)}>Resolve</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>
      </div>
    </>
  );
}

export default FeeReceipts