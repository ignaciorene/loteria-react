import React from "react"
import PrizeWrapper from "../Styles/Prize";
import InputGroup from 'react-bootstrap/InputGroup';
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import PrizeMain from "./PrizeMain";

const Prize=()=>{
    return(
        <PrizeWrapper>
            <div class="prize-input-container">
            <h2 class="prize-title">Sorteo</h2>
            <div class="prize-input-form">         
                <InputGroup className="mb-3">
                    <h3>Ingrese el nombre del sorteo</h3>
                    <FormControl />
                    <InputGroup.Append>
                    <Button variant="primary">Aceptar</Button>
                    </InputGroup.Append>
                </InputGroup>
                <div class="prize-createButton">
                    <Button variant="primary">Crear Sorteo</Button>
                </div>
            </div>
            <PrizeMain/>
            </div>
        </PrizeWrapper>
    );
}

export default Prize;