import React from 'react';
import LeftSidebar from './LeftSidebar/LeftSidebar';
import RightSidebar from './RightSidebar/RightSidebar';
import Main from './Main/Main';
import './Container.css';

const Container = () => {
    return (
        <div className="container">
            <LeftSidebar style={{width:'25%'}} />
            <Main style={{width:'50%'}} />
            <RightSidebar style={{width:'25%'}} />
        </div>
    );
};

export default Container;