import { GoGlobe } from 'react-icons/go';

export default function Navbar() {
    return(
        <nav className="navbar">
            <div className="navbar--title">
                <div className="navbar--title--icon"><GoGlobe /></div>
                <div className="navbar--title--text">my travel journal.</div>
            </div>
        </nav>
    )
    
}