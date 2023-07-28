import axios from 'axios';
import { useState,useEffect } from 'react';
import './App.css'

const options = {
    method: 'GET',
    url: 'https://imdb_api4.p.rapidapi.com/get_movies_by_cast_name',
    headers: {
        'X-RapidAPI-Key': 'f42e38bef3mshb5ce3fe77ae532cp1093d1jsn080c0a1b8801',
        'X-RapidAPI-Host': 'imdb_api4.p.rapidapi.com'
    }
    };





const Movies = () => {

    const [movies,setMovies] = useState([])
    const [page, setPage] = useState(1);

    const getMovies = async () =>{

        try {
            const response = await axios.request(options);
            console.log(response.data);
            setMovies(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    const setPageContents = (pagenumber) =>{
        setPage(pagenumber)

    }

    useEffect(()=>{
        getMovies();
    },[])

    return (

        <div className='app'>

            <h1>Movies</h1>

            <div className='movies'>
            {movies.slice(page * 10 - 10 , page * 10 ).map((movie)=> (
                <div className = 'movie-card' key={movie.id}>
                    <p> {movie.title} </p>
                </div>
            ))}
            </div>

            <div>

                {
                    
                    [...Array(movies.length/10)].map((x,i)=> <span key={i}> <button onClick={()=>setPageContents(i+1)}> {i+1} </button> </span>)

                }

            </div>
    </div>
    )
}

export default Movies
