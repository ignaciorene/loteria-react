import React, {useState} from "react"
import PrizeWrapper from "../Styles/Prize";
import InputGroup from 'react-bootstrap/InputGroup';
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import PrizeMain from "./PrizeMain";

const Prize=()=>{

    const [prizeId,prizeIdFunc]=useState("");

    const [prizeIdView,prizeIdViewFunc]=useState("");

    const onChange=(e)=>{
        prizeIdViewFunc(e);
    };

    const onSave=()=>{
        prizeIdFunc(prizeIdView);
    };

    return(
        <PrizeWrapper>
            <div class="prize-input-container">
            <h2 class="prize-title">Sorteo</h2>
            <div class="prize-input-form">         
                <InputGroup className="mb-3">
                    <FormControl type="text" placeholder="Ingrese el nombre del sorteo" onChange={(e)=>onChange(e.target.value)}/>
                    <InputGroup.Append>
                    <Button variant="primary" onClick={onSave}>Aceptar</Button>
                    </InputGroup.Append>
                </InputGroup>
                <div class="prize-createButton">
                    <Button variant="primary">Crear Sorteo</Button>
                </div>
            </div>
            <PrizeMain prizeId={prizeId}/>
            </div>
        </PrizeWrapper>
    );
}

export default Prize;