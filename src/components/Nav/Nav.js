import { StyledNav } from "../styles/Nav.styled";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const Nav = ({favorites}) => {
  return (
    <StyledNav>
      <NavLink to={`/`} style={{ textDecoration: "none" }}>
        <h1 data-cy="nav">Dude, How's My City</h1>
      </NavLink>

      {favorites.length > 0 &&
      <NavLink to={`/favorites/`} style={{ textDecoration: "none" }}>
        <button>FAVORITES</button>
      </NavLink>
}
    </StyledNav>
  );
};

export default Nav;
