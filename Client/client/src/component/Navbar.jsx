import React from 'react'
import { NavLink } from "react-router-dom"
import "./Navbar.scss"
import { CgNotes } from 'react-icons/cg';



const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <NavLink to="/" className="navbar-brand"><CgNotes />TodoApp</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/add-user" className="nav-link" >Add User</NavLink >
                            </li>
                            <li className="nav-item">
                                <NavLink to="/all-user" className="nav-link " >View User</NavLink >
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </div >
    )
}

export default Navbar
