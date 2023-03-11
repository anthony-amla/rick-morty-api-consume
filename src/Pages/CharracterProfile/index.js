import './style.css'
import Navbar from '../../Components/Navbar';
import { useFetch } from '../../Hooks/useFetch';
import { React } from 'react';
import { useNavigate, useParams } from 'react-router';
import { FaOptinMonster } from 'react-icons/fa'


function CharacterProfile() {
    let Redirect = useNavigate()
    let RequestedChar = useParams()["*"]
    let PageId = RequestedChar === "" ? Redirect("/characters") : RequestedChar
    const { data: DataChar, isFetching: DataCharisFetching } = useFetch(`https://rickandmortyapi.com/api/character/${PageId}`)
    let DataResponse = null
    if (!DataCharisFetching && DataChar) { 
        DataResponse = DataChar 
    }
    return (
        <div className='Content-Character-Profile'>
            <a href='/' className='Content-Character-Profile-Return'><FaOptinMonster /></a>
            <Navbar />
            <div className='Content-Character-Profile-Item'>
                {DataCharisFetching ? <div className='Content-Characters-List-Status'>Carregando...</div> : DataResponse === null ? <div className='Content-Characters-List-Status'>Sem nada!</div> :
                    <div className='Content-Character-Profile-Item-Resulter'>
                        <div className='Content-Character-Profile-Item-Basic-Info'>
                            <div className='Content-Character-Profile-Item-Basic-Info-Photo'>
                                <img className='Content-Characters-Profile-Item-Basic-Info-Photo-Img' src={DataResponse.image} alt="Background" />
                            </div>
                            <div className='Content-Character-Profile-Item-Basic-Info-Descriptions'>
                                <div className='Content-Character-Profile-Item-Basic-Info-Descriptions-Name'>{DataResponse.name}</div>
                                <div className='Content-Character-Profile-Item-Basic-Info-Descriptions-Default-Parameters'><span className='Content-Character-Profile-Item-Basic-Info-Descriptions-Default-Parameters-Primary'>Status:</span><span className='Content-Character-Profile-Item-Basic-Info-Descriptions-Status-Dot-Progress'><span className={'Content-Character-Profile-Item-Basic-Info-Descriptions-Status-Dot '+(DataResponse.status==="unknown"?'Dot-Unknown':DataResponse.status==="Alive"?"Dot-Alive":"Dot-Dead")}></span> {DataResponse.status}</span></div>
                                <div className='Content-Character-Profile-Item-Basic-Info-Descriptions-Default-Parameters'><span className='Content-Character-Profile-Item-Basic-Info-Descriptions-Default-Parameters-Primary'>Gender:</span><span>{DataResponse.gender}</span></div>
                                <div className='Content-Character-Profile-Item-Basic-Info-Descriptions-Default-Parameters'><span className='Content-Character-Profile-Item-Basic-Info-Descriptions-Default-Parameters-Primary'>Species:</span><span>{DataResponse.species}</span></div>
                                <div className='Content-Character-Profile-Item-Basic-Info-Descriptions-Default-Parameters'><span className='Content-Character-Profile-Item-Basic-Info-Descriptions-Default-Parameters-Primary'>Origin:</span><div>{DataResponse.origin.name}</div></div>
                                <div className='Content-Character-Profile-Item-Basic-Info-Descriptions-Default-Parameters'><span className='Content-Character-Profile-Item-Basic-Info-Descriptions-Default-Parameters-Primary'>Location:</span><div>{DataResponse.location.name}</div></div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default CharacterProfile;
