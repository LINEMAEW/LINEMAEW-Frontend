import React from "react";
import './Editbutton.css';
import Bin from "../pics/bin.png";
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Divider, Radio, Space } from 'antd';
import { useState } from 'react';

const Roundbutton = ({ imageSrc }) => {
    return (
        <button className="round-butt-edit">🖊️</button>
    );
};

export default Roundbutton;