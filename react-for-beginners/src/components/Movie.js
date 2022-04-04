import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, cover_img, title, summary, genres }) {
  return (
    <div>
      <img src={cover_img} alt={title} />
      <h2>
        <Link to={"./movie/" + id}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((genre) => (
          <li key={genre}> {genre}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  cover_img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
