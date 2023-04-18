import React from "react";
import "./Manage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import backgroundImage from "./images/rest-bg.png";
import ManageTable from "./components/Managetable";

export default function App() {
  return (
    <div>
      <ManageTable />
    </div>
  );
}
