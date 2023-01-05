import React from 'react';
import EnterSidebar from '../../../Shared/EnterSidebar/EnterSidebar';
import './Register.css'

const Register = () => {
    return (
        <div className='enter-container'>
            <EnterSidebar />
            <div>
                <form>
                    <h2>Register</h2>
                    <input type="text" placeholder='Your Name' />
                    <input type="text" placeholder='Your Email' />
                    <input type="image" src="" alt="" />
                </form>
            </div>
        </div>
    );
};

export default Register;