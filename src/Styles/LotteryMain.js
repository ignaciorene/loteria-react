import styled from "styled-components";

const LotteryMainWrapper=styled.div`
    .lotteryMain{
        width:100%;
        margin-top:1em;
        padding-top:1em;
        border-top:1px solid #126e82;
    }

    .lotteryMain h3{
        color:#126e82;
    }

    .lotteryMain p{
        font-weight: bold;
    }

    .lotteryMain-list{
        width:30%;
        margin:auto;
    }

    @media (max-width: 1024px){
        .lotteryMain-list{
            width:80%;
            margin:auto;
        }
    }
`;

export default LotteryMainWrapper;