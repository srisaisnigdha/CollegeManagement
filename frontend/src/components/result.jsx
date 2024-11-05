// // import React, { useState, useEffect } from "react";
// // import { useParams, useLocation } from "react-router-dom";
// // import axios from "axios";
// // import DashboardNavbar from "./DashboardNavbar";
// // import '../css/result.css';

// // const FacultyResult = (props) => {
// //   console.log("inside faculty  Result ");
// //   const params = useParams();
// //   const [resultData, setResultData] = useState([]);

// //   useEffect(() => {
// //     const getStudents = async () => {
// //       let details = {
// //         course_code: params.course_id,
// //         department: params.department,
// //       };
// //       const response = await axios.get(
// //         "http://localhost:8000/api/getStudentsFromCourseCodeForResult/",
// //         { params: details }
// //       );
// //       setResultData(response.data.student_list);
// //       console.log(response.data);
// //       console.log(resultData)
// //     };
// //     getStudents();
// //   }, []);

// //   const handlePostData = async () => {
// //     const response = await axios.post(
// //       "http://127.0.0.1:8000/api/addResult/",
// //       resultData
// //     );
// //   };

// //   const handleChange = (e, field) => {
// //     var roll_no = e.target.name;
// //     var newResultData = [...resultData];
// //     let index = newResultData.findIndex((el) => el.roll_no === roll_no);
// //     if (field !== "grade") {
// //       newResultData[index][field] = parseFloat(e.target.value);
// //     } else {
// //       newResultData[index][field] = e.target.value;
// //     }

// //     setResultData(newResultData);
// //   };

// //   return (
// //     <>
// //       <div>
// //         <DashboardNavbar />
// //       </div>
// //       {resultData && (
// //         <>
// //           <div className="result">
// //             <div className="">Course: {params.name}</div>
// //             <div className="">
// //               <p>Roll No</p>
// //               <p>CT1</p>
// //               <p>CT2</p>
// //               <p>Assignment</p>
// //               <p>END SEM</p>
// //               <p>GRADE</p>
// //             </div>
// //             <div className="">
// //               {resultData.map((el) => (
// //                 <div
// //                   className="student"
// //                   key={el.id}
// //                   style={{ display: "flex" }}
// //                 >
// //                   <p>{el.roll_no}</p>
// //                   <input
// //                     type="number"
// //                     name={el.roll_no}
// //                     defaultValue={el.ct_1}
// //                     onChange={(e) => handleChange(e, "ct_1")}
// //                   />
// //                   <br />
// //                   <input
// //                     type="number"
// //                     name={el.roll_no}
// //                     defaultValue={el.ct_2}
// //                     onChange={(e) => handleChange(e, "ct_2")}
// //                   />
// //                   <br />
// //                   <input
// //                     type="number"
// //                     name={el.roll_no}
// //                     defaultValue={el.assignments}
// //                     onChange={(e) => handleChange(e, "assignments")}
// //                   />
// //                   <br />
// //                   <input
// //                     type="number"
// //                     name={el.roll_no}
// //                     defaultValue={el.end_sem}
// //                     onChange={(e) => handleChange(e, "end_sem")}
// //                   />
// //                   <br />
// //                   <input
// //                     type="text"
// //                     name={el.roll_no}
// //                     defaultValue={el.grade}
// //                     onChange={(e) => handleChange(e, "grade")}
// //                   />
// //                   <br />
// //                 </div>
// //               ))}
// //             </div>
// //             <button type="button" onClick={handlePostData}>
// //               Submit
// //             </button>
// //           </div>
// //         </>
// //       )}
// //     </>
// //   );
// // };

// // const StudentResult = (props) => {
// //   console.log("inside student  Result ");
// //   const params = useParams();
// //   const [resultDetails, setResultDetails] = useState(null);

// //   useEffect(() => {
// //     console.log("inside use effect");
// //     const getRestultData = async () => {
// //       let details = {
// //         course_code: params.course_id,
// //         roll_no: props.user_details.roll_no,
// //       };

// //       const response = await axios.get(
// //         "http://localhost:8000/api/getResultForStudentForCourse/",
// //         { params: details }
// //       );
// //       console.log("response data", response.data);
// //       setResultDetails(response.data);
// //       console.log("result data", resultData);
// //     };

// //     getRestultData();
// //   }, []);

// //   return (
// //     <>
    
// //     <DashboardNavbar />
// //     <div className="result">
// //       {resultDetails && (
// //         <div>
// //           <p>course : {params.course_id}</p>
// //           <div className="resultdetails">
// //             <div>Cycle test 1 : {resultDetails.ct_1}/20</div>
// //             <div>Cycle test 2 : {resultDetails.ct_2}/20</div>
// //             <div>Assignments : {resultDetails.assignments}/10</div>
// //             <div>End Sem : {resultDetails.end_sem}</div>
// //             <div>Grade : {resultDetails.grade}</div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //     </>
// //   );
// // };

// // const Result = () => {
// //   const location = useLocation();
// //   const user_details = location.state?.user_details;
// //   // console.log("inside main  Result ", props.user_details);
// //   return (
// //     <>
// //       {user_details.type_of_user === "faculty" ? (
// //         <FacultyResult user_details={user_details} />
// //       ) : (
// //         <StudentResult user_details={user_details} />
// //       )}
// //     </>
// //   );
// // };

// // export default Result;


















// import React, { useState, useEffect } from "react";
// import { useParams, useLocation } from "react-router-dom";
// import axios from "axios";
// import DashboardNavbar from "./DashboardNavbar";
// import "../css/studentResult.css";
// import "../css/facultyResult.css";

// const FacultyResult = (props) => {
//   console.log("inside faculty  Result ");
//   const params = useParams();
//   const [resultData, setResultData] = useState([]);

//   useEffect(() => {
//     const getStudents = async () => {
//       let details = {
//         course_code: params.course_id,
//         department: params.department,
//       };
//       const response = await axios.get(
//         "http://localhost:8000/api/getStudentsFromCourseCodeForResult/",
//         { params: details }
//       );
//       setResultData(response.data.student_list);
//       console.log(response.data);
//       console.log(resultData)
//     };
//     getStudents();
//   }, []);

//   const handlePostData = async () => {
//     const response = await axios.post(
//       "http://127.0.0.1:8000/api/addResult/",
//       resultData
//     );
//   };

//   const handleChange = (e, field) => {
//     var roll_no = e.target.name;
//     var newResultData = [...resultData];
//     let index = newResultData.findIndex((el) => el.roll_no === roll_no);
//     if (field !== "grade") {
//       newResultData[index][field] = parseFloat(e.target.value);
//     } else {
//       newResultData[index][field] = e.target.value;
//     }

//     setResultData(newResultData);
//   };

//   return (
//     <>
//       {/* {resultData && (
//         <>
//           <div className="">
//             <div className="">Course: {params.name}</div>
//             <div className="">
//               <p>Roll No</p>
//               <p>CT1</p>
//               <p>CT2</p>
//               <p>Assignment</p>
//               <p>END SEM</p>
//               <p>GRADE</p>
//             </div>
//             <div className="">
//               {resultData.map((el) => (
//                 <div
//                   className="student"
//                   key={el.id}
//                   style={{ display: "flex" }}
//                 >
//                   <p>{el.roll_no}</p>
//                   <input
//                     type="number"
//                     name={el.roll_no}
//                     defaultValue={el.ct_1}
//                     onChange={(e) => handleChange(e, "ct_1")}
//                   />
//                   <br />
//                   <input
//                     type="number"
//                     name={el.roll_no}
//                     defaultValue={el.ct_2}
//                     onChange={(e) => handleChange(e, "ct_2")}
//                   />
//                   <br />
//                   <input
//                     type="number"
//                     name={el.roll_no}
//                     defaultValue={el.assignments}
//                     onChange={(e) => handleChange(e, "assignments")}
//                   />
//                   <br />
//                   <input
//                     type="number"
//                     name={el.roll_no}
//                     defaultValue={el.end_sem}
//                     onChange={(e) => handleChange(e, "end_sem")}
//                   />
//                   <br />
//                   <input
//                     type="text"
//                     name={el.roll_no}
//                     defaultValue={el.grade}
//                     onChange={(e) => handleChange(e, "grade")}
//                   />
//                   <br />
//                 </div>
//               ))}
//             </div>
//             <button type="button" onClick={handlePostData}>
//               Submit
//             </button>
//           </div>
//         </>
//       )} */}
      // {resultData && (
      //   <>
          // <div className="course-name">Course: {params.name}</div>
          // <div className="result-table-container">
          //   <div className="result-table">
          //     <div className="table-header">
          //       <div className="column centered">Roll No</div>
          //       <div className="column centered">CT1</div>
          //       <div className="column centered">CT2</div>
          //       <div className="column centered">Assignments</div>
          //       <div className="column centered">End Sem</div>
          //       <div className="column centered">Grade</div>
          //     </div>
          //     <div className="table-body">
          //       {resultData.map((el,index) => (
          //         <div className="student" key={el.id}>
          //           <div className="column centered">{el.roll_no}</div>
          //           <div className="column">
          //             <input
          //               type="number"
          //               name={el.roll_no}
          //               defaultValue={el.ct_1}
          //               onChange={(e) => handleChange(e, "ct_1")}
          //             />
          //           </div>
          //           <div className="column">
          //             <input
          //               type="number"
          //               name={el.roll_no}
          //               defaultValue={el.ct_2}
          //               onChange={(e) => handleChange(e, "ct_2")}
          //             />
          //           </div>
          //           <div className="column">
          //             <input
          //               type="number"
          //               name={el.roll_no}
          //               defaultValue={el.assignments}
          //               onChange={(e) => handleChange(e, "assignments")}
          //             />
          //           </div>
          //           <div className="column">
          //             <input
          //               type="number"
          //               name={el.roll_no}
          //               defaultValue={el.end_sem}
          //               onChange={(e) => handleChange(e, "end_sem")}
          //             />
          //           </div>
          //           <div className="column">
          //             <input
          //               type="text"
          //               name={el.roll_no}
          //               defaultValue={el.grade}
          //               onChange={(e) => handleChange(e, "grade")}
          //             />
          //           </div>
          //         </div>
          //       ))}
          //     </div>
          //   </div>
          // </div>
          // <div className="submit-btn centered">
          //   <button type="button" onClick={handlePostData}>
          //     Submit
          //   </button>
          // </div>
      //   </>
      // )}


//     </>
//   );
// };

// const StudentResult = (props) => {
//   console.log("inside student  Result ");
//   const params = useParams();
//   const [resultDetails, setResultDetails] = useState(null);

//   useEffect(() => {
//     console.log("inside use effect");
//     const getRestultData = async () => {
//       let details = {
//         course_code: params.course_id,
//         roll_no: props.user_details.roll_no,
//       };

//       const response = await axios.get(
//         "http://localhost:8000/api/getResultForStudentForCourse/",
//         { params: details }
//       );
//       console.log("response data", response.data);
//       setResultDetails(response.data);
//       console.log("result data", resultData);
//     };

//     getRestultData();
//   }, []);

//   {/* <div>
//     <DashboardNavbar />
//   </div>
//   {resultDetails && (
//     <>
//       course : {params.course_id}
//       Ct 1 : {resultDetails.ct_1}
//       Ct 2 : {resultDetails.ct_2}
//       Assigenments : {resultDetails.assignments}
//       End Sem : {resultDetails.end_sem}
//       Grade : {resultDetails.grade}
//     </>
//   )} */}
//   return (
//     <>
//       <div>
//         {resultDetails && (
//           <>
            // <div className="result-container">
            //   <div className="result-heading">
            //     <span>Result - {params.course_id.slice(0, 2).toUpperCase() + params.course_id.slice(2)}</span>
            //   </div>
            //   <div className="result-item">
            //     <span className="result-label">CYCLE TEST 1 :</span>
            //     <span className="result-value">{resultDetails.ct_1} / 20</span>
            //   </div>
            //   <div className="result-item">
            //     <span className="result-label">CYCLE TEST 2 :</span>
            //     <span className="result-value">{resultDetails.ct_2} / 20</span>
            //   </div>
            //   <div className="result-item">
            //     <span className="result-label">ASSIGNMENTS :</span>
            //     <span className="result-value">{resultDetails.assignments} / 10</span>
            //   </div>
            //   <div className="result-item">
            //     <span className="result-label">END SEMESTER :</span>
            //     <span className="result-value">{resultDetails.end_sem} / 50</span>
            //   </div>
            // </div>
            // <div className="result-summary">
            //   <div className="total-score">
            //     TOTAL SCORE SECURED IN THE COURSE :
            //     <span> {resultDetails.ct_1 + resultDetails.ct_2 + resultDetails.assignments + resultDetails.end_sem}/100</span>
            //   </div>
            //   <div className="grade">
            //     GRADE FOR THE COURSE :
            //     <span> {resultDetails.grade}</span>
            //   </div>
            // </div>
//           </>
//         )}
//       </div>
//     </>
//   );
// };

// const Result = () => {
//   const location = useLocation();
//   const user_details = location.state?.user_details;
//   // console.log("inside main  Result ", props.user_details);
//   return (
//     <>
//       <DashboardNavbar user_details={user_details} />
//       {user_details.type_of_user === "faculty" ? (
//         <FacultyResult user_details={user_details} />
//       ) : (
//         <StudentResult user_details={user_details} />
//       )}
//     </>
//   );
// };

// export default Result;

import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import DashboardNavbar from "./DashboardNavbar";
import "../css/studentResult.css";
import "../css/facultyResult.css";



const FacultyResult = (props) => {
  console.log("inside faculty  Result ");
  const params = useParams();
  const [resultData, setResultData] = useState(null);
  const [courseType, setCourseType] = useState(null)

  useEffect(() => {
    let details = {
      course_code: params.course_id,
      department: params.department,
    };
    const getStudents = async () => {
      const response = await axios.get(
        "http://localhost:8000/api/getStudentsFromCourseCodeForResult/",
        { params: details }
      );
      setResultData(response.data.student_list);
      console.log(response.data);
      console.log(resultData)
    };
    getStudents();

    const getCourseType = async () => {
      const response_course_type = await axios.get(
        "http://localhost:8000/api/getCourseType/",
        { params: details }
      );
      setCourseType(response_course_type.data.course_type)

    }


    getCourseType()
  }, []);

  const handlePostData = async () => {
    if(courseType=='Theory')
    {

      const response = await axios.post(
        "http://127.0.0.1:8000/api/addResult/",
        resultData
      );
    }
    else{
      const response = await axios.post(
        "http://127.0.0.1:8000/api/addResultLab/",
        resultData
      );

    }
  };

  const handleChange = (e, field) => {
    var roll_no = e.target.name;
    var newResultData = [...resultData];
    let index = newResultData.findIndex((el) => el.roll_no === roll_no);
    if (field !== "grade") {
      newResultData[index][field] = parseFloat(e.target.value);
    } else {
      newResultData[index][field] = e.target.value;
    }

    setResultData(newResultData);
  };

  return (
    <>
      {resultData && (courseType === 'Theory') && (

        
        <>
          <div className="course-name">Course: {params.course_id}</div>
          <div className="result-table-container">
            <div className="result-table">
              <div className="table-header">
                <div className="column centered">Roll No</div>
                <div className="column centered">CT1</div>
                <div className="column centered">CT2</div>
                <div className="column centered">Assignments</div>
                <div className="column centered">End Sem</div>
                <div className="column centered">Grade</div>
              </div>
              <div className="table-body">
                {resultData.map((el,index) => (
                  <div className="student" key={el.id}>
                    <div className="column centered">{el.roll_no}</div>
                    <div className="column">
                      <input
                        type="number"
                        name={el.roll_no}
                        defaultValue={el.ct_1}
                        onChange={(e) => handleChange(e, "ct_1")}
                      />
                    </div>
                    <div className="column">
                      <input
                        type="number"
                        name={el.roll_no}
                        defaultValue={el.ct_2}
                        onChange={(e) => handleChange(e, "ct_2")}
                      />
                    </div>
                    <div className="column">
                      <input
                        type="number"
                        name={el.roll_no}
                        defaultValue={el.assignments}
                        onChange={(e) => handleChange(e, "assignments")}
                      />
                    </div>
                    <div className="column">
                      <input
                        type="number"
                        name={el.roll_no}
                        defaultValue={el.end_sem}
                        onChange={(e) => handleChange(e, "end_sem")}
                      />
                    </div>
                    <div className="column">
                      <input
                        type="text"
                        name={el.roll_no}
                        defaultValue={el.grade}
                        onChange={(e) => handleChange(e, "grade")}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="submit-btn centered">
            <button type="button" onClick={handlePostData}>
              Submit
            </button>
          </div>
        </>
      )}

      {resultData && (courseType === 'Lab') && (
        <>
          <div className="course">
            <div className="coursename">Course: {params.name}</div>
            <div className="heading">
              <p>Roll No</p>
              <p>Internal Marks</p>
              <p>End Lab</p>
              <p>GRADE</p>
            </div>
            <div className="students">
              {resultData.map((el) => (
                <div
                  className="student"
                  key={el.id}
                  style={{ display: "flex" }}
                >
                  <p>{el.roll_no}</p>
                  <input
                    type="number"
                    name={el.roll_no}
                    defaultValue={el.internal_marks}
                    onChange={(e) => handleChange(e, "internal_marks")}
                  />
                  <br />
                  <input
                    type="number"
                    name={el.roll_no}
                    defaultValue={el.end_lab}
                    onChange={(e) => handleChange(e, "end_lab")}
                  />
                  <br />
                  <input
                    type="text"
                    name={el.roll_no}
                    defaultValue={el.grade}
                    onChange={(e) => handleChange(e, "grade")}
                  />
                  <br />
                </div>
              ))}
            </div>
            <button type="button" onClick={handlePostData}>
              Submit
            </button>
          </div>
        </>
      )}
    </>
    
  );
};

const StudentResult = (props) => {
  console.log("inside student  Result ");
  const params = useParams();
  const [resultDetails, setResultDetails] = useState(null);
  const [courseType, setCourseType] = useState(null) 

  console.log('inside student result',props.user_details)



  useEffect(() => {
    console.log('inside use effect')

    const getRestultData = async () => {
      let details = {
        course_code: params.course_id,
        roll_no: props.user_details.roll_no,
      };
    
      const response_course_type = await axios.get(
        "http://localhost:8000/api/getCourseType/",
        { params: details }
      );

      console.log('type of course',response_course_type.data.course_type)

      setCourseType(response_course_type.data.course_type)
     console.log('course type',courseType)

      if (response_course_type.data.course_type === 'Lab') {
        
        const response = await axios.get(
          "http://localhost:8000/api/getLabResultForStudentForCourse/",
          { params: details }
        );
        console.log("response data", response.data);
        setResultDetails(response.data);
        console.log("result data", resultDetails);

      }
      else {
        const response = await axios.get(
          "http://localhost:8000/api/getResultForStudentForCourse/",
          { params: details }
        );
        console.log("response data", response.data);
        setResultDetails(response.data);
        console.log("result data", resultDetails);
      }

    };

    getRestultData();
  }, []);

  return (
    <>
      {resultDetails && (courseType === 'Theory') && (
        <>
          {/* course : {params.course_id}
          Ct 1 : {resultDetails.ct_1}
          Ct 2 : {resultDetails.ct_2}
          Assigenments : {resultDetails.assignments}
          End Sem : {resultDetails.end_sem}
          Grade : {resultDetails.grade} */}
          <div className="result-container">
              <div className="result-heading">
                <span>Result - {params.course_id.slice(0, 2).toUpperCase() + params.course_id.slice(2)}</span>
              </div>
              <div className="result-item">
                <span className="result-label">CYCLE TEST 1 :</span>
                <span className="result-value">{resultDetails.ct_1} / 20</span>
              </div>
              <div className="result-item">
                <span className="result-label">CYCLE TEST 2 :</span>
                <span className="result-value">{resultDetails.ct_2} / 20</span>
              </div>
              <div className="result-item">
                <span className="result-label">ASSIGNMENTS :</span>
                <span className="result-value">{resultDetails.assignments} / 10</span>
              </div>
              <div className="result-item">
                <span className="result-label">END SEMESTER :</span>
                <span className="result-value">{resultDetails.end_sem} / 50</span>
              </div>
            </div>
            <div className="result-summary">
              <div className="total-score">
                TOTAL SCORE SECURED IN THE COURSE :
                <span> {resultDetails.ct_1 + resultDetails.ct_2 + resultDetails.assignments + resultDetails.end_sem}/100</span>
              </div>
              <div className="grade">
                GRADE FOR THE COURSE :
                <span> {resultDetails.grade}</span>
              </div>
            </div>
        </>
      )}
      {resultDetails && (courseType === 'Lab') && (
        <>
          course : {params.course_id}
          Internal Marks : {resultDetails.internal_marks}
          End Lab : {resultDetails.end_lab}
          Grade : {resultDetails.grade}
        </>
      )

      }
    </>
  );
};

const Result = () => {
  console.log("inside main  Result ");
  const location = useLocation();
  const user_details = location.state?.user_details;
  return (
    <>
    <DashboardNavbar/>
      {(user_details.type_of_user === "faculty" || user_details.type_of_user === "faculty_cord") ? (
        <FacultyResult user_details={user_details} />
      ) : (
        <StudentResult user_details={user_details} />
      )}
    </>
  );
};

export default Result;
