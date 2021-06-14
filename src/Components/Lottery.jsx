import React from "react";
import LotteryWrapper from "../Styles/Lottery";
import InputGroup from 'react-bootstrap/InputGroup';
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import LotteryMain from "./LotteryMain";

const Lottery=()=>{
    return(
        <LotteryWrapper>
            <div class="lottery-input-container">
            <h2 class="lottery-title">Lotería</h2>
            <div class="lottery-input-form">         
                <InputGroup className="mb-3">
                    <h3>Ingrese el nombre de la lotería</h3>
                    <FormControl />
                    <InputGroup.Append>
                    <Button variant="primary">Aceptar</Button>
                    </InputGroup.Append>
                </InputGroup>
                <div class="lottery-createButton">
                    <Button variant="primary">Crear Lotería</Button>
                </div>
            </div>
            </div>
            <LotteryMain/>
        </LotteryWrapper>
    );
};

export default Lottery;