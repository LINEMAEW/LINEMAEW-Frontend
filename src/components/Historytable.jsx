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
import Status from './Status';
import Bin from "../pics/bin.png";
import EndPageDecor from "../pics/decor.png";
import { Routes, Route, Outlet, NavLink } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";


export default function App() {
    const [historyOrder, setHistoryOrder] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        axios
            .get("https://linemaew.onrender.com/api/restaurant/1/history")
            .then(response => {
                console.log(response.data.order_history)
                setHistoryOrder(response.data.order_history)
                console.log("history order")
            }).catch(err => {
                console.log(err)
            })
    }, [])
    
    function changeStatus(newStatus,data) {
        const setOrder = {
            user_id: data.user_id,
            order_id: data.order_id,
            delivery_status: newStatus
        }
        const updateHistoryOrder = historyOrder.map((order,index) => {
            if (order.order_id == data.order_id) {
                order.status = newStatus
            }
            return order
        })
        console.log(updateHistoryOrder)
        console.log(setOrder)
        axios
            .put("https://linemaew.onrender.com/api/order/setStatus", setOrder)
            .then(response => {
                // console.log(response)
                if (response.status == 200) {
                    setHistoryOrder(updateHistoryOrder)
                }
                
            }).catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <div style={{ textAlign: "left", color: "#002F15" }}>
                <h1>Korean BBQ</h1>
                <h2>History</h2>
            </div>
            <MDBTable align="middle" bordered borderColor="success" responsive="sm">
                <MDBTableHead>
                    <tr className="bar-col">
                        <th scope="col">
                            Order ID
                        </th>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Date</th>
                        <th scope="col">Status</th>
                    </tr>
                </MDBTableHead>
                {
                    historyOrder.map((data, index) => {
                        return (
                            <MDBTableBody key={index}>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <div className="ms-3" >
                                                <NavLink to={`/order/${data.order_id}`} className="fw-normal mb-0">{data.order_id}</NavLink>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="fw-normal mb-0 gaegu">
                                            {data.customer_name}
                                        </p>
                                    </td>
                                    <td>
                                        <div className="gaegu">{data.total_price}</div>
                                    </td>
                                    <td>
                                        <div className="gaegu">{data.order_date}</div>
                                    </td>
                                    <td>
                                        <Status changeStatus={changeStatus} data={data}/>
                                    </td>
                                </tr>
                            </MDBTableBody>
                        )
                    })
                }
            </MDBTable>
            <div>
                <img src={EndPageDecor} className="end-page-decor" height = "150px"/>
            </div>
        </div>
    );
}
