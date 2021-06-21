import React, {useState} from "react"
import PrizeMainWrapper from "../Styles/PrizeMain";
import { Button } from "react-bootstrap";

const PrizeMain=({prizeId})=>{

    const [prizeState]=useState({
        author:"Ignacio",
        prize:"auto 0km",
        expire:"1/12/2021",
    });

    return(
        <PrizeMainWrapper>
            <div class="prizeMain">
                <h2>Sorteo {prizeId}</h2>
                <h3>Creado por</h3>
                <p>{prizeState.author}</p>
                <h3>Premio</h3>
                <p class="prizeMain-text">{prizeState.prize}</p>
                <h3>Finaliza</h3>
                <p>{prizeState.expire}</p>
                <Button variant="primary">Registrarse</Button>
            </div>
        </PrizeMainWrapper>
    );
}

export default PrizeMain;