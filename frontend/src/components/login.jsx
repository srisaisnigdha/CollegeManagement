import React, { useState,useEffect,useRef,useContext} from "react";
import {faCheck,faUser} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from "axios";
import AuthContext from "../context/AuthProvider";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import HomePage from "./home_ours";
import "../css/login.css";
import interior from "../assets/interior2.jpg";
import Navbar from "./Navbar";

const Login = () => {
  console.log("login rendered");
  const {setAuth} = useContext(AuthContext);
  // const {login} =useContext(AuthContext);
  const [userDetails, setUserDetails] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleButton = async (e) => {
    e.preventDefault();

    console.log(username, password);
    var data = { username: username, password: password };
    const response = await axios.post(
      "http://localhost:8000/api/loginUser/",
      data
    );

    console.log("here");
    if (response.data.authenticated) {
      const updating = await axios.post("http://localhost:8000/api/updateSemester/");
      const user_details_response = await axios.get(
        "http://localhost:8000/api/getUserDetails/",
        { params: { username: username } }
      );
   
      setUserDetails(user_details_response.data);
      
      var user=user_details_response.data.type_of_user
      setAuth(user_details_response.data)
      localStorage.setItem('auth_userdetails',JSON.stringify(user_details_response.data));
     
      console.log(user)
      if (user === "student" || user === "faculty" || user === "student_cr")  {
        
        console.log('inside if condition ')
        navigate("/dashboard", { state: { userDetails: user_details_response.data } });
        
       
      }
      else if(user==="admin"){
        navigate("/admin", { state: { userDetails: user_details_response.data } });
      }
       else {
        console.log('inside login')
        navigate("/login");
        // window.location.reload();
      }
    
    } else {
      console.log("login unsuccessful");
    }
  };

  return (
    <div className="login">
      <Navbar/>
      {/* <label htmlFor="username" >Username:</label>
        <input onChange={handleUsernameInput} value = {username} type="text" required/>
        <br /><br />
        <label htmlFor="password">Password:</label>
        <input onChange={handlePasswordInput} value={password} type="password" required/> */}

      <div className="loginpage">
        <div className="logincontainer">
          <div className="icon">
            <img src={interior} alt="this is image" />
          </div>
          <div className="logindetails">
          {/* <FontAwesomeIcon icon={faUser}/> */}
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              placeholder="Username"
              type="text"
              required
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Password"
              type="password"
              required
            />
          </div>
          <button onClick={handleButton}>Login</button>
        </div>
      </div>
    </div>
  );
};

// const LoginResolver = () => {
//   const [user, setUser] = useState("");
//   const [userDetails, setUserDetails] = useState("");
//   console.log("inside login resolver");
//   console.log("user type is: ", user);
//   // const navigate = useNavigate();
//   return (
//     <>
//       {/* <Router>  
//         <Routes>
//           <Route path="/" element={
//             user === 'student' || user === 'faculty' || user === 'admin' ? (
//               <Navigate to="/dashboard" replace />
//             ) : (
//           <Login setUserDeatils={setUserDetails} setUser={setUser} />
//           )}/>
//           <Route path="/dashboard" element = {
//             <HomePage user_type= {user} user_details={userDetails}/>
//           }/>
//         </Routes>
//       </Router> */}

  
//       <Login setUserDeatils={setUserDetails} setUser={setUser} user={user} />
//     </>
//   );
// };

export default Login;
