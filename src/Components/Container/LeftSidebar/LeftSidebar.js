import React from 'react';
import './LeftSidebar.css';
import logo from './../logo.png'
import { Link } from 'react-router-dom';

const LeftSidebar = () => {
    const widgets = [
        {
            id: 0,
            photo: 'https://media.istockphoto.com/id/1186143372/photo/little-red-kitten.jpg?s=612x612&w=0&k=20&c=PARUwPgq1EDUM8ByEQP2RdSfK_Aafl9g9cPs9t_VREE=',
            title: 'Your Profile',
            icon: 'fa-solid fa-user-group',
            path: 'profile'
        },
        {
            id: 1,
            photo: 'https://media.istockphoto.com/id/1186143372/photo/little-red-kitten.jpg?s=612x612&w=0&k=20&c=PARUwPgq1EDUM8ByEQP2RdSfK_Aafl9g9cPs9t_VREE=',
            title: 'Friends',
            icon: 'fa-solid fa-user',
            path: 'friends'
        },
        {
            id: 2,
            photo: 'https://media.istockphoto.com/id/1186143372/photo/little-red-kitten.jpg?s=612x612&w=0&k=20&c=PARUwPgq1EDUM8ByEQP2RdSfK_Aafl9g9cPs9t_VREE=',
            title: 'Make Friends',
            icon: 'fa-solid fa-user-plus',
            path: 'make-friends'
        },
        {
            id: 3,
            photo: 'https://media.istockphoto.com/id/1186143372/photo/little-red-kitten.jpg?s=612x612&w=0&k=20&c=PARUwPgq1EDUM8ByEQP2RdSfK_Aafl9g9cPs9t_VREE=',
            title: 'Gallery',
            icon: 'fa-solid fa-image',
            path: 'gallery'
        },
        {
            id: 4,
            photo: 'https://media.istockphoto.com/id/1186143372/photo/little-red-kitten.jpg?s=612x612&w=0&k=20&c=PARUwPgq1EDUM8ByEQP2RdSfK_Aafl9g9cPs9t_VREE=',
            title: 'Watch',
            icon: 'fa-solid fa-play',
            path: 'watch'
        },
    ]

    return (
        <div className='LeftSidebar'>
            <img className='logo' src={logo} width='100%' height={90} alt="" />

            {
                widgets.map(widget =>
                    <Link to={widget.path} className='hover' style={{ display: 'flex', gap: '15px', padding: "10px", alignItems: 'center', margin: '10px 0', color: 'white', textDecoration: 'none', fontSize: '18px' }}><i className={widget.icon}></i> {widget.title}</Link>
                )
            }
        </div>
    );
};

export default LeftSidebar;