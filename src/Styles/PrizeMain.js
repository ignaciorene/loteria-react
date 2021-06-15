import styled from "styled-components";

const PrizeMainWrapper=styled.div`
    .prizeMain{
        width:100%;
        margin-top:1em;
        padding-top:1em;
        border-top:1px solid #126e82;
    }

    .prizeMain h3{
        color:#126e82;
    }

    .prizeMain p{
        font-weight: bold;
    }

    .prizeMain-text{
        word-wrap: break-word;
        width: 50%;
        margin: auto;
    }

    @media (max-width: 1024px){
        .prizeMain-text{
            width:80%;
            margin:auto;
        }
    }
`;

export default PrizeMainWrapper;