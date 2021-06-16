import React from "react"
import PrizeMainWrapper from "../Styles/PrizeMain";
import { Button } from "react-bootstrap";

const PrizeMain=(props)=>{

    const {prizeInfo}=props;

    return(
        <PrizeMainWrapper>
            <div class="prizeMain">
                <h2>Sorteo {prizeInfo.id}</h2>
                <h3>Creado por</h3>
                <p>{prizeInfo.author}</p>
                <h3>Premio</h3>
                <p class="prizeMain-text">{prizeInfo.prize}</p>
                <h3>Finaliza</h3>
                <p>{prizeInfo.expire}</p>
                <Button variant="primary">Registrarse</Button>
            </div>
        </PrizeMainWrapper>
    );
}

export default PrizeMain;