import React from "react"
import NewPrizeWrapper from "../Styles/NewPrize"
import { Form } from "react-bootstrap"
import { Row } from "react-bootstrap"
import { Col } from "react-bootstrap"
import { Button } from "react-bootstrap"
import { InputGroup } from "react-bootstrap"
import { Table } from "react-bootstrap"

const NewPrize=()=>{
    return(
        <NewPrizeWrapper>
            <div class="newPrize-container">
                <h2>Nueva Lotería</h2>
                <Form>
                <div class="newPrize-input">
                    <Form.Group as={Row} controlId="formHorizontalName">
                        <Form.Label column sm={4}>
                        Nombre de la lotería
                        </Form.Label>
                        <Col sm={6}>
                        <Form.Control type="text" placeholder="Nombre de lotería" />
                        </Col>
                    </Form.Group>
                </div>

                <div class="newPrize-input">
                    <Form.Group as={Row} controlId="formHorizontalName">
                        <Form.Label column sm={4}>
                        Fecha de finalización
                        </Form.Label>
                        <Col sm={4}>
                        <InputGroup className="mb-2">
                            <Form.Control type="date" name='expire_date' />
                        </InputGroup>
                        </Col>
                    </Form.Group>
                </div>

                <div class="newPrize-table">
                    <h4>Ingrese Lista de premios</h4>
                    <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>Desde puesto</th>
                        <th>Hasta puesto</th>
                        <th>Premio</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>
                            <Form.Control type="text" placeholder="Puesto" />
                        </td>
                        <td>
                            <Form.Control type="text" placeholder="Premio" />
                        </td>
                        <td>
                            <Button variant="primary">Agregar</Button>
                        </td>
                        </tr>
                    </tbody>
                    </Table>
                </div>
                <div class="newPrize-submit">
                    <Button type="submit">Crear lotería</Button>
                </div>
                </Form>
            </div>
        </NewPrizeWrapper>
    );
}

export default NewPrize;