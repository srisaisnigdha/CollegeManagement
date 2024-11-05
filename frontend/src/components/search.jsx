import React, { useState, useContext } from "react";
import axios from "axios";
import AdminNavbar from "./AdminNavbar";
import DashboardNavbar from "./DashboardNavbar";
import AuthContext from "../context/AuthProvider";

import "../css/search.css";

const SearchPage = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchclicked, setSearchclicked] = useState(false)
  const { auth_userdetails } = useContext(AuthContext);

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
    setSearchResults([]);
    setSearchclicked(false)
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/search/", {
        params: { searchText: searchText },
      });
      setSearchResults(response.data.search_list);
      console.log(response.data.search_list);
      setSearchclicked(true);
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  return (
    <>
      {auth_userdetails && auth_userdetails.type_of_user === "admin" ? (
        <AdminNavbar user_details={auth_userdetails} />
      ) : (
        <DashboardNavbar />
      )}
      <div className="search">
        <p>Search information</p>
        <div>
          <p>name :</p>
          <input
            type="text"
            value={searchText}
            onChange={handleSearchTextChange}
            placeholder="Enter name to search"
          />
          <button onClick={handleSearch}>🔍</button>
        </div>

        {searchText.length < 5 ? (
          <p> Enter atleast 5 characters to search</p>
        ) : (
          <ul>
            {searchResults.length > 0 ? (
              searchResults.map((result, index) => (
                <li key={index}>
                  <div className="search_result">
                    {result.roll_no ? (
                      <div>
                        <span>
                          <strong>STUDENT</strong>
                        </span>
                        <div><p className="head">Name</p> <span>:</span> {result.name}</div>
                        <div><p className="head">Roll No</p> <span>:</span> {result.roll_no}</div>
                        <div><p className="head">Department</p> <span>:</span> {result.department}</div>
                        <div><p className="head">Semester</p> <span>:</span> {result.semester}</div>
                        <div><p className="head">Joining year</p> <span>:</span> {result.joining_year}</div>
                        <div><p className="head">Email</p> <span>:</span> {result.email}</div>
                        
                      </div>
                    ) : result.faculty_id ? (
                      <>
                        <span>
                          <strong>FACULTY</strong>
                        </span>
                        <div>Name: {result.name}</div>
                        <div>Faculty ID: {result.faculty_id}</div>
                        <div>Position: {result.position}</div>
                        <div>Description: {result.description}</div>
                        <div>Designation: {result.designation}</div>
                        <div>Email: {result.email}</div>
                      </>
                    ) : (
                      <>
                        <span>
                          <strong>ADMINISTRATION STAFF</strong>
                        </span>
                        <div>Name: {result.name}</div>
                        <div>Position: {result.position}</div>
                        <div>Staff ID: {result.staff_id}</div>
                        <div>Email: {result.email}</div>
                      </>
                    )}
                  </div>
                </li>
              ))
            ) : (
              <>
              {searchclicked && 
                (<p>No results found.</p>)}
              </>
              
            )}
          </ul>
        )}
      </div>
    </>
  );
};

export default SearchPage;

// return (
//     <div>
//       <h2>Search Page</h2>
//       <input type="text" value={searchText} onChange={handleSearchTextChange} placeholder="Enter name to search" />
//       <button onClick={handleSearch}>Search</button>
//       {searchText.length<5 ? (
//         <p> Enter atleast 5 characters to search</p>
//       ):(
//         <ul>
//         {searchResults.length > 0 ? (
//                 searchResults.map((result,index) => (
//                 <li key={index}>
//                     {result.roll_no ? (
//                         <div>
//                             <span>Name: {result.name}</span><br />
//                             <span>Roll No: {result.roll_no}</span><br />
//                             <span>Department: {result.department}</span><br />
//                             <span>Semester: {result.semester}</span><br />
//                             <span>Joining year: {result.joining_year}</span><br />
//                         </div>
//                     ) : (
//                         <div>
//                             <span>Name: {result.name}</span><br />
//                             <span>Faculty ID: {result.faculty_id}</span><br />
//                             <span>Position: {result.position}</span><br />
//                             <span>Description: {result.description}</span><br />
//                             <span>Designation: {result.designation}</span><br />
//                         </div>
//                     )}
//                 </li>
//                 ))
//             ) : (
//                 <p>No results found.</p>
//             )}
//       </ul>
//       )}
//     </div>
//   );
