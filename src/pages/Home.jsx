import { useEffect, useState } from "react";
import NavBar from '../components/NavBar';
import MovieCard from '../components/MovieCard';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error("Error fetching movies:", error));
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        <section>
          {movies.map(movie => (
            <MovieCard key={movie.id} id={movie.id} title={movie.title} />
          ))}
        </section>
      </main>
    </>
  );
};

export default Home;