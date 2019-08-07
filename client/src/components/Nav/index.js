import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Google Search Book
      </a>
      <div id="navbar">
          <ul className="navbar-nav">
              <li className="nav-item" id="main">
                  <a className="nav-link" href="/"><button type="button" className="btn btn-info text-white">Search Books</button></a>
                  </li>
                  <li className="nav-item" id="status">
              <a className="nav-link" href="/saved"><button type="button" className="btn btn-warning text-white">Saved Books</button></a>
            </li>
          </ul>
          </div>
    </nav>
  );
}

export default Nav;
