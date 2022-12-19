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
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                </form>
            </div>
        </div>
    );
};

export default Register;