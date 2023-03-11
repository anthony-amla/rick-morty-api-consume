import './style.css'
import Navbar from '../../Components/Navbar';
import { useFetch } from '../../Hooks/useFetch';
import { React } from 'react';
import { useParams } from 'react-router';


function Characters() {
    let RequestPage = useParams()["*"]
    let PageId = RequestPage === "" ? "1" : RequestPage
    const { data, isFetching } = useFetch(`https://rickandmortyapi.com/api/character/?page=${PageId}`)
    let DataResponse = null
    if (!isFetching && data) { DataResponse = data.results }
    return (
        <div className='Content-Characters'>
            <Navbar />
            <div className='Content-Characters-List'>
                {isFetching ? <div className='Content-Characters-List-Status'>Carregando...</div> : DataResponse===null? <div className='Content-Characters-List-Status'>Sem nada!</div>: DataResponse?.map((Char) =>
                    <a href={"https://anthony-amla.github.io/rick-morty-api-consume/character/profile/"+Char.id} key={Char.id} data-charid={Char.id} className='Content-Characters-List-Item'>
                        <div className='Content-Characters-List-Item-Photo'>
                            <img className='Content-Characters-List-Item-Photo-Img' src={Char.image} alt="Background" />
                        </div>
                        <div className='Content-Characters-List-Item-Description'>
                            <div className='Content-Characters-List-Item-Description-Name'>{(Char.name).length > 13 ? (Char.name).split(" ", 1) : Char.name}</div>
                            <div className='Content-Characters-List-Item-Description-Status'><span className={Char.status === "unknown" ? 'Content-Characters-List-Item-Description-Status-Dot Dot-Unknown' : Char.status === "Alive" ? 'Content-Characters-List-Item-Description-Status-Dot Dot-Alive' : 'Content-Characters-List-Item-Description-Status-Dot Dot-Dead'}></span> {Char.status}</div>
                        </div>
                    </a>
                )}
            </div>
        </div>
    );
}

export default Characters;
