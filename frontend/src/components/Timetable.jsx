// import React, { useState, useEffect, useContext } from "react";
// import { NavLink, useLocation } from "react-router-dom";
// import DashboardNavbar from "./DashboardNavbar";
// // import { Link } from 'react-router-dom';
// import '../css/timetable.css'
// import axios from 'axios'
// const Timetable = () => {
//   console.log("inside time table");
//   const location = useLocation();
//   const user_details = location.state?.user_details;
//   console.log(user_details)
//   const [timetableData, setTimetableData] = useState([]);
//   useEffect(() => {
//     fetchTimetableData();
//   }, []);

//   const fetchTimetableData = async () => {
//     try {
//       const semester = user_details.semester;
//       const department = user_details.department;
//       //write function to get timetable for specific sem and department
//       // const response = await axios.get('http://127.0.0.1:8000/api/timetable/');
//       console.log("before calling");
//       let details={
//         semester: semester,
//         department: department,
//       };
//       console.log("details are: ",details);
//       let response = await axios.get(
//         "http://localhost:8000/api/getTimetableForStudent/",
//         {
//           params: details,
//         }
//       );
//       console.log("after calling: ",response.data);
//       setTimetableData(response.data.timetable_data);
//       console.log(timetableData)
//     } catch (error) {
//       console.error("Error fetching timetable data:", error);
//     }
//   };
//   return (
//     <>
//     <DashboardNavbar/>
//     {timetableData && (

    
//     <div className="timetable">
//       {/* <Link to="/home">Go to Home</Link> */}
      
//       <p>view timetable</p>
      
//       <p>CSE Department, 6th semester</p>
//         <div >

//           <table>
//             <thead>
//               <tr>
//                 <th>Day</th>
//                 <th>Slot 1</th>
//                 <th>Slot 2</th>
//                 <th>Slot 3</th>
//                 <th>Slot 4</th>
//                 <th>Slot 5</th>
//                 <th>Slot 6</th>
//                 <th>Slot 7</th>
//               </tr>
//             </thead>
//             <tbody>
//               {timetableData.map((entry,index) => {return(
               
//                 <tr key={entry.id || index}>
//                   <td>{entry.day}</td>
//                   <td>{entry.slot_1}</td>
//                   <td>{entry.slot_2}</td>
//                   <td>{entry.slot_3}</td>
//                   <td>{entry.slot_4}</td>
//                   <td>{entry.slot_5}</td>
//                   <td>{entry.slot_6}</td>
//                   <td>{entry.slot_7}</td>
//                 </tr>
//               )})}
//             </tbody>
//           </table>
//         </div>
//     </div>
//     )}
//     </>
//   );
// };

// export default Timetable;

import React, { useState, useEffect, useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import DashboardNavbar from "./DashboardNavbar";
// import { Link } from 'react-router-dom';
import '../css/timetable.css'
import axios from 'axios'


const FacultyTimetable = () => {
  console.log("inside faculty time table");
  const location = useLocation();
  const user_details = location.state?.user_details;
  console.log(user_details)
  const [timetableData, setTimetableData] = useState([]);
  useEffect(() => {
    fetchTimetableData();
  }, []);

  const fetchTimetableData = async () => {
    try {
      const faculty_name = user_details.faculty_name;
      //write function to get timetable for specific sem and department
      // const response = await axios.get('http://127.0.0.1:8000/api/timetable/');
      console.log("before calling");
      let details = {
        faculty_name: faculty_name,
      };
      console.log("details are: ", details);
      let response = await axios.get(
        "http://localhost:8000/api/facultyTimetable/",
        {
          params: details,
        }
      );
      console.log("after calling: ", response.data);
      setTimetableData(response.data.faculty_timetable_data);
      console.log(timetableData)
    } catch (error) {
      console.error("Error fetching timetable data:", error);
    }
  };
  return (
    <>
      {/* <DashboardNavbar /> */}
      {timetableData && (


        <div className="timetable">
          {/* <Link to="/home">Go to Home</Link> */}

          <p>view timetable for faculty {user_details.name}</p>

          {/* <p>CSE Department, 6th semester</p> */}
          <div >

            <table>
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Slot 1</th>
                  <th>Slot 2</th>
                  <th>Slot 3</th>
                  <th>Slot 4</th>
                  <th>Slot 5</th>
                  <th>Slot 6</th>
                  <th>Slot 7</th>
                </tr>
              </thead>
              <tbody>
                {timetableData.map((entry, index) => {
                  return (

                    <tr key={entry.id || index}>
                      <td>{entry.day}</td>
                      <td>{entry.slot_1}</td>
                      <td>{entry.slot_2}</td>
                      <td>{entry.slot_3}</td>
                      <td>{entry.slot_4}</td>
                      <td>{entry.slot_5}</td>
                      <td>{entry.slot_6}</td>
                      <td>{entry.slot_7}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};


const StudentTimetable = () => {
  console.log("inside time table");
  const location = useLocation();
  const user_details = location.state?.user_details;
  console.log(user_details)
  const [timetableData, setTimetableData] = useState([]);
  useEffect(() => {
    fetchTimetableData();
  }, []);

  const fetchTimetableData = async () => {
    try {
      const semester = user_details.semester;
      const department = user_details.department;
      //write function to get timetable for specific sem and department
      // const response = await axios.get('http://127.0.0.1:8000/api/timetable/');
      console.log("before calling");
      let details = {
        semester: semester,
        department: department,
      };
      console.log("details are: ", details);
      let response = await axios.get(
        "http://localhost:8000/api/getTimetableForStudent/",
        {
          params: details,
        }
      );
      console.log("after calling: ", response.data);
      setTimetableData(response.data.timetable_data);
      console.log(response.data.timetable_data)
    } catch (error) {
      console.error("Error fetching timetable data:", error);
    }
  };
  return (
    <>
      <DashboardNavbar />
      {timetableData && (


        <div className="timetable">
          {/* <Link to="/home">Go to Home</Link> */}

          <p>view timetable</p>

          <p>CSE Department, 6th semester</p>
          <div >

            <table>
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Slot 1</th>
                  <th>Slot 2</th>
                  <th>Slot 3</th>
                  <th>Slot 4</th>
                  <th>Slot 5</th>
                  <th>Slot 6</th>
                  <th>Slot 7</th>
                </tr>
              </thead>
              <tbody>
                {timetableData.map((entry, index) => {
                  return (

                    <tr key={entry.id || index}>
                      <td>{entry.day}</td>
                      <td>{entry.slot_1}</td>
                      <td>{entry.slot_2}</td>
                      <td>{entry.slot_3}</td>
                      <td>{entry.slot_4}</td>
                      <td>{entry.slot_5}</td>
                      <td>{entry.slot_6}</td>
                      <td>{entry.slot_7}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};




const Timetable = () => {
  const location = useLocation();
  const user_details = location.state?.user_details;
  // console.log("inside main  Result ", props.user_details);
  return (
    <>
      <DashboardNavbar user_details={user_details} />
      {user_details.type_of_user === "faculty" ? (
        <FacultyTimetable user_details={user_details} />
      ) : (
        <StudentTimetable user_details={user_details} />
      )}
    </>
  );
};

export default Timetable;



// models.py

// class FacultyTimeTable(models.Model):
//     name = models.CharField(max_length=255)
//     day = models.CharField(max_length=10)
//     slot_1 = models.CharField(max_length=5, blank=True, null=True)
//     slot_2 = models.CharField(max_length=5, blank=True, null=True)
//     slot_3 = models.CharField(max_length=5, blank=True, null=True)
//     slot_4 = models.CharField(max_length=5, blank=True, null=True)
//     slot_5 = models.CharField(max_length=5, blank=True, null=True)
//     slot_6 = models.CharField(max_length=5, blank=True, null=True)
//     slot_7 = models.CharField(max_length=5, blank=True, null=True)
  
    
//     def __str__(self):
//         return str(self.name) + ' '+self.day


// admin.py:
// add FacultyTimeTable,


// urls.py:
// path('api/facultyTimetable/', facultyTimetable, name='facultyTimetable'),
// path('api/getFacultySchedule/', getFacultySchedule, name='getFacultySchedule'),


