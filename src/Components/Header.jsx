import { useState } from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header() {

    const [isChecked, setChecked] = useState(false);

    const handleCheckboxChange = (e) => {
        e.preventDefault();
        setChecked(prevState => !prevState);
    };

    return (
        <header className="header">

            <Link><img src="./img/header/logo.svg" alt="" /></Link>
            
            <ul className="nav">
                <li><Link>STORIES</Link></li>
                <li><Link>FEATURES</Link></li>
                <li><Link>PRICING</Link></li>
            </ul>

            <button>GET AN INVITE</button>

            <label className={`hamburger ${isChecked ? 'active' : ''}`} onClick={handleCheckboxChange}>
                <input type="checkbox" name="" checked={isChecked} onChange={() => {}} />
                <span className="line"></span>
                <span className="line"></span>
            </label>

            <div className={`mobileNav ${isChecked ? 'active' : ''}`}>
                <div className="mobileNavLinks">
                    <li><Link to="/">STORIES</Link></li>
                    <li><Link to="/">FEATURES</Link></li>
                    <li><Link to="/">PRICING</Link></li>
                </div>
                <a id="mobileInvite" href="/">GET AN INVITE</a>
            </div>

        </header>
    )
}