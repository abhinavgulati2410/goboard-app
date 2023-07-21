import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Footer() {
  return (
    <div className="container my-5 ">

  <footer className="text-center text-lg-start" style={{"background-color": "rgba(25,135,84,1"}}>
    <div className="container d-flex justify-content-center py-5">
      <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{"background-color": "#3b5998"}}>
        <i className="bi bi-facebook" />
      </button>
      <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{"background-color": "#1DA1F2"}}>
        <i className="bi bi-twitter"></i>
      </button>
      <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{"background-color": "#d62976"}}>
        <i className=" bi bi-instagram"></i>
      </button>
      <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{"background-color": "#DB4437"}}>
        <i className="bi bi-envelope"></i>
      </button>
    </div>

    
    <div className="text-center text-white p-3" style={{"background-color": "rgba(0, 0, 0, 0.2)"}}>
    © {new Date().getFullYear()} GoBoard, Inc
    </div>
    
  </footer>
  
</div>
  )
}




/*import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <Link
            to="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          ></Link>
          <span className="text-muted">
            © {new Date().getFullYear()} GoBoard, Inc
          </span>
        </div>
      </footer>
    </div>
  );
}
*/