import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

export default function Header() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  function fakeLogOut() {
    localStorage.removeItem("loggedin");
  }
  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      <nav>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/host">
          Host
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/about">
          About
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/vans">
          Vans
        </NavLink>
        <Link to="login" className="login-link">
          <FaUserCircle className="login-icon" />
        </Link>
        <button onClick={fakeLogOut}>X</button>
      </nav>
    </header>
  );
}
