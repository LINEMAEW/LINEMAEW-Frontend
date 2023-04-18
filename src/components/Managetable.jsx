import React from "react";
import { useState, useEffect, useRef } from "react";
import axios from "axios"
import "./Managetable.css";
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
import backgroundImage from "../images/rest-bg.png";
import Delbutton from './Delbutton';
import Editbutton from './Editbutton';
import Bin from "../pics/bin.png";
import EndPageDecor from "../pics/decor.png";
import { Routes, Route, Outlet, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import EditMenu from "../EditMenu";
// import Swal from 'sweetalert2';
// import swal from 'sweetalert2';


const ManageTable = () => {
    const [menu, setMenu] = useState([])
    const [oldMenu, setOldMenu] = useState([])
    // const [id, setId] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        axios
            .get("https://linemaew.onrender.com/api/restaurant/1/all_menu")
            .then(response => {
                // console.log(response.data.all_menus)
                setMenu(response.data.all_menus)
            }).catch(err => {
                console.log(err)
            })
    }, [])

    function deleteMenu(id) {
        // console.log(id)
        const newMenu = menu.filter((data) => {
            if (data.item_id != id) {
                return true
            }
            // Swal.fire({
            //     position: 'center',
            //     icon: 'success',
            //     title: 'The menu has been deleted',
            //     showConfirmButton: false,
            //     timer: 1500
            // })
            return false
        })
        axios
            .delete("https://linemaew.onrender.com/api/menu/" + id +"/delete")
            .then(response => {
                if (response.status == 200) {
                    setMenu(newMenu)
                }
            }).catch(err => {
                console.log(err)
            })
        // console.log(newMenu)
        setMenu(newMenu)
    }

    // function editMenu(id) {
            
    //         axios
    //             .get("https://linemaew.onrender.com/api/menu/" + id)
    //             .then(response => {
    //                 // console.log(response)
    //                 if (response.status == 200) {
    //                     // console.log('go')
    //                     console.log(response.data.menu_detail[0])
    //                     setOldMenu(response.data.menu_detail[0])
    //                     navigate("/edit");
    //                 }
                    
    //             }).catch(err => {
    //                 console.log(err)
    //             })
    // }

    return (
        <div>
            <div style={{ textAlign: "left", color: "#002F15" }}>
                <h1>Korean BBQ</h1>
                <h2>Manage Restaurant</h2>
            </div>
            <NavLink to="/add">
        <div style={{textAlign: "right"}}>
          <button className="add-button"> + Add Menu</button>
        </div>
      </NavLink>
            <MDBTable align="middle" bordered borderColor="success" responsive="sm">
                <MDBTableHead>
                    <tr className="bar-col">
                        <th scope="col">
                            Menu <br /> Name
                        </th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </MDBTableHead>
                
                <MDBTableBody>
                    {
                        menu.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <div className="ms-3">
                                                <p className="fw-bold mb-1">{data.menu_name}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="fw-normal mb-1 gaegu">
                                            {data.menu_description}
                                        </p>
                                    </td>
                                    <td>
                                        <div className="gaegu">{data.price}</div>
                                    </td>
                                    <td>
                                        {/* <Editbutton /> */}
                                            <button className="round-butt-edit" onClick={() => { navigate("/edit",{state:{id:data.item_id}})}}>🖊️</button>
                                    </td>
                                    <td>
                                        <button className="round-butt-del" onClick={() => { deleteMenu(data.item_id) }}>🗑️</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </MDBTableBody>
            </MDBTable>
            <div>
                <img src={EndPageDecor} className="end-page-decor" height = "150px"/>
            </div>
        </div>
    );
}
export default ManageTable;
