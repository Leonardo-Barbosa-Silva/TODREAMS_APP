import { FaSignInAlt, FaUserAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'


export default function Header() {
    
    return (
        <header className="header-container">
            <div className="header-logo">
                <Link to="/" className="header-logo-link">
                    <div className="header-logo-img">
                        <img src="./pictures/dream-catcher.png" alt="dreams catcher png" />
                    </div>
                        <h1>ToDreams</h1>
                </Link>
            </div>
            <nav className="header-navbar">
                <ul className="navbar-buttons">
                    <li>
                        <Link to="/login" className="navbar-link">
                            <FaSignInAlt /> <p>Sign In</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/register" className="navbar-link">
                            <FaUserAlt /> <p>Register</p>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}