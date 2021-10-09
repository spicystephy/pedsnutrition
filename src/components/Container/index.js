import React from 'react'
// import { Link } from "react-router-dom";


function Container(props) {
    return (
        <div className="container" style={props.style}>{props.children}
        </div>
    )
}
// function Container() {
//     return (
//         <div>
//             <Link to="/Home"
//             className={window.location.pathname === "/Home"}></Link>
//         </div>
//     )
// }
export default Container;
