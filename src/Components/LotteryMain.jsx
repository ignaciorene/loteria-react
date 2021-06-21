import React,{useState} from "react";
import LotteryMainWrapper from "../Styles/LotteryMain";
import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";

const LotteryMain=({lotteryId})=>{

    const [lotteryState]=useState({
        prize:"$10.000.000",
        ticket:"$10",
        expire:"1/12/2021",
        prizeList:{
        primerPuesto:"80%",
        segundoPuesto:"15%",
        tercerPuesto:"5%"
        }
    });

    return(
        <LotteryMainWrapper>
            <div class="lotteryMain">
                <h2>Lotería {lotteryId}</h2>
                <h3>Pozo Actual</h3>
                <p>{lotteryState.prize}</p>
                <h3>Precio ticket</h3>
                <p>{lotteryState.ticket}</p>
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
                            <td>{lotteryState.prizeList.primerPuesto}</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>{lotteryState.prizeList.segundoPuesto}</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>{lotteryState.prizeList.tercerPuesto}</td>
                        </tr>
                    </tbody>
                </Table>
                </div>
                <h3>Finaliza</h3>
                <p>{lotteryState.expire}</p>
                <Button variant="primary">Comprar ticket</Button>
            </div>
        </LotteryMainWrapper>
    );
};

export default LotteryMain;