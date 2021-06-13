import React from "react";
import Logo from "../img/dice.png";
import FooterWrapper from "../Styles/Footer";

const Footer= ()=>{
    return(
        <FooterWrapper>
            <footer class="footer">
                <div class="footer__logo">
                    <img src={Logo} alt="logo loteria" width="80em" height="80em"/>
                </div>
                <div class="footer__contact">
                    <div class="footer__contact-title"><strong>Contacto:</strong></div>
                    <div class="footer__contact-text"><a href="mailto:ignacio.rene1994@gmail.com">ignacio.rene1994@gmail.com</a></div>
                </div>
                <div class="footer__social">
                    <div class="footer__social-text"><strong>Síguenos en nuestras redes sociales:</strong></div>
                    <div class="footer__social__icons">
                        
                    </div>
                </div>
                <div class="footer-copyright">
                    &copy; Lotería
                </div>
            </footer>
        </FooterWrapper>
    );
}

export default Footer;