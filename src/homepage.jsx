import React, { useEffect, useState } from 'react';
import seeMore from './assets/See more.png'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
// import dotenv from 'dotenv';
// dotenv.config();

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiKey = 'bb06013ec4b19bc8bb3560faf4e39341';
    const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjA2MDEzZWM0YjE5YmM4YmIzNTYwZmFmNGUzOTM0MSIsInN1YiI6IjY1MDI4NjhiZTBjYTdmMDBlYzhkZDZkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ERpA3D05JqP0EJBq6lMjC7fmMaU59CIX7k8sPdcf5Cg'
      }
    };


    setTimeout(() => {
      fetch(apiUrl, options)
      .then((response) => response.json())
      .then((data) => {
        // Extract the top 10 movies from the response
        console.log(data);
        const top10Movies = data.results.slice(0, 10);
        setMovies(top10Movies);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching movie data:', error);
      });
    }, 1500);
  }, []);

  return (
    <div className="homepage">
      <div className="feature">
        <h1 style={{fontSize:'40px'}}>Featured Movie</h1>
        <img src={seeMore} className='featured-img' alt="" />
      </div>
      {loading && <div className="loader">
        <div className="loader-inner"></div>
    </div>}
      <div className="movie-grid">
          {movies.map((movie) => (
              <Link to={`/movies/${movie.id}`} key={movie.id}>
                <div className="movie-card" data-testid="movie-card">
                  <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} data-testid="movie-poster"/>
                  <h2 data-testid="movie-title">{movie.title}</h2>
                  <p data-testid="movie-release-date">Release Date: {movie.release_date}</p>
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
};


export default HomePage;
