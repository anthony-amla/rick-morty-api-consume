import './style.css'
import { React } from 'react';
import Navbar from '../../Components/Navbar';
let BackgroundImage = "https://cdn.discordapp.com/attachments/1083398746366291998/1083398767610445864/rickandmorty-main-wallpaper.jpg"



function PageNotFound() {
    return (

        <div className='Not-Found-Content-Home'>
            <Navbar/>
            <div className="Not-Found-Main-Wrapper">
                <img className='Not-Found-Main-Wrapper-Background' src={BackgroundImage} alt="Background" />
            </div>
            <div className='Not-Found-Content-Page'>
                <div className='Not-Found-Home-Main-Info'>
                    <div className='Not-Found-Home-Main-Info-Title'>Page Not Found</div>
                </div>
            </div>
        </div>
    );
}

export default PageNotFound;
