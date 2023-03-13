import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../service/api';
import "./AddUser.scss"

const AddUser = () => {
    const initialValue = {
        name: '',
        username: '',
        email: '',
        phone: ''
    }

    const [user, setUser] = useState(initialValue);
    const { name, username, email, phone } = user;

    let navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const addUserDetails = async () => {
        await addUser(user);
        navigate('/all');
    }
    return (
        <div>
            <h1 className='text-center mt-5 mb-4'>Add Users</h1>
            <form className='user-form'>
                <div className="row mb-3 ">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        {/* <input type="text" className="form-control" id="inputEmail3" name='name' value={name} onChange={(e) => onValueChange(e.target.value)} /> */}
                        <input className="form-control" onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">UserName</label>
                    <div className="col-sm-10">
                        {/* <input type="text" className="form-control" id="inputPassword3" name='username' value={username} onChange={(e) => onValueChange(e.target.value)} /> */}
                        <input className="form-control" onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        {/* <input type="email" className="form-control" id="inputPassword3" name='email' value={email} onChange={(e) => onValueChange(e.target.value)} /> */}
                        <input className="form-control" onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Phone</label>
                    <div className="col-sm-10">
                        {/* <input type="tel" className="form-control" id="inputPassword3" name='phone' value={phone} onChange={(e) => onValueChange(e.target.value)} /> */}
                        <input className="form-control" onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" />


                    </div>
                </div>
                <div className='add-button'>
                    <button type="submit" className="btn btn-primary text-center">Sign in</button>
                </div>

            </form>
        </div>
    )
}

export default AddUser
