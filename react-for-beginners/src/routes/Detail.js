import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const id = useParams();
  const [loading, setLoading] = useState(true);
  const [movieInfo, setMovieInfo] = useState([]);

  const getMovieInfo = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/movie_details.json?movie_id=" + id.id
    );
    const json = await response.json();

    console.log(json);
    setMovieInfo(json);
    setLoading(false);
  };

  useEffect(() => {
    getMovieInfo();
  }, []);

  console.log(movieInfo);

  return (
    <div>
      {loading ? (
        <h1>wait...</h1>
      ) : (
        <div>
          <img
            src={movieInfo.data.movie.medium_cover_image}
            alt={movieInfo.data.movie.title}
          />
          <h1>{movieInfo.data.movie.title}</h1>
          <p> Rating : {movieInfo.data.movie.rating}</p>
          <h5>{movieInfo.data.movie.description_full}</h5>{" "}
        </div>
      )}
    </div>
  );
}

export default Detail;
