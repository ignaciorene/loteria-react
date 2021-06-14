import styled from "styled-components";

const FooterWrapper=styled.div`
.footer {
    text-align: center;
    margin-top: 5em;
    padding-top: 1em;
    background-color: #126e82;
    color: #d8e3e7;
  }
  
  .footer__logo-img {
    height: 4em;
    width: 4em;
    margin: auto;
    background-image: url("img/dice.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  
  .footer__contact {
    padding-top: 1em;
  }
  
  .footer__contact-text {
    padding-top: 0.5em;
  }
  
  .footer__contact a {
    text-decoration: none;
    color: #d8e3e7;
  }
  
  .footer__contact a:hover {
    text-decoration: underline;
  }
  
  .footer__social-text {
    padding-top: 1em;
  }
  
  .footer__social__icons {
    padding-bottom: 0.5em;
    border-bottom: 1.5px solid #d8e3e7;
    font-size:2em;
    color: #d8e3e7;
  }

  a{
    text-decoration:none;
    color: #d8e3e7;
  }

`;

export default FooterWrapper;