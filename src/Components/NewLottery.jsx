import React from "react"
import NewLotteryWrapper from "../Styles/NewLottery"
import { Form } from "react-bootstrap"
import { Row } from "react-bootstrap"
import { Col } from "react-bootstrap"
import { Button } from "react-bootstrap"
import { InputGroup } from "react-bootstrap"
import { FormControl } from "react-bootstrap"
import { Table } from "react-bootstrap"

const NewLottery=()=>{
    return(
        <NewLotteryWrapper>
            <div class="newLottery-container">
                <h2>Nueva Lotería</h2>
                <Form>
                <div class="newLottery-input">
                    <Form.Group as={Row} controlId="formHorizontalName">
                        <Form.Label column sm={4}>
                        Nombre de la lotería
                        </Form.Label>
                        <Col sm={6}>
                        <Form.Control type="text" placeholder="Nombre de lotería" />
                        </Col>
                    </Form.Group>
                </div>
                <div class="newLottery-input">
                    <Form.Group as={Row} controlId="formHorizontalName">
                        <Form.Label column sm={4}>
                        Precio del Ticket
                        </Form.Label>
                        <Col sm={3}>
                        <InputGroup className="mb-2">
                        <InputGroup.Prepend>
                            <InputGroup.Text>USD</InputGroup.Text>
                        </InputGroup.Prepend>
                            <FormControl id="inlineFormInputGroup" placeholder="Precio" />
                        </InputGroup>
                        </Col>
                    </Form.Group>
                </div>
                <div class="newLottery-input">
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

                <div class="newLottery-table">
                    <h4>Ingrese Lista de premios</h4>
                    <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>Desde puesto</th>
                        <th>Hasta puesto</th>
                        <th>% Pozo</th>
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
                            <InputGroup className="mb-2">
                                <FormControl id="inlineFormInputGroup" placeholder="Pozo" />
                                <InputGroup.Prepend>
                                    <InputGroup.Text>%</InputGroup.Text>
                                </InputGroup.Prepend>
                            </InputGroup>
                        </td>
                        <td>
                            <Button variant="primary">Agregar</Button>
                        </td>
                        </tr>
                    </tbody>
                    </Table>
                </div>
                <div class="newLottery-submit">
                    <Button type="submit">Crear lotería</Button>
                </div>
                </Form>
            </div>
        </NewLotteryWrapper>
    );
}

export default NewLottery;