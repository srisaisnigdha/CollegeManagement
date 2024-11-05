import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";
// import '../App.css' ;
import axios from 'axios';
import DashboardNavbar from "./DashboardNavbar";
import '../css/calendar.css'
function Calendar() {
  const [calendarHref, setCalendarHref] = useState("");
  const location = useLocation();
  const user_details=location.state?.user_details;

  useEffect(() => {
    async function fetchCalendarHref() {
      try {
                  const joining_yr = user_details.joining_year;
                  const department = user_details.department;
                  let details = {
                    joining_year: joining_yr,
                    department: department,
                  };
        console.log("before responese");
        console.log(details);
        const response = await axios.get(
          "http://127.0.0.1:8000/api/getCalendarId/",
          {
            params: details,
          }
        );
        console.log("after responese");
//         const data = await response.json();
        const data = response.data;
        console.log(data)
        setCalendarHref(data.calendar_id);
      } catch (error) {
        console.error("Error fetching calendar ID:", error);
      }
    }

    fetchCalendarHref();
  }, []);

  return (
    <>
    <DashboardNavbar/>
    <div className="calendar-container" >
      {/* <Link to="/home">Go to Home</Link> */}
      {/* <h2>Calender component</h2> */}
      <p>view calendar</p>
      <p>cse department, 6th semester</p>
      <iframe
        src={`https://calendar.google.com/calendar/embed?src=${calendarHref}&ctz=Asia%2FKolkata&showTitle=0`}
        style={{ border: "5px solid #EA9F26", height: "540", width: "800" }}
        width="800"
        height="600"
        frameBorder="0"
        scrolling="no"
      ></iframe>
      <br />
      <Link to="/rescheduleclass">
        <button>Reschedule Class</button>
      </Link>
      <br />
    </div>
    </>

  );
}

export default Calendar;

// import React from 'react';
// import { Link } from 'react-router-dom';
// // import '../App.css' ;

// function Calendar() {
//     return (
//         <div className="calendar-container">
//             <Link to="/home">Go to Home</Link>
//             <h2>Calender component</h2>
//             <iframe
//                 src="https://calendar.google.com/calendar/embed?src=5cc47411b973f0be87683f090d88df0dbd791532b2990b02c89153f1e9b5e2bc%40group.calendar.google.com&ctz=Asia%2FKolkata&showTitle=0"
//                 frameborder="0"
//                 scrolling="no"
//                 title="Calendar"
//             ></iframe>
//             <br />
//             <Link to="/rescheduleclass">
//                 <button>Reschedule Class</button>
//             </Link>
//             <br />
//         </div>
//     );
// }

// export default Calendar;