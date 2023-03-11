import './style.css'
import Navbar from '../../Components/Navbar';
import { useFetch } from '../../Hooks/useFetch';
import { React } from 'react';
import { useParams } from 'react-router';


function Episodes() {
    let RequestedChar = useParams()["*"]
    let PageId = RequestedChar === "" ? "1" : RequestedChar
    const { data, isFetching } = useFetch(`https://rickandmortyapi.com/api/episode/?page=${PageId}`)
    let DataResponse = null
    if (!isFetching && data) { DataResponse = data.results }
    console.log(DataResponse)
    return (
        <div className='Content-Episodes'>
            <Navbar />
            <div className='Content-Episodes-List'>
                {isFetching ? <div className='Content-Episodes-List-Status'>Carregando...</div> : DataResponse === null ? <div className='Content-Episodes-List-Status'>Sem nada!</div> : DataResponse?.map((Item) =>
                    <div  key={Item.id} className='Content-Episodes-List-Item'>
                        <div className='Content-Episodes-List-Item-Info'><span>{Item.id}° Episode</span><span>{Item.episode}</span></div>
                        <div className='Content-Episodes-List-Title'>{Item.name}</div>
                        <div className='Content-Episodes-List-Relase-Date'>{Item.air_date}</div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Episodes;
