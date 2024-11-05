import React, { useEffect, useRef } from "react";
import video from "./coursevideo.mp4";
import { useNavigate } from 'react-router-dom';
import "../css/homepage.css";
import Navbar from "./Navbar";


function HomePage() {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.7; // Set the playback speed to 0.5 (half speed)
        }
    }, [videoRef]);

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/login');
        window.location.reload();
    };
    

    return (
        <>
        <Navbar/>
            <video autoPlay muted loop id="myVideo" ref={videoRef}>
                <source type="video/mp4" src={video} />
            </video>
            <div className="homepage">
                <div className="videooverlay">
                    <h6>INDIAN INSTITUTE OF INFORMATION TECHNOLOGY TIRUCHIRAPPALLI</h6>
                    <h1>
                        <span>COLLEGE</span> MANAGEMENT
                    </h1>
                    <button onClick={handleClick}>LOGIN</button>
                </div>
                {/* <div className="details">
                    <div>
                        <h4>all courses</h4>
                    </div>
                    <div>
                        <h4>virtual class</h4>
                    </div>
                    <div>
                        <h4>real meeting</h4>
                    </div>
                </div> */}
            </div>
            {/* <div className="afterhomepage">
                write remaining home page here
                <h1>HELLO</h1>
            </div> */}
        </>
    );
}

export default HomePage;
