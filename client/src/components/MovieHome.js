import React, { useState, useContext } from "react";
import UserContext from "../context/userContext";
import { useHistory } from "react-router-dom";
import {
  Container,
  Col,
  Row,
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
import axios from "axios";
import Swal from "sweetalert2";
import HeaderHome from "./HeaderHome";
import MovieSearch from "./MovieSearch";
import MovieList from "./MovieList";

const MovieHome = () => {

  

  return (
    <Container>
      <div>
        <HeaderHome />
        <MovieSearch />
        <MovieList />
      </div>









    </Container>
  );
};
export default MovieHome;
