import styled from "styled-components";

const PrizeWrapper=styled.div`
    .prize-input-container{
        width:100%;
        padding-bottom:1.5em;
        padding-top:1em;
    }

    h2{
        color: #126e82;
        font-size:3em;
    };

    .prize-input-form{
        width:30%;
        margin:auto;
        text-align:left;
    }

    .prize-input-form h3{
        width:100%;
        font-size:1.25em;
        margin-top:0.5em;
        color: #126e82;
    }

    .prize-createButton{
        width:100%;
        text-align:center;
    }

    @media (max-width: 1024px){
        .prize-input-form{
            width:80%;
        }
    };
`;

export default PrizeWrapper;