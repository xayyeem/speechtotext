import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import './Footer.css'
const Footer = () => {
    return (
        <div>

            <footer class="footer">
                <div class="footer__container container grid">
                    <ul class="footer__links">
                        <li>
                            <a href="https://github.com/xayyeem/" class="footer__link"><FaGithub size={28} />
                            </a>
                        </li>

                        <li>
                            <a href="https://x.com/khalidjafri11" class="footer__link"><FaSquareXTwitter size={28} />
                            </a>
                        </li>

                        <li>
                            <a href="https://www.linkedin.com/in/khalid-haider-jafri-78368220a/" class="footer__link"><FaLinkedin size={28} />
                            </a>
                        </li>
                    </ul>

                    <span class="footer__copy">
                        &#169; All Rights Reserved By
                        <a href="#"> Khalid</a>
                    </span>
                </div>
            </footer>
        </div>
    )
}

export default Footer