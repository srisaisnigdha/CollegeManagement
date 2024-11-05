import React from 'react'
import Courses from './courses'
import Todo from './todo'
import TimetableRouter from './timetablerouter'
const StudentHomePage = (props) => {
  console.log('inside student home page ')
  return(
    // <TimetableRouter user_details={props.user_details}/>
  //  <Courses user_details={props.user_details}/>
    // <Todo user_details= {props.user_details} />
    <>
    <h1>Akram</h1>
    </>
  )
}
const FacultyHomePage = (props) => {
  return(
    <>
    <Courses user_details= {props.user_details}/>
    </>
    )
}
const AdminHomePage = (props) => {
    return(
        <h1>this is admin home page</h1>
    )
}



const HomePage = (props) => {
  return (
    <>
        {props.user_type === 'student' && ( <StudentHomePage  user_details={props.user_details} />
        )}
        {props.user_type === 'faculty' && ( <FacultyHomePage  user_details={props.user_details} />
        )}
        {props.user_type === 'admin' && (
            <AdminHomePage  user_details={props.user_details} />
        )}
    </>
  )
}
export default HomePage
