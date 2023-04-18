import React from "react";
import './Delbutton.css';
import Bin from "../pics/bin.png";
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Divider, Radio, Space } from 'antd';
import { useState } from 'react';

const Roundbutton = ({ deleteMenu,id }) => {
    return (
        <button className="round-butt-del" onClick={deleteMenu(id)}>🗑️</button>
    );
};

export default Roundbutton;