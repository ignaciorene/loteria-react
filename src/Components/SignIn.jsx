import React from "react";
import LoginWrapper from "../Styles/Login";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; 

const SignIn=()=>{
    return(
        <LoginWrapper>
            <Router>
                <Switch>
                    <Route path="/SignUp">
                        <SignUp/>
                    </Route>
                    <Route path="/ForgotPassword">
                        <ForgotPassword/>
                    </Route>
                    <Route path="/">
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
                            <Link to="/ForgotPassword"><a href="/" class="login-link">¿Has olvidado tu contraseña?</a></Link>
                            <Link to="/SignUp"><a href="/" class="login-link">¿No posees cuenta? Regístrate</a></Link>
                        </div>
                    </div>
                </div>
                    </Route>
                </Switch>
            </Router>
        </LoginWrapper>
    );
}

export default SignIn;