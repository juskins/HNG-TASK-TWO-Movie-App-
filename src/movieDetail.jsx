import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    // Define your API endpoint with the movie 'id'
    const apiKey = import.meta.env.REACT_APP_API_KEY;
    const bearerKey = import.meta.env.BEARER_KEY;
    
    const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjA2MDEzZWM0YjE5YmM4YmIzNTYwZmFmNGUzOTM0MSIsInN1YiI6IjY1MDI4NjhiZTBjYTdmMDBlYzhkZDZkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ERpA3D05JqP0EJBq6lMjC7fmMaU59CIX7k8sPdcf5Cg'
      }
    };

    // Fetch movie details using the API endpoint
    fetch(apiUrl,options)
      .then((response) => response.json())
      .then((data) => {
        // Update the 'movieDetails' state with the fetched data
        const releaseDate = new Date(data.release_date).toUTCString();
        setMovieDetails({...data,releaseDate});
      })
      .catch((error) => {
        console.error('Error fetching movie details:', error);
      });
  }, [id]); 

  if (!movieDetails) {
    return <div className="loader">
    <div className="loader-inner"></div>
</div>;
  }

  return (
    <div className="movie-details">
          <div className="header" style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w300${movieDetails.poster_path})`,
          backgroundSize: 'contain', 
          backgroundPosition:'center', 
          width: '100%', 
          height: '400px',
          }}></div>
          <h1 style={{fontSize:'40px',fontWeight:'bold'}} data-testid="movie-title">{movieDetails.title}</h1>
          <p style={{color:'blue'}} data-testid="movie-release-date">{movieDetails.releaseDate}</p>
          <p style={{color:'#BE123C'}} data-testid="movie-runtime">{movieDetails.runtime}</p>
          <p data-testid="movie-overview">{movieDetails.overview}</p>
     </div>
  );
};

export default MovieDetailsPage;
