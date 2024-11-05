// import React from "react";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams, useLocation } from "react-router-dom";
// import DashboardNavbar from "./DashboardNavbar";
// import '../css/attendance.css'

// const FacultyAttendance = (props) => {
//   const [students, setStudents] = useState([]);
//   const [count, setCount] = useState(0);
//   let params = useParams();

//   useEffect(() => {
//     const getStudents = async () => {
//       let details = {
//         course_code: params.course_id,
//         department: params.department,
//       };
//       console.log(details)
//       const response = await axios.get(
//         "http://localhost:8000/api/getStudentsFromCourseCode/",
//         { params: details }
//       );
//       setStudents(response.data.student_list);
//       console.log(response.data.student_list);
//     };

//     getStudents();
//   }, []);

//   const handleAttendance = (event) => {
//     let roll_no = event.target.name;
//     let index = students.findIndex((item) => {
//       return item.roll_no === roll_no;
//     });
//     let temp = event.target.id;
//     if (temp === "present") {
//       let new_students = [...students];
//       new_students[index].present = 1;
//       new_students[index].absent = 0;
//       setStudents(new_students);
//     } else if (temp === "absent") {
//       let new_students = [...students];
//       new_students[index].absent = 1;
//       new_students[index].present = 0;
//       setStudents(new_students);
//     }
//   };
//   const handleSubmit = async (event) => {
//     let absentees_list = [];
//     for (let student of students) {
//       if (student.absent === 1) {
//         absentees_list.push(student.roll_no);
//       }
//     }

//     let time_slot = "9.20-10.10";
//     const data_to_send = {
//       date,
//       course_id: params.course_id,
//       count: count,
//       absentees_list: absentees_list,
//       time_slot,
//       department: params.department,
//     };

//     try {
//       const response = await axios.post(
//         "http://localhost:8000/api/insertAttendance/",
//         data_to_send
//       );
//       setCount(count + 1);
//     } catch (error) {
//       console.error("Error ", error);
//     }
//   };

//   const today = new Date();
//   const year = today.getFullYear();
//   const month = today.getMonth() + 1; // Month is <zer></zer>o-based, so we add 1
//   const day = today.getDate();

//   const date = `${year}-${month}-${day}`;

//   return (
    // <div className="facultyattendance">
    //   <div>
    //     <DashboardNavbar />
    //   </div>

    //   <div className="attendance">

    //     <p>Attendance Form</p>
    //     <div>

    //       <p>Date: {date}</p>
    //     <div className="attendancedetails">
    //       <div>
    //         <div>Roll No</div>
    //         <div>Name</div>
    //         <div>Present</div>
    //         <div>Absent</div>
    //       </div>
    //       {students.map((student) => {
    //         return (
    //           <div key={student.roll_no}>
                

    //               <div>{student.roll_no}</div>
    //               <div>{student.name}</div>
    //               <div><input
    //                 type="radio"
    //                 name={student.roll_no}
    //                 id="present"
    //                 onChange={handleAttendance}
    //                 checked={student.present}
    //               /></div>
    //               <div><input
    //                 type="radio"
    //                 name={student.roll_no}
    //                 id="absent"
    //                 onChange={handleAttendance}
    //                 checked={student.absent}
    //               /></div>
                
    //           </div>
    //         );
    //       })}
    //     <button onClick={handleSubmit}>Submit</button>
    //     </div>
    //     </div>
    //   </div>
    // </div>
//   );
// };

// const StudentAttendance = (props) => {
//   console.log("inside studAttend");

//   const [attendanceDetails, setAttendanceDetails] = useState(null);
//   let params = useParams();

//   useEffect(() => {
//     const getAttendance = async () => {
//       try {
//         console.log("inside get at");
//         let details = {
//           course_code: params.course_id,
//           department: params.department,
//           roll_no: props.user_details.roll_no,
//         };

//         console.log("before get");
//         const response = await axios.get(
//           "http://localhost:8000/api/getAttendanceDetailsForStudent/",
//           { params: details }
//         );
//         console.log("after get");

//         console.log(response.data);
//         setAttendanceDetails(response.data);
//       } catch (error) {
//         console.error("Error fetching attendance:", error);
//       }
//     };

//     getAttendance();
//   }, []);
//   return (
    // <div className="studentattendance">
    //   <div>
    //     <DashboardNavbar />
    //   </div>
    //   <div className="attendance">
    //     <p>Software Engineering - CS351</p>

    //     {attendanceDetails && (
    //       <div>
    //         <p>Total no of classes: {attendanceDetails.total_classes}</p>
    //         <div className="attendancedetails">
    //           <div>
    //             <div>Date</div><div>Slot</div>
    //           </div>
    //           {attendanceDetails.dates_of_absent.map((date, index) => (
    //             <div key={index}>
    //               <div className="absent_date">{date[0]}</div>
    //               <div className="absent_slot">{date[1]}</div>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     )}
    //   </div>
    // </div>
//   );
// };

// const Attendance = () => {

//   const location = useLocation();
//   const user_details = location.state?.user_details;
//   console.log(user_details)
//   return (
//     <>
//       {user_details.type_of_user === "faculty" ? (
//         <FacultyAttendance user_details={user_details} />
//       ) : (
//         <StudentAttendance user_details={user_details} />
//       )}
//     </>
//   );
// };

// export default Attendance;

import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";
import '../css/attendance.css'
import DashboardNavbar from "./DashboardNavbar";
const FacultyAttendance = (props) => {
  const [students, setStudents] = useState([]);
  const [count, setCount] = useState(0);
  const [timeslots, setTimeslots] = useState(null);
  const [selectedTimeslot, setSelectedTimeslot] = useState(null);
  let params = useParams();

  useEffect(() => {
    const getStudents = async () => {
      let details = {
        course_code: params.course_id,
        department: params.department,
      };
      console.log(details);
      const response = await axios.get(
        "http://localhost:8000/api/getStudentsFromCourseCode/",
        { params: details }
      );
      setStudents(response.data.student_list);
      console.log(response.data.student_list);
    };
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1; // Month is <zer></zer>o-based, so we add 1
    const day = today.getDate();

    const date = `${day}-${month}-${year}`;
    const getTimeSlots = async () => {
      let details = {
        course_code: params.course_id,
        department: params.department,
        date: date,
      };
      console.log(details);
      const response = await axios.get(
        "http://localhost:8000/api/getTimeSlotForFaculty/",
        { params: details }
      );
      if (response.data.time_slots) {
        setTimeslots(response.data.time_slots);
        console.log("time slot are:", timeslots);
        console.log("response.data: ", response.data);
      } else {
        console.log("awaiting");
      }
    };

    const fetchData = async () => {
      try {
        const getStudentsPromise = getStudents();
        const getTimeSlotsPromise = await getTimeSlots();
        // Wait for both promises to resolve
        // await Promise.all([getStudentsPromise, getTimeSlotsPromise]);
        // Both requests have completed here
        console.log("All data fetched");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleAttendance = (event) => {
    let roll_no = event.target.name;
    let index = students.findIndex((item) => {
      return item.roll_no === roll_no;
    });
    let temp = event.target.id;
    if (temp === "present") {
      let new_students = [...students];
      new_students[index].present = 1;
      new_students[index].absent = 0;
      setStudents(new_students);
    } else if (temp === "absent") {
      let new_students = [...students];
      new_students[index].absent = 1;
      new_students[index].present = 0;
      setStudents(new_students);
    }
  };
  const handleSubmit = async (event) => {
    let absentees_list = [];
    for (let student of students) {
      if (student.absent === 1) {
        absentees_list.push(student.roll_no);
      }
    }

    // let time_slot = "9.20-10.10";

    const data_to_send = {
      date,
      course_id: params.course_id,
      count: count,
      absentees_list: absentees_list,
      time_slot: selectedTimeslot,
      department: params.department,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/api/insertAttendance/",
        data_to_send
      );
      setCount(count + 1);
    } catch (error) {
      console.error("Error ", error);
    }
    const new_students = [...students];
    for(let i=0;i<new_students.length;i++){
      new_students[i].absent = false;
      new_students[i].present = false;
    }

  };

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // Month is <zer></zer>o-based, so we add 1
  const day = today.getDate();

  const date = `${year}-${month}-${day}`;
  const handleTimeslotSelect = (timeslot) => {

    setSelectedTimeslot(timeslot);
  };
  return (
    <>
    <DashboardNavbar/>
    <div className="facultyattendance">
      {timeslots ?(
        <div>
          <p className="date_attendance">Date:{date}</p>
        
        <div className="attendance_outer_div">
          <div className="attendance_timeslot">
            <h3>Time Slot</h3>
            {timeslots.map((timeslot, index) => (
              <button className="attendance_button"
                key={index}
                onClick={() => handleTimeslotSelect(timeslot)}
                style={{ backgroundColor: selectedTimeslot === timeslot ? 'green' :'#ea9f26' }}
              >
                {timeslot}
              </button>
            ))}
          </div>
          
          <div className="attendancedetails">
            <div>
              <div>Roll No</div>
              <div>Name</div>
              <div>Present</div>
              <div>Absent</div>
            </div>
            {students.map((student) => {
              return (
                <div key={student.roll_no}>
                

                  <div>{student.roll_no}</div>
                  <div>{student.name}</div>
                  <div><input
                    type="radio"
                    name={student.roll_no}
                    id="present"
                    onChange={handleAttendance}
                    checked={student.present}
                  /></div>
                  <div><input
                    type="radio"
                    name={student.roll_no}
                    id="absent"
                    onChange={handleAttendance}
                    checked={student.absent}
                  /></div>
                
              </div>
              );
            })}
            <button style={{marginTop:"100px"}} onClick={handleSubmit}>Submit</button>
          </div>
        </div>
        </div>
      ):(<div>
        <h1>Loading...</h1>
      </div>)}

      {/* <h2>Attendance Form</h2>
      <h3>Date:{date}</h3>
      <h3>Roll Number Name Present Absent</h3>
      {students.map((student) => {
        return (
          <div className="container" key={student.roll_no}>
            <p>{student.roll_no}</p>
            <p>{student.name}</p>
            <input
              type="radio"
              name={student.roll_no}
              id="present"
              onChange={handleAttendance}
              checked={student.present}
            />
            <input
              type="radio"
              name={student.roll_no}
              id="absent"
              onChange={handleAttendance}
              checked={student.absent}
            />
          </div>
        );
      })}
      <button onClick={handleSubmit}>Submit</button> */}
    </div>
    </>
  );
};

const StudentAttendance = (props) => {
  console.log("inside studAttend");

  const [attendanceDetails, setAttendanceDetails] = useState(null);
  let params = useParams();

  useEffect(() => {
    const getAttendance = async () => {
      try {
        console.log("inside get at");
        let details = {
          course_code: params.course_id,
          department: params.department,
          roll_no: props.user_details.roll_no,
        };

        console.log("before get");
        const response = await axios.get(
          "http://localhost:8000/api/getAttendanceDetailsForStudent/",
          { params: details }
        );
        console.log("after get");

        console.log(response.data);
        setAttendanceDetails(response.data);
      } catch (error) {
        console.error("Error fetching attendance:", error);
      }
    };

    getAttendance();
  }, []);
  return (
    <div className="studentattendance">
      <div>
        <DashboardNavbar />
      </div>
      <div className="attendance">
        <p>{params.course_id.toUpperCase()}</p>

        {attendanceDetails && (
          <div>
            <p>Total no of classes: {attendanceDetails.total_classes}</p>
            <div className="attendancedetails">
              <div>
                <div>Date</div><div>Slot</div>
              </div>
              {attendanceDetails.dates_of_absent.map((date, index) => (
                <div key={index}>
                  <div className="absent_date">{date[0]}</div>
                  <div className="absent_slot">{date[1]}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Attendance = () => {
  const location = useLocation();
  const user_details = location.state?.user_details;
  console.log(user_details);
  return (
    <>
      {(user_details.type_of_user === "faculty" || user_details.type_of_user === "faculty_cord") ? (
        <FacultyAttendance user_details={user_details} />
      ) : (
        <StudentAttendance user_details={user_details} />
      )}
    </>
  );
};

export default Attendance;

