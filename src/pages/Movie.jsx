import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from '../components/NavBar';

function Movie() {
  const [movie, setMovie] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/movies/${id}`)
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error("Error fetching movie:", error));
  }, [id]);

  if (!movie) {
    return <h1>Loading...</h1>;
  }

  const { title, time, genres } = movie;

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{title}</h1>
        <p>Time: {time}</p>
        <div>
          Genres:{" "}
          {genres.map((genre, index) => (
            <span key={index}>{genre}</span>
          ))}
        </div>
      </main>
    </>
  );
};

export default Movie;