import styled from "styled-components";

const LoginWrapper=styled.div`
    .login-container{
        width: 35%;
        margin: auto;
        margin-top:4em;
        border: 1px solid rgba(81, 196, 211,0.75);
        box-shadow: 5px 5px 5px rgba(81, 196, 211,0.25);
        padding:1em;
    }

    .login-container h2{
        color:#126e82;
    }

    .login-form-container{
        text-align:left;
        margin-top:1em;
        width:80%;
        margin:auto;
    }

    .login-form-input{
        margin-top:1em;
    }

    .login-form-submit{
        text-align:center;
        margin-top:1em;
    }

    .login-link-container{
        margin-top:1em;
    }

    .login-link{
        display: block;
        width: 100%;
        font-size: 0.75em;
        margin-bottom: 1em;
        text-decoration: none;
        color: #126e82;
    }
    
    .login-link:hover{
        text-decoration: underline;
    }

    @media (max-width:1024px){
        .login-container{
            width: 90%;
        }
`;

export default LoginWrapper;