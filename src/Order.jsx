import React from "react";
import { useState, useEffect, useRef } from "react";
import axios from "axios"
import { useNavigate, useLocation } from "react-router-dom";
import { useParams } from 'react-router-dom';
import {
    MDBBadge,
    MDBBtn,
    MDBTable,
    MDBTableHead,
    MDBTableBody,
} from "mdb-react-ui-kit";

import "./EditMenu.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App"
import "./components/Managetable"
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/Managetable.css";

const Order = () => {
    const [orderItem, setOrderItem] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        axios
            .get("https://linemaew.onrender.com/api/order/" + id)
            .then(response => {
                console.log(response.data.order_detail)
                setOrderItem(response.data.order_detail)
                console.log(orderItem)
            }).catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <div className="parent">
            <h1>Order List</h1>
            <h1>Order ID: {id}</h1>
        <div className="in-box">
            <p>Menus</p>
            <MDBTable align="middle" bordered borderColor="success" responsive="sm">
                <MDBTableHead>
                    <tr className="bar-col">
                        <th scope="col">Menu Name</th>
                        <th scope="col">Quantity</th>
                    </tr>
                </MDBTableHead>
                
                <MDBTableBody>
                    {
                        orderItem.map((data, index) => {
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
                                            {data.quantity}
                                        </p>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </MDBTableBody>
            </MDBTable>
        </div>
    </div>
    )
};

export default Order;
