import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MovieItem from './MovieItem';

const MovieRow = ({title, url}) => {
    const [movies, setMovies] = useState([]);

useEffect(()=>{
    axios.get(url).then((response) => setMovies(response.data.results));
    console.log(movies)
},[url])
  return (
    <>
    <h1 className='font-nsans-bold md:text-xl p-4 capitalize'>{title}</h1>

    <div className='relative flex items-center'>
        <div key={`slider`} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
            {movies.map((movie)=> (
                <MovieItem key={movie.id} movie={movie}/>
            ))}
        </div>
    </div>
</>
  )
}

export default MovieRow