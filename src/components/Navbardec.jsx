import React from "react";
import './Navbardec.css';
import Rectangle from 'react-rectangle';

const Navbardec = () => {
    return (
        // <button className="nav-dec"></button>
        // <div className="rectangle"></div>
        <div style={{ background: '#9e9e9e', width: '100vw', height: '100vh' }}>
        <Rectangle aspectRatio={[5, 3]}>
          <div style={{ background: '#607d8b', width: '100%', height: '100%' }} />
        </Rectangle>
      </div>
    );
};

export default Navbardec;