import React from "react";
import LoginWrapper from "../Styles/Login";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

const SignIn=()=>{
    return(
        <LoginWrapper>
            <div class="login-container">
                <h2>Iniciar Sesión</h2>
                <div class="login-form-container">
                    <Form>
                    <div class="login-form-input">
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Correo Electrónico</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                    </div>
                    <div class="login-form-input">
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        
                    </div>
                    <div class="login-form-submit">
                        <Button variant="primary" type="submit" size="lg">Ingresar</Button>
                    </div>
                    </Form>
                    <div class="login-link-container">
                        <a href="/" class="login-link">¿Has olvidado tu contraseña?</a>
                        <a href="/" class="login-link">¿No posees cuenta? Regístrate</a>
                    </div>
                </div>
            </div>
        </LoginWrapper>
    );
}

export default SignIn;