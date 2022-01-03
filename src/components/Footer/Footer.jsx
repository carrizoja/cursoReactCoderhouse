import React, { Component } from "react";
import { GitHub, LinkedIn, Facebook, Instagram } from "@material-ui/icons";
import "./Footer.scss";

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="social">
                    <a
                        className="social-github"
                        href="https://github.com/carrizoja/"
                        target="blank"
                    >
                        <GitHub
                            color="secondary"
                            fontSize="large"
                            className="social-icons"
                        />
                    </a>
                    <a
                        className="social-linkedin"
                        href="https://www.linkedin.com/in/jose-carrizo-dev/"
                        target="blank"
                    >
                        <LinkedIn
                            color="secondary"
                            fontSize="large"
                            className="social-icons"
                        />
                    </a>
                    <a
                        className="social-facebook"
                        href="https://www.facebook.com/ijacsolucionesinformaticas"
                        target="blank"
                    >
                        <Facebook
                            color="secondary"
                            fontSize="large"
                            className="social-icons"
                        />
                    </a>
                    <a
                        className="social-instagram"
                        href="https://www.instagram.com/ijacsi/"
                        target="blank"
                    >
                        <Instagram
                            color="secondary"
                            fontSize="large"
                            className="social-icons"
                        />
                    </a>
                </div>

                <div className="copyright">
                    © 2021 Copyright
                    <a href="https://eduardo-gonzalez-portafolio.now.sh/" target="blank">
                        {" "}
                        iJac IT Solutions
                    </a>
                </div>
            </footer>
        );
    }
}

export default Footer;