import React, {useState} from "react"
import PrizeWrapper from "../Styles/Prize";
import InputGroup from 'react-bootstrap/InputGroup';
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import PrizeMain from "./PrizeMain";
import NewPrize from "./NewPrize";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; 

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
            <Router>
            <div class="prize-input-container">
            <Switch>
                <Route path="/NewPrize.jsx">
                    <NewPrize/>
                </Route>
                <Route path="/PrizeMain.jsx">
                    <PrizeMain prizeId={prizeId}/>
                </Route>
                <Route path="/">
                <h2 class="prize-title">Sorteo</h2>
                <div class="prize-input-form">         
                    <InputGroup className="mb-3">
                        <FormControl type="text" placeholder="Ingrese el nombre del sorteo" onChange={(e)=>onChange(e.target.value)}/>
                        <InputGroup.Append>
                        <Link to="/PrizeMain.jsx"><Button variant="primary" onClick={onSave}>Aceptar</Button></Link>
                        </InputGroup.Append>
                    </InputGroup>
                    <div class="prize-createButton">
                        <Link to="/NewPrize.jsx"><Button variant="primary">Crear Sorteo</Button></Link>
                    </div>
                </div>
                </Route>
            </Switch>
            </div>
            </Router>
        </PrizeWrapper>
    );
}

export default Prize;