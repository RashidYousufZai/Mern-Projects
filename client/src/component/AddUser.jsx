import React from 'react'
import { useState } from 'react';
import "./AddUser.scss"

const AddUser = () => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    console.log(name)
    return (
        <div>
            <h1 className='text-center mt-5 mb-4'>Add Users</h1>
            <form className='user-form'>
                <div className="row mb-3 ">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputEmail3" required onChange={(e) => setName(e.target.value)} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">UserName</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputPassword3" required onChange={(e) => setUsername(e.target.value)} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputPassword3" required onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Phone</label>
                    <div className="col-sm-10">
                        <input type="tel" className="form-control" id="inputPassword3" required onChange={(e) => setPhone(e.target.value)} />
                    </div>
                </div>
                {/* <fieldset className="row mb-3">
                    <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
                    <div className="col-sm-10">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                            <label className="form-check-label" htmlFor="gridRadios1">
                                First radio
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                            <label className="form-check-label" htmlFor="gridRadios2">
                                Second radio
                            </label>
                        </div>
                        <div className="form-check disabled">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled />
                            <label className="form-check-label" htmlFor="gridRadios3">
                                Third disabled radio
                            </label>
                        </div>
                    </div>
                </fieldset>
                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label" htmlFor="gridCheck1">
                                Example checkbox
                            </label>
                        </div>
                    </div>
                </div> */}
                <div className='add-button'>
                    <button type="submit" className="btn btn-primary text-center">Sign in</button>
                </div>

            </form>
        </div>
    )
}

export default AddUser
