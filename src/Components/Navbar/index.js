import './style.css'

export default function Navbar() {
    return(
        <div className="Navbar">
            <a href='/' className="Navbar-Option">Home</a>
            <a href='/characters' className="Navbar-Option">Characters</a>
            <a href='/episodes' className="Navbar-Option">Episodes</a>
        </div>
    )
}

