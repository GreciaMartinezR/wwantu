import React, { useState, useContext } from "react";
import UserContext from "../context/userContext";
import { useHistory } from "react-router-dom";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Button,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";

const HeaderHome = () => {
    
    //Header
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
  
    //Logout
  
    const context = useContext(UserContext);
  
    const history = useHistory();
  
    const Logout = (e) => {
      e.preventDefault();
      localStorage.removeItem("user");
      history.push("/");
    };
  
    return (
      <Container>
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">
              Movie <FontAwesomeIcon icon={faFilm} /> Finder
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <NavbarText> || Un universo de películas || </NavbarText>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <Button outline color="secondary" href="/favorites">
                    Favoritos
                  </Button>{" "}
                </NavItem>
                <NavItem>
                  <Button outline color="secondary" onClick={Logout}>
                    Cerrar sesión
                  </Button>{" "}
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
  
  
  
  
        
      </Container>
    );
  };
  export default HeaderHome;