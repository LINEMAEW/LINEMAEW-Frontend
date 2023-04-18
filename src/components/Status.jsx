import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';
import './Status.css';
import axios from "axios"

const Status = ({ changeStatus,data }) => {

  

  return (
      <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
        {data.status}
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenu2" onClick={(e) => { changeStatus(e.target.innerText,data)}}>
        <li><button className="dropdown-item" type="button" >processing</button></li>
        <li><button className="dropdown-item" type="button" >pending</button></li>
        <li><button className="dropdown-item" type="button" >delivered</button></li>
        <li><button className="dropdown-item" type="button" >canceled</button></li>
      </ul>
    </div>
  );
};

export default Status;