// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './App.jsx'
// import './index.css'
// // import Courses from './components/courses'
// import Temp from './temp.jsx'
// ReactDOM.createRoot(document.getElementById('root')).render(
  
//     // // <App />
//     <React.StrictMode>
//          <Temp/>
//     {/* <App /> */}
//   </React.StrictMode>
// )

import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './context/AuthProvider';
import App from './App.jsx';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
        <AuthProvider>
            <App />
        </AuthProvider>
    // </React.StrictMode>
);
