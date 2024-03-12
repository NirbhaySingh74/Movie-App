import { useEffect, useState } from "react";

const Body = () => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/550?api_key=272e1cdb51329838080cf8b12ab79a75`
    );
    const data = response.json();
    console.log(response);
    setMovieData(data);
  };

  console.log(movieData);

  return (
    <div>
      <h1>Body page</h1>
      {/* Render movie data here */}
      {/* <div className="flex flex-wrap">
        {movieData.map((movie, index) => (
          <div key={index} className="flex">
            <img src={movie.Poster} alt="" />
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Body;
