import React, { useState, useEffect } from "react"
import { Container, MovieList, Movie} from './style'


const Home = () => {

  const url = 'https://api.themoviedb.org/3/movie/popular?api_key=b42ed93ba1c3eaf092244ca3270f8fff&language=en-US&page=1'

  const [movies, setMovies] = useState([])

  useEffect(() => {


    fetch(url)
      .then(response => response.json())
      .then(data => setMovies(data.results))

       

  }, [])


  return (
  <Container>
    <h1>API de FILMEs</h1>
   
    <MovieList>

      {movies.map(movie =>{
        return(
           <Movie key={movie.id}>
           <img src={ `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt ={movie.title}></img>
            <span>{movie.title}</span>
         </Movie>
      )}
     
        )}


    </MovieList>
  </Container>  
  )
    }




export default Home