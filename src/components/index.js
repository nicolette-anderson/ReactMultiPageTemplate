import React from "react";
import {Nav, NavLink, NavMenu} from "./NavbarElements";

const Navbar = () => {
    return(
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/about" activeStyle>About</NavLink>
                    <NavLink to="/contact" activeStyle>Contact Me</NavLink>
                    <NavLink to="/blogs" activeStyle>Blog</NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;