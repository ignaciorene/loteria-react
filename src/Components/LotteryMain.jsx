import React from "react";
import LotteryMainWrapper from "../Styles/LotteryMain";
import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";

const LotteryMain=()=>{
    return(
        <LotteryMainWrapper>
            <div class="lotteryMain">
                <h2>Lotería Pública</h2>
                <h3>Pozo Actual</h3>
                <p>$10.000.000</p>
                <h3>Precio ticket</h3>
                <p>$10</p>
                <h3>Premios</h3>
                <div class="lotteryMain-list">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Puesto</th>
                            <th>% Pozo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>80%</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>15%</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>5%</td>
                        </tr>
                    </tbody>
                </Table>
                </div>
                <h3>Finaliza</h3>
                <p>1/12/2021</p>
                <Button variant="primary">Comprar ticket</Button>
            </div>
        </LotteryMainWrapper>
    );
};

export default LotteryMain;