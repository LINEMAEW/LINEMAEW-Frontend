import React from "react";
import { useState, useEffect, useRef } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import "./AddMenu.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App"
import EndPageDecor2 from "../src/pics/decor2.png";
import swal from 'sweetalert2';


const AddMenu = () => {
    const menuName = useRef();
    const menuDescription = useRef();
    const menuPrice = useRef();
    const navigate = useNavigate();
    async function addMenu() {
        const newMenu = {
            menu_name: menuName.current.value,
            description: menuDescription.current.value,
            price: menuPrice.current.value
        }
        if (menuName.current.value && menuDescription.current.value && menuPrice.current.value) {
            // console.log("Send");
            axios
                .post("https://linemaew.onrender.com/api/restaurant/1/add_menu", newMenu)
                .then(response => {
                    // console.log(response)
                    if (response.status == 200) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'New menu has been added',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        // console.log('go')
                        navigate("/manage");
                    }
                    
                }).catch(err => {
                    Swal.fire('Some of your input is wrong. Please try again.')
                    console.log(err)
                })
        }
        else {
            console.log("กรอกข้อมูลไม่ครบ");
            Swal.fire('Please fill all the blanks.')
        }
    }
    return (
        <div className="parent">
            <h1>Add New Menu</h1>
            <div className="in-box">
                <p>Menu Name:</p>
                <textarea className="input-dec" style={{ width: "17cm" }} ref={menuName}></textarea>
                <p>Menu <br />Description:</p>
                <textarea className="input-dec" style={{ width: "17cm", height: "5cm" }} ref={menuDescription}></textarea>
                <p>Price: </p>
                <textarea className="input-dec" style={{ width: "5cm" }} ref={menuPrice}></textarea>
            </div>
            <button className="butt-add" onClick={addMenu}> Add Menu </button>
            <div className="image-container">
                <img src={EndPageDecor2} className="left-page-decor" height = "550px"/>
            </div>
        </div>
    );
};

export default AddMenu;