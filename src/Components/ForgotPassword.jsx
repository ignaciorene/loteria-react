import React from "react"
import LoginWrapper from "../Styles/Login"
import { Form } from "react-bootstrap"
import { Button } from "react-bootstrap"

const ForgotPassword = () => {
    return (
        <LoginWrapper>
            <div class="login-container">
                <h2>Reestablecer contraseña</h2>
                <div class="login-form-container">
                    <Form>
                        <div class="login-form-input">
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Correo Electrónico</Form.Label>
                                <Form.Control type="email" placeholder="Ingrese email" />
                            </Form.Group>
                        </div>
                        <div class="login-form-submit">
                            <Button variant="primary" type="submit" size="lg">Enviar</Button>
                        </div>
                    </Form>
                </div>
            </div>
        </LoginWrapper>
    );
}

export default ForgotPassword;