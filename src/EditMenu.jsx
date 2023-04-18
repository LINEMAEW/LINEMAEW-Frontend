import React from "react";
import { useState, useEffect, useRef } from "react";
import axios from "axios"
import { useNavigate, useLocation } from "react-router-dom";
import Swal from 'sweetalert2';
import EndPageDecor2 from "../src/pics/decor2.png";
import "./EditMenu.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App"
import "./components/Managetable"
import swal from 'sweetalert2';


const EditMenu = () => {
    const [editedMenu, setEditedMenu] = useState({ name: "", description: "", price: "" });
    const location = useLocation();
    const navigate = useNavigate();
    const id = location.state.id;

    useEffect(() => {
        axios
            .get("https://linemaew.onrender.com/api/menu/" + id)
            .then(response => {
                setEditedMenu(response.data.menu_detail[0]);
            }).catch(err => {
                console.log(err)
            })
    }, [])

    async function editMenu() {
        if (editedMenu.name && editedMenu.description && editedMenu.price) {
            console.log("Send");
            console.log(editedMenu);
            axios
                .put("https://linemaew.onrender.com/api/menu/"+ id + "/edit", editedMenu)
                .then(response => {
                    if (response.status === 200) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'The menu has been edited',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate("/manage");
                    }
                }).catch(err => {
                    Swal.fire('Some of your input is wrong. Please try again.')
                    console.log(err)
                })
        }
        else {
            console.log("กรอกข้อมูลไม่ครบ");
            Swal.fire('Please fill all the blanks')
        }
    }

    function handleNameChange(event) {
        setEditedMenu(prevState => ({
            ...prevState,
            name: event.target.value
        }));
    }

    function handleDescriptionChange(event) {
        setEditedMenu(prevState => ({
            ...prevState,
            description: event.target.value
        }));
    }

    function handlePriceChange(event) {
        setEditedMenu(prevState => ({
            ...prevState,
            price: event.target.value
        }));
    }

    return (
        <div className="parent">
            <h1>Edit Menu</h1>
            <div className="in-box">
                <p>Menu Name:</p>
                <textarea
                    className="input-dec"
                    style={{ width: "17cm" }}
                    value={editedMenu.name}
                    onChange={handleNameChange}
                ></textarea>
                <p>Menu <br />Description:</p>
                <textarea
                    className="input-dec"
                    style={{ width: "17cm", height: "5cm" }}
                    value={editedMenu.description}
                    onChange={handleDescriptionChange}
                ></textarea>
                <p>Price: </p>
                <textarea
                    className="input-dec"
                    style={{ width: "5cm" }}
                    value={editedMenu.price}
                    onChange={handlePriceChange}
                ></textarea>
            </div>
            <button className="butt-edit" onClick={editMenu}> Edit Menu </button>
            <div>
                <img src={EndPageDecor2} className="left-page-decor" height = "550px"/>
            </div>
        </div>
    )
};

export default EditMenu;
