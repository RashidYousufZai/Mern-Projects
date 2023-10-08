import { NavLink, useNavigate } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { useState, useEffect, useRef } from "react";

import "./Navbar.scss";

const Navbar = () => {
  const navigate = useNavigate();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef(null);
  const [keyword,setKeyword] = useState("");

  const submitform = (e) => {
    e.preventDefault();
    if(keyword.trim()){
      navigate(`/products/${keyword}`)
    }
  }

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleDocumentClick = (e) => {
    // Check if the click target is not the search input or button
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      setIsSearchOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleDocumentClick);
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
      <div className="container my-2">
        <NavLink className="navbar-brand" to="/">
          Time <span>Zone</span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products">Product</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mobile">
            <li className="nav-item">
              {isSearchOpen ? (
                <div ref={searchRef} className="search-box">
                  <form onSubmit={submitform}>
                    <input type="text" placeholder="Search..." onChange={(e)=> setKeyword(e.target.value)}/>
                    <input className="search-button" type="submit" value="search"/>
                  </form>
                  
                </div>
              ) : (
                <a href="#search" onClick={toggleSearch}>
                  <FiSearch />
                </a>
              )}
            </li>
            <li className="nav-item">
              <NavLink to="/profile">
                <CgProfile />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/cart">
                <BsFillCartCheckFill />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
