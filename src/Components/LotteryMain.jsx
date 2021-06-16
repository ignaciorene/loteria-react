import React from "react";
import LotteryMainWrapper from "../Styles/LotteryMain";
import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";

const LotteryMain=(props)=>{

    const {lotteryInfo}=props;
    const {id="Pública"}=lotteryInfo;
    const {prize="$10.000.000"}=lotteryInfo;
    const {ticket="$10"}=lotteryInfo;
    const {expire="1/12/2021"}=lotteryInfo;
    const {prizeList={
        primerPuesto:"80%",
        segundoPuesto:"15%",
        tercerPuesto:"5%"
        }
    }=lotteryInfo;
    
    return(
        <LotteryMainWrapper>
            <div class="lotteryMain">
                <h2>Lotería {id}</h2>
                <h3>Pozo Actual</h3>
                <p>{prize}</p>
                <h3>Precio ticket</h3>
                <p>{ticket}</p>
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
                            <td>{prizeList.primerPuesto}</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>{prizeList.segundoPuesto}</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>{prizeList.tercerPuesto}</td>
                        </tr>
                    </tbody>
                </Table>
                </div>
                <h3>Finaliza</h3>
                <p>{expire}</p>
                <Button variant="primary">Comprar ticket</Button>
            </div>
        </LotteryMainWrapper>
    );
};

export default LotteryMain;