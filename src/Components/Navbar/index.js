import './style.css'

export default function Navbar() {
    return(
        <div className="Navbar">
            <a href='https://anthony-amla.github.io/rick-morty-api-consume/' className="Navbar-Option">Home</a>
            <a href='https://anthony-amla.github.io/rick-morty-api-consume/characters' className="Navbar-Option">Characters</a>
            <a href='https://anthony-amla.github.io/rick-morty-api-consume/episodes' className="Navbar-Option">Episodes</a>
        </div>
    )
}

