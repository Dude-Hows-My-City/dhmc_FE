import { StyledNav } from "../styles/Nav.styled";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";


const Nav = ({favorites, clearSelected}) => {

 useEffect(() => {
 }, [favorites])
  
  return (
    <StyledNav>
      <NavLink to={`/`} style={{ textDecoration: "none" }}>
        <h1 data-cy="header">Dude, How's My City</h1>
      </NavLink>

      {favorites.length > 0  &&
      <NavLink to={`/favorites/`} style={{ textDecoration: "none" }}>
        <button onClick={() => clearSelected()}>FAVORITES</button>
      </NavLink>
}
    </StyledNav>
  );
};

export default Nav;
