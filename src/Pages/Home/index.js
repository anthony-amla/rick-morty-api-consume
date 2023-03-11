import './style.css'
import Navbar from '../../Components/Navbar';
let BackgroundImage = "https://cdn.discordapp.com/attachments/1083398746366291998/1083398767610445864/rickandmorty-main-wallpaper.jpg"

function Home() {
    return (
        <div className='Content-Home'>
            <Navbar/>
            <div className="Main-Wrapper">
                <img className='Main-Wrapper-Background' src={BackgroundImage} alt="Background" />
            </div>
            <div className='Content-Page'>
                <div className='Home-Main-Info'>
                    <div className='Home-Main-Info-Title'>Rick and Morty</div>
                    <div className='Home-Main-Info-SubTitle'>Universe</div>
                </div>
                <div className='Home-Main-Sumary'>
                    <div className='Home-Main-Sumary-Text'>All about this amazing universe</div>
                </div>
            </div>
        </div>
    );
}

export default Home;
