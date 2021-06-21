import styled from "styled-components";

const NewLotteryWrapper=styled.div`
    .newLottery-container{
        margin-top:2em;
        width:50%;
        margin:auto;
        margin-top:2em;
    }

    h2{
        color: #126e82;
    }

    .newLottery-input{
        margin-top:1em;
    }

    .newLottery-table{
        margin-top:2em;
    }

    .newLottery-table h4{
        color: #126e82;
    }

    .newLottery-table td{
        width:5em;
    }

    .newLottery-submit{
        margin-top:1em;
    }

    @media (max-width: 1024px){
        .newLottery-container{
            width:90%;
        }
    }
`;

export default NewLotteryWrapper;