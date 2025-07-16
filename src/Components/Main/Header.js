import { NavLink } from "react-router-dom";
import vector from "../../Assets/Logo/Vector.svg";
import Button from "../Custom/Button";
import "./header.css";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-custom px-md-5"> {/* added px-4 for space on sides */}
      <div className="container gx-0">
        <img src={vector} alt="logoImage" />

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
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
          <form class="d-flex ms-auto" role="search"> {/* ms-auto pushes it to the end */}
            <button className="langBtn border-0 text-center fw-medium">
              عربي
            </button>
              <Button path="/">
                Get Started
               </Button>
           
          </form>
        </div>
      </div>
    </nav>
  );
}
