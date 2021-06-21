import React, {useState} from "react";
import LotteryWrapper from "../Styles/Lottery";
import InputGroup from 'react-bootstrap/InputGroup';
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import LotteryMain from "./LotteryMain";
import NewLottery from "./NewLottery";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; 

const Lottery=()=>{

    const [lotteryId, lotteryIdFunc]=useState("Pública");

    const [lotteryIdView,lotteryIdViewFunc]=useState("");

    const onChange=(e)=>{
        lotteryIdViewFunc(e);
    }

    const onSave=()=>{
        lotteryIdFunc(lotteryIdView);
    }
    
    return(
        <LotteryWrapper>
            <Router>
            <Switch>
                <Route path="/NewLottery">
                    <NewLottery/>
                </Route>
                <Route path="/">
                <div class="lottery-input-container">
                <h2 class="lottery-title">Lotería</h2>
                <div class="lottery-input-form">         
                    <InputGroup className="mb-3">
                        <FormControl type="text" placeholder="Ingrese nombre de la lotería" onChange={(e)=>onChange(e.target.value)}/>
                        <InputGroup.Append>
                        <Button variant="primary" onClick={onSave}>Aceptar</Button>
                        </InputGroup.Append>
                    </InputGroup>
                    <div class="lottery-createButton">
                        <Link to="/NewLottery"><Button variant="primary">Crear Lotería</Button></Link>
                    </div>
                </div>
                </div>
                <LotteryMain lotteryId={lotteryId}/>
                </Route>
            </Switch>
            </Router>
        </LotteryWrapper>
    );
};

export default Lottery;