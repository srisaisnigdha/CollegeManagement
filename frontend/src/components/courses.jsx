// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { NavLink } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Attendance from "./attendance";
// import Result from "./result";
// import Card from "./card";
// import '../css/student_courses.css'
// const FacultyCourses = (props) => {
//   const [courseList, setCourseList] = useState([]);
//   console.log("inside faculty courses");
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         console.log("inside effect");
//         let faculty_name = { faculty_name: props.user_details.faculty_name };
//         console.log(faculty_name);
//         const response = await axios.get(
//           "http://localhost:8000/api/getCoursesForFaculty/",
//           { params: faculty_name }
//         );
//         setCourseList(response.data.course_list);
//         console.log(response.data.course_list);
//       } catch (error) {
//         console.error("Error fetching courses:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <>
//       {courseList &&
//         <div>
//           {/* <h2>Course Component</h2> */}
//           {/* <ul>
//         {courseList.map((list, index) => (
//           <li key={index}>
//             {list[0]}: {list[1]}({list[2]}){" "}
//             <Link to={`/attendance/${list[0]}/${list[2]}`}>
//               Click to mark Attendance
//             </Link>
//             <Link to={`/result/${list[0]}/${list[2]}`}>
//               Click to mark Result
//             </Link>
//           </li>
//         ))}
//       </ul> */}
//           <div className="card-container" >
//             {

//               courseList.map((list, index) => {
//                 console.log(list);
//                 return <Card key={list[0]} course_name={list[1]} course_code={list[0]} department={list[2]} user_details={props.user_details} />
//               })
//             }
//           </div>
//           {/* <NavLink className="todo-button" to="/todo_list">📝</NavLink> */}
//         </div>
//       }
//     </>
//   );
// };

// const StudentCourses = (props) => {
//   const [courseList, setCourseList] = useState([]);
//   const [attendanceList, setattendanceList] = useState([]);
//   console.log("inside student courses");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         console.log("inside effect");
//         let details = {
//           semester: props.user_details.semester,
//           department: props.user_details.department,
//         };
//         console.log("yes");
//         const response = await axios.get(
//           "http://localhost:8000/api/getCoursesForStudents/",
//           { params: details }
//         );
//         setCourseList(response.data.course_list);
//         console.log(response.data.course_list);
//       } catch (error) {
//         console.error("Error fetching courses:", error);
//       }
//     };

//     fetchData();
//   }, []);
//   useEffect(() => {
//     const calculateAttendance = async () => {
//       if (courseList) {
//         let varAttendanceList;
//         let attendancePercentages = [];
//         for (let course of courseList) {
//           let details = {
//             roll_no: props.user_details.roll_no,
//             department: course[2],
//             course_code: course[0],
//           };
//           let response = await axios.get(
//             "http://localhost:8000/api/getAttendanceDetailsForStudent/",
//             { params: details }
//           );
//           varAttendanceList = response.data;
//           attendancePercentages.push(
//             ((parseFloat(varAttendanceList.total_classes) -
//               varAttendanceList.dates_of_absent.length) *
//               100) /
//             varAttendanceList.total_classes
//           );
//         }
//         console.log("atte perc is ", attendancePercentages);
//         setattendanceList(attendancePercentages);
//         console.log("attendance list is: ", attendanceList);
//       }
//     };
//     calculateAttendance();
//   }, [courseList]);

//   return (
//     <>
//       {courseList && attendanceList && (
//         <div>
//           {/* <h2>Course Component</h2> */}
//           {/* <ul> */}
//           {/* {courseList.map((list, index) => (
//               <li key={index}>
//               list[0]==course_id
//               list[2]=departemnt
//               list[1]=course_name
//                 {list[0]}: {list[1]}({list[2]}){" "}
//                 <Link to={`/attendance/${list[0]}/${list[2]}`}>
//                   Click to view student attendance(%): {attendanceList[index]}
//                   &emsp;
//                 </Link>
//                 <Link to={`/result/${list[0]}/${list[2]}`}>
//                   Click to view Result
//                 </Link>
//               </li>
//             ))} */}
//           {/* </ul> */}

//           {console.log('outside map in student couse')}
//           <div className="card-container" >
//             {

//               courseList.map((list, index) => {
//                 console.log(list);
//                 return <Card key={list[0]} course_name={list[1]} course_code={list[0]} department={list[2]} attendace_percentage={attendanceList[index]} user_details={props.user_details} />
//               })
//             }
//           </div>
//           {/* <NavLink className="todo-button" to="/todo_list">📝</NavLink> */}

//         </div>
//       )}
//     </>
//   );
// };

// const Courses = (props) => {

//   return props.user_details.type_of_user === "faculty" ? (
//     <FacultyCourses user_details={props.user_details} />
//   ) : (
//     <StudentCourses user_details={props.user_details} />
//   );
// };

// export default Courses;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Attendance from "./attendance";
import Result from "./result";
import Card from "./card";
import '../css/student_courses.css'
const FacultyCourses = (props) => {
  const [courseList, setCourseList] = useState([]);
  console.log("inside faculty courses");
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("inside effect");
        let faculty_name = { faculty_name: props.user_details.faculty_name };
        console.log(faculty_name);
        const response = await axios.get(
          "http://localhost:8000/api/getCoursesForFaculty/",
          { params: faculty_name }
        );
        setCourseList(response.data.course_list);
        console.log(response.data.course_list);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    {courseList &&
    <div>
      {/* <h2>Course Component</h2> */}
      {/* <ul>
        {courseList.map((list, index) => (
          <li key={index}>
            {list[0]}: {list[1]}({list[2]}){" "}
            <Link to={`/attendance/${list[0]}/${list[2]}`}>
              Click to mark Attendance
            </Link>
            <Link to={`/result/${list[0]}/${list[2]}`}>
              Click to mark Result
            </Link>
          </li>
        ))}
      </ul> */}
      <div className="card-container" >
            {
              
              courseList.map((list,index)=>{
                console.log(list);
                  return <Card key={list[0]} course_name={list[1]} course_code={list[0]} department={list[2]}  user_details={props.user_details}/>
              })
            }
          </div>
    </div>}
    </>
  );
};

const StudentCourses = (props) => {
  const [courseList, setCourseList] = useState([]);
  const [attendanceList, setattendanceList] = useState([]);
  console.log("inside student courses");

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("inside effect");
        let details = {
          semester: props.user_details.semester,
          department: props.user_details.department,
        };
        console.log("yes");
        const response = await axios.get(
          "http://localhost:8000/api/getCoursesForStudents/",
          { params: details }
        );
        setCourseList(response.data.course_list);
        console.log(response.data.course_list);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const calculateAttendance = async () => {
      if (courseList) {
        let varAttendanceList;
        let attendancePercentages = [];
        for (let course of courseList) {
          let details = {
            roll_no: props.user_details.roll_no,
            department: course[2],
            course_code: course[0],
          };
          let response = await axios.get(
            "http://localhost:8000/api/getAttendanceDetailsForStudent/",
            { params: details }
          );
          varAttendanceList = response.data;
          attendancePercentages.push(
            ((parseFloat(varAttendanceList.total_classes) -
              varAttendanceList.dates_of_absent.length) *
              100) /
              varAttendanceList.total_classes
          );
        }
        console.log("atte perc is ", attendancePercentages);
        setattendanceList(attendancePercentages);
        console.log("attendance list is: ", attendanceList);
      }
    };
    calculateAttendance();
  }, [courseList]);

  return (
    <>
      {courseList && attendanceList && (
        <div>
          {/* <h2>Course Component</h2> */}
          {/* <ul> */}
            {/* {courseList.map((list, index) => (
              <li key={index}>
              list[0]==course_id
              list[2]=departemnt
              list[1]=course_name
                {list[0]}: {list[1]}({list[2]}){" "}
                <Link to={`/attendance/${list[0]}/${list[2]}`}>
                  Click to view student attendance(%): {attendanceList[index]}
                  &emsp;
                </Link>
                <Link to={`/result/${list[0]}/${list[2]}`}>
                  Click to view Result
                </Link>
              </li>
            ))} */}
          {/* </ul> */}

          {console.log('outside map in student couse')}
          <div className="card-container" >
            {
              
              courseList.map((list,index)=>{
                console.log(list);
                  return <Card key={list[0]} course_name={list[1]} course_code={list[0]} department={list[2]} attendace_percentage={attendanceList[index]} user_details={props.user_details}/>
              })
            }
          </div>

            
        </div>
      )}
    </>
  );
};

const Courses = (props) => {

  return (props.user_details.type_of_user === "faculty"  || props.user_details.type_of_user === "faculty_cord")? (
    <FacultyCourses user_details={props.user_details} />
  ) : (
    <StudentCourses user_details={props.user_details} />
  );
};

export default Courses;
