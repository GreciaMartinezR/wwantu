import React, { useState, useContext } from "react";
import UserContext from "../context/userContext";
import { useHistory } from 'react-router-dom';
import {
  Container,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import axios from "axios";
import Swal from "sweetalert2";

const RegistroLogin = () => {

    const context = useContext(UserContext);
    const {users, setUsers} = context;

    const history = useHistory();

    // Registro
  const [registroForm, setRegistroForm] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
    userConfirmPassword: "",
  });

  const handleChangeLogin = (e) => {
    const { value, name } = e.target;
    setRegistroForm({
      ...registroForm,
      [name]: value,
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const user = {
      userName: registroForm.userName,
      userEmail: registroForm.userEmail,
      userPassword: registroForm.userPassword,
      userConfirmPassword: registroForm.userConfirmPassword,
    };
    axios
      .post("http://localhost:8000/api/registro", user)
      .then((res) => {
        if (res.data.error === true) {
          alert(res.data.mensaje);
        } else {
          
          setRegistroForm({
            userName: "",
            userEmail: "",
            userPassword: "",
            userConfirmPassword: "",
          });
          Swal.fire("Gracias por registrarte, inicia sesión");
        }
      })
      .catch((error) => console.log(error, "error"));
  };

  // Inicio de sesión

  const [inputs, setInputs] = useState({ userEmail: "", userPassword: "" });

  const actualizarFormulario = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    axios.post("/api/login/", inputs).then((resp) => {
      if (resp.data && !resp.data.error) {
        setUsers(resp.data.data)
        localStorage.setItem("user", JSON.stringify(resp.data.data));
        console.log("Por aqui el data data", resp.data.data)
        history.push(`/home`);
      } else {

        Swal.fire('Error', resp.data.mensaje, 'error');
      }
    });
  };



  return (
    <Container>
    <Row> 
      <Col xs={12} md={6}>
        <Form onSubmit={onSubmitHandler}>
          <h2>Registro de Usuario</h2>
          <Row xs="2">
            <FormGroup>
              <Label for="userName">Nombre de usuario</Label>
              <Input
                type="text"
                name="userName"
                id="userName"
                placeholder="Ingrese nombre de usuario"
                value={registroForm.userName}
                onChange={handleChangeLogin}
              />
            </FormGroup>

            <FormGroup>
              <Label for="userEmail">Correo Electrónico</Label>
              <Input
                type="email"
                name="userEmail"
                id="userEmail"
                placeholder="Ingrese correo electrónico"
                value={registroForm.userEmail}
                onChange={handleChangeLogin}
              />
            </FormGroup>
          </Row>

          <Row xs="2">
            <FormGroup>
              <Label for="userPassword">Contraseña</Label>
              <Input
                type="password"
                name="userPassword"
                id="userPassword"
                placeholder="Ingrese contraseña de 6 caracteres"
                value={registroForm.userPassword}
                onChange={handleChangeLogin}
              />
            </FormGroup>

            <FormGroup>
              <Label for="userConfirmPassword">Confirme su contraseña</Label>
              <Input
                type="password"
                name="userConfirmPassword"
                id="userConfirmPassword"
                placeholder="Confirme contraseña ingresada"
                value={registroForm.userConfirmPassword}
                onChange={handleChangeLogin}
              />
            </FormGroup>

          </Row>

          <Row xs={12}>
                <Button variant="dark" type="submit">
                  Registrarse
                </Button>  
            </Row>

        </Form>
      </Col>

      <Col xs={12} md={6}>
        <Form onSubmit={login}>
          <h2>Inicio de sesión</h2>
          <FormGroup>
            <Label for="userEmail">Correo Electrónico</Label>
            <Input
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="Ingrese correo electrónico"
              value={inputs.userEmail}
              onChange={actualizarFormulario}
            />
          </FormGroup>

          <FormGroup>
            <Label for="userPassword">Contraseña</Label>
            <Input
              type="password"
              name="userPassword"
              id="userPassword"
              placeholder="Ingrese contraseña de 6 caracteres"
              value={inputs.userPassword}
              onChange={actualizarFormulario}
            />
          </FormGroup>

          <Row xs={12}>
                <Button variant="dark" type="submit">
                  Iniciar sesión
                </Button>   
            </Row>

        </Form>
      </Col>
      </Row> 
    </Container>
  );
};
export default RegistroLogin;
