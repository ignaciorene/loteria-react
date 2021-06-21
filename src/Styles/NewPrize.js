import styled from "styled-components";

const NewPrizeWrapper=styled.div`
    .newPrize-container{
        margin-top:2em;
        width:50%;
        margin:auto;
        margin-top:2em;
    }

    h2{
        color: #126e82;
    }

    .newPrize-input{
        margin-top:1em;
    }

    .newPrize-table{
        margin-top:2em;
    }

    .newPrize-table h4{
        color: #126e82;
    }

    .newPrize-table td{
        width:5em;
    }

    .newPrize-submit{
        margin-top:1em;
    }

    @media (max-width: 1024px){
        .newPrize-container{
            width:90%;
        }
    }
`;

export default NewPrizeWrapper;