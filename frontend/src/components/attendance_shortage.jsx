import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Courses from './courses';
import axios from 'axios';
import DashboardNavbar from './DashboardNavbar';
import '../css/attendanceshortage.css'
const AttendanceShortage = () => {
    const [shortageList, setShortageList]=useState('')
    let params = useParams();
    useEffect(() => {
        const getShortageList = async()=>{
            let details = {
                course_code: params.course_id,
                department: params.department,
            };
            console.log(details);
            const response = await axios.get(
                "http://localhost:8000/api/getStudentsWithAttendanceShortage/",
                { params: details }
            );
            setShortageList(response.data.shortage_list);
            console.log(response.data.shortage_list);
                }
            getShortageList();
    }, [])
    
  return (
    <>
    <DashboardNavbar/>
    <div className='attendanceshortage'>
      <p>Attendance Shortage</p>
      <div><p>Roll No</p> <p>Name</p> <p>Percentage</p></div>
      {shortageList ? (
        shortageList.map((list,index)=>{
           return ( <div key={index}><p>{list[0]}</p> <p>{list[1]}</p> <p>{parseFloat(list[2]).toFixed(2)}</p></div>)
        })
      ): (
      <h3>Loading..</h3>
      )}
    </div>
    </>
  )
}

export default AttendanceShortage;
