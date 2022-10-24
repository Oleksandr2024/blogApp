import { NavLink } from "react-router-dom"

const Navbar = () => {

    return (
        <div className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blogs">Blog</NavLink>
        </div>
    )
}

export default Navbar