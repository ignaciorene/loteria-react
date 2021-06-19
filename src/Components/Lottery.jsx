import React, {useState, useEffect} from "react";
import LotteryWrapper from "../Styles/Lottery";
import InputGroup from 'react-bootstrap/InputGroup';
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import LotteryMain from "./LotteryMain";

const Lottery=()=>{

    var lottery={
        id:"Pública",
        prize:"$10.000.000",
        ticket:"$10",
        expire:"1/12/2021",
        prizeList:{
            primerPuesto:"80%",
            segundoPuesto:"15%",
            tercerPuesto:"5%"
        }
    };

    var inputLottery=lottery.id;

    const [stateLottery, setStateLottery]=useState(lottery);

    useEffect(()=>{
        console.log(stateLottery);
    },[stateLottery]);

    const changeLottery=()=>{
        setStateLottery(()=>{
            lottery.id=inputLottery;
            return (lottery);
        });
    };

    return(
        <LotteryWrapper>
            <div class="lottery-input-container">
            <h2 class="lottery-title">Lotería</h2>
            <div class="lottery-input-form">         
                <InputGroup className="mb-3">
                    <FormControl type="text" placeholder="Ingrese nombre de la lotería" onChange={(e)=>inputLottery=e.target.value}/>
                    <InputGroup.Append>
                    <Button variant="primary" onClick={changeLottery}>Aceptar</Button>
                    </InputGroup.Append>
                </InputGroup>
                <div class="lottery-createButton">
                    <Button variant="primary" onClick={()=>console.log(stateLottery)}>Crear Lotería</Button>
                </div>
            </div>
            </div>
            <LotteryMain lotteryInfo={stateLottery}/>
        </LotteryWrapper>
    );
};

export default Lottery;