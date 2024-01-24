import { Link, NavLink } from "react-router-dom"

export default function Footer() {

    return (
        <footer className="footer">

            <div className="footerLeft">
                <Link><img src="./img/Footer/logo.svg" alt="" /></Link>

                <div className="footerNav">
                    <li>
                        <Link>HOME</Link>
                    </li>
                    <li>
                        <Link>STORIES</Link>
                    </li>
                    <li>
                        <Link>FEATUES</Link>
                    </li>
                    <li>
                        <Link>PRICING</Link>
                    </li>
                </div>

                <div className="socials">

                    <Link><i class="fa-brands fa-facebook"></i></Link>
                    <Link><i class="fa-brands fa-youtube"></i></Link>
                    <Link><i class="fa-brands fa-twitter"></i></Link>
                    <Link><i class="fa-brands fa-pinterest"></i></Link>
                    <Link><i class="fa-brands fa-instagram"></i></Link>


                </div>
            </div>

            <div className="footerMid">
                <li>
                    <Link>HOME</Link>
                </li>
                <li>
                    <Link>STORIES</Link>
                </li>
                <li>
                    <Link>FEATUES</Link>
                </li>
                <li>
                    <Link>PRICING</Link>
                </li>
            </div>

            <div className="footerRight">
                <div className="footerRightTop">
                    <Link>GET AN INVITE </Link> 
                    <i className="fa-solid fa-arrow-right-long"></i>
                </div>

                <p>Copyright 2019. All Rights Reserved</p>
            </div>


        </footer>
    )
}