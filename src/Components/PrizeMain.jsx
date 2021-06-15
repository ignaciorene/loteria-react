import React from "react"
import PrizeMainWrapper from "../Styles/PrizeMain";
import { Button } from "react-bootstrap";

const PrizeMain=()=>{
    return(
        <PrizeMainWrapper>
            <div class="prizeMain">
                <h2>Sorteo #</h2>
                <h3>Creado por</h3>
                <p>Ánonimo</p>
                <h3>Premio</h3>
                <p class="prizeMain-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vero sit sint cum et ipsam fugiat perferendis adipisci modi officiis. Vel, autem. Dignissimos tempora accusamus cumque aperiam blanditiis, laudantium voluptatibus.</p>
                <h3>Finaliza</h3>
                <p>1/12/2021</p>
                <Button variant="primary">Registrarse</Button>
            </div>
        </PrizeMainWrapper>
    );
}

export default PrizeMain;