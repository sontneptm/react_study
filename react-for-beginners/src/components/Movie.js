import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, cover_img, title, summary, genres }) {
  return (
    <div className={styles.movie}>
      <img src={cover_img} alt={title} />
      <div className={styles.movie__title}>
        <h2>
          <Link to={"./movie/" + id}>{title}</Link>
        </h2>
        <p className={styles.movie__year}>
          {summary.length > 235 ? summary.substring(0, 235) + "..." : summary}
        </p>
        <ul className={styles.movie__genres}>
          {genres.map((genre) => (
            <li key={genre}> {genre}</li>
          ))}
        </ul>
      </div>
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
