import React from "react"
import PrizeWrapper from "../Styles/Prize";
import InputGroup from 'react-bootstrap/InputGroup';
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import PrizeMain from "./PrizeMain";

const Prize=()=>{

    const prize={
        id:"random",
        author:"Ignacio",
        prize:"auto 0km",
        expire:"1/12/2021"
    }

    return(
        <PrizeWrapper>
            <div class="prize-input-container">
            <h2 class="prize-title">Sorteo</h2>
            <div class="prize-input-form">         
                <InputGroup className="mb-3">
                    <FormControl type="text" placeholder="Ingrese el nombre del sorteo"/>
                    <InputGroup.Append>
                    <Button variant="primary">Aceptar</Button>
                    </InputGroup.Append>
                </InputGroup>
                <div class="prize-createButton">
                    <Button variant="primary">Crear Sorteo</Button>
                </div>
            </div>
            <PrizeMain prizeInfo={prize}/>
            </div>
        </PrizeWrapper>
    );
}

export default Prize;