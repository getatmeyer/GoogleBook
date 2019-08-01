import React from "react";
import "./style.css";

function Jumbotron({ children }) {
    return (
    <div className="jumbotron jumbotron-fluid d-flex align-items-center">
        <div className="container text-center">
            <h1>Bookmark Your Books</h1>
            {children}
            </div>
         </div>
    );
}

export default Jumbotron;