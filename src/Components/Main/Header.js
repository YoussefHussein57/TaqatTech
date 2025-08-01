import { NavLink } from "react-router-dom";
import vector from "../../Assets/Logo/Vector.svg";
import Button from "../Custom/Button/Button";
import "./header.css";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-custom px-md-5"> {/* added px-4 for space on sides */}
      <div className="container gx-0">

        <NavLink to="/">

        
        <img src={vector} alt="logoImage" className="HeaderLogo" />
        </NavLink>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse links" id="navbarSupportedContent">
          <ul className="navbar-nav d-flex justify-content-center list-unstyled mx-auto">
            {/* Centered menu items */}
            <li className="nav-item mx-2 fw-medium">
              <NavLink to="/about" className={({isActive})=>{
                return `nav-link nav-link-custom ${ isActive ? "active-link":""}`
              }}>
                About Us
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink to="/services" className={({isActive})=>{
                return `nav-link nav-link-custom ${ isActive ? "active-link":""}`
              }}>
                Services
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink to="/case" className={({isActive})=>{
                return `nav-link nav-link-custom ${ isActive ? "active-link":""}`
              }}>
                Case Study
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink to="/career" className={({isActive})=>{
                return `nav-link nav-link-custom ${ isActive ? "active-link":""}`
              }}>
                Career
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink to="/blog" className={({isActive})=>{
                return `nav-link nav-link-custom ${ isActive ? "active-link":""}`
              }}>
                Blog
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink to="/contactUs" className={({isActive})=>{
                return `nav-link nav-link-custom ${ isActive ? "active-link":""}`
              }}>
                Contact Us
              </NavLink>
            </li>
          </ul>

          {/* Right-aligned */}
          <form className="d-flex ms-auto gap-3" role="search"> {/* ms-auto pushes it to the end */}
            <button className="langBtn border-0 text-center fw-medium">
              عربي
            </button>
              <Button path="/Get-started">
                Get Started
               </Button>
           
          </form>
        </div>
      </div>
    </nav>
  );
}
