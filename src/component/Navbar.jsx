import React, { useContext } from 'react'
import ThemeContext from '../context/Theme/ThemeContext'

const Navbar = () => {
    const{theme}=useContext(ThemeContext)
  return (
    
    <div className={theme?"navbar navbar-expand-md navbar-dark bg-dark  mb-4":"navbar navbar-expand-md navbar-dark bg-tertiery  shadow mb-4"} role="navigation">
    <a className="navbar-brand text-danger" href="#">ABP News</a>
    <button className="navbar-toggler text-dark" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse text-dark" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active text-dark">
                <a className={theme?"nav-link text-light":"nav-link text-dark"} href="#">Sport<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active text-dark">
                <a className={theme?"nav-link text-light":"nav-link text-dark"} href="http://fontenele.github.io/bootstrap-navbar-dropdowns/" target="_blank">politics</a>
            </li>
            <li className="nav-item text-dark">
                <a className={theme?"nav-link text-light":"nav-link text-dark"}href="#">entertainment</a>
            </li>
            <li className="nav-item dropdown ">
                <a className={theme?"nav-link text-light":"nav-link text-dark"} id="dropdown1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Technology</a>
                
            </li>
            
        </ul>
        <form className="form-inline mt-2 mt-md-0">
            <input className={theme?"form-control mr-sm-2 ":"form-control mr-sm-2 bg-dark"} type="text" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    </div>
  </div>
  )
}

export default Navbar