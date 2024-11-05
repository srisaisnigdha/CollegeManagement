// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, Link,useNavigate } from "react-router-dom";

// import "../css/card.css";

// const Card = (props) => {
//   // const [courses, setCourses] = useState([]);

//   // useEffect(() => {
//   //     // Simulate fetching data
//   //     const fetchCourses = async () => {
//   //         // Assume this is the data fetched from an API
//   //         const coursesData = [
//   //             { name: 'Computer Science and Technology', attendance: '100%' },
//   //             { name: 'Mathematics', attendance: '75%' },
//   //             { name: 'Physics', attendance: '90%' }
//   //             // Add more courses as needed
//   //         ];

//   //         setCourses(coursesData);
//   //     };

//   //     fetchCourses();
//   // }, []);
//   console.log("inside card");
//   const course_name = props.course_name;
//   const course_code = props.course_code;
//   const attendance_percentage = parseFloat(props.attendace_percentage).toFixed(2);
//   const department = props.department;
//   const user_details = props.user_details;
//   const navigate = useNavigate();
//   const handleViewAttendance=()=>{
//     console.log(user_details)
//     navigate(`/attendance/${course_code}/${department}`, { state: { user_details: user_details } })
//   }
//   const handleViewResult=()=>{
//     navigate(`/result/${course_code}/${department}`, { state: { user_details: user_details } })
//   }
//   const handleMarkAttendance=()=>{
//     navigate(`/attendance/${course_code}/${department}`, { state: { user_details: user_details } })
//   }
//   const handleMarkResult=()=>{
//     navigate(`/result/${course_code}/${department}`, { state: { user_details: user_details } })
//   }
//   return (
//     <div className="container">
//       <div className="course">
//         <div className="coursename">
//           <h3>
//             {course_code}: {course_name}
//           </h3>
//         </div>
//         {(props.user_details.type_of_user==='student' || props.user_details.type_of_user==='student_cr' ) &&
//         (<div className="coursedetails">
//           <p>Attendance %</p>
//           <div className="progressbar">
//               {/* <div className="bar" style={{ '--attendance-width': ${attendance_percentage}% }}></div> */}
//               <div className={`bar ${attendance_percentage < 80 ? 'red' : ''}`} style={{ '--attendance-width': `${attendance_percentage}%` }}></div>
//               <span>{attendance_percentage}</span>
//             </div>
//         </div>)
//         }
//         {(props.user_details.type_of_user==='faculty' || props.user_details.type_of_user==='faculty_cord')?(
//           <div className="buttons">
//           <button onClick={handleMarkResult}>Mark Result</button>
//           <button onClick={handleMarkAttendance}>Mark Attendance</button>
//           </div>
//         ):(
          
//           <div className="buttons">
//           <button onClick={handleViewResult}>View Result</button>
//           <button onClick={handleViewAttendance}>Absent Dates</button>
        
//         </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Card;


import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link,useNavigate } from "react-router-dom";

import "../css/card.css";

const Card = (props) => {
  // const [courses, setCourses] = useState([]);

  // useEffect(() => {
  //     // Simulate fetching data
  //     const fetchCourses = async () => {
  //         // Assume this is the data fetched from an API
  //         const coursesData = [
  //             { name: 'Computer Science and Technology', attendance: '100%' },
  //             { name: 'Mathematics', attendance: '75%' },
  //             { name: 'Physics', attendance: '90%' }
  //             // Add more courses as needed
  //         ];

  //         setCourses(coursesData);
  //     };

  //     fetchCourses();
  // }, []);
  console.log("inside card");
  const course_name = props.course_name;
  const course_code = props.course_code;
  const attendance_percentage = parseFloat(props.attendace_percentage).toFixed(2);
  const department = props.department;
  const user_details = props.user_details;
  const navigate = useNavigate();
  const handleViewAttendance=()=>{
    console.log(user_details)
    navigate(`/attendance/${course_code}/${department}`, { state: { user_details: user_details } })
  }
  const handleViewResult=()=>{
    navigate(`/result/${course_code}/${department}`, { state: { user_details: user_details } })
  }
  const handleMarkAttendance=()=>{
    navigate(`/attendance/${course_code}/${department}`, { state: { user_details: user_details } })
  }
  const handleMarkResult=()=>{
    navigate(`/result/${course_code}/${department}`, { state: { user_details: user_details } })
  }
  const handleAttendanceShortage=()=>{
    navigate(`/attendanceshortage/${course_code}/${department}`, { state: { user_details: user_details } })
  }
  return (
    <div className="container">
      <div className="course">
        <div className="coursename">
          <h4>
            {course_code}:{course_name}
          </h4>
        </div>
        {(props.user_details.type_of_user==='student' || props.user_details.type_of_user==='student_cr') ?
        (<div className="coursedetails">
          <p>Attendance %</p>
          <div className="progressbar">
              {/* <div className="bar" style={{ '--attendance-width': ${attendance_percentage}% }}></div> */}
              <div className={`bar ${attendance_percentage < 80 ? 'red' : ''}`} style={{ '--attendance-width': `${attendance_percentage}%` }}></div>
              <span>{attendance_percentage}</span>
          </div>
        </div>):(
          <div>
            <button onClick={handleAttendanceShortage}>List Attendance shortage</button>
          </div>
        )
        }
        {(props.user_details.type_of_user==='faculty' || props.user_details.type_of_user==='faculty_cord')?(
        <div className="buttons">
          <button onClick={handleMarkResult}>Mark Result</button>
          <button onClick={handleMarkAttendance}>Mark Attendance</button>
        </div>
        ):(
          <div className="buttons">
          <button onClick={handleViewResult}>View Result</button>
          <button onClick={handleViewAttendance}>Attendance Dates</button>
        </div>
        )}
      </div>
    </div>
  );
};

export default Card;
