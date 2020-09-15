import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
//movies component는 state를 필요로 하지 않는다 => 굳이 class component 사용할 필요 없다.

function Movie({ year, title, summary, poster, genres }) {
    // return <h4>{title}</h4>;
    return <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie_data">
            <h3 className=" movie__title">{title}</h3>
            <h5 className=" movie__year">{year}</h5>
            <ul className="movie__genres">
                {genres.map((genre, index) =>
                    <li key={index} className="genres__genre">
                        {genre}
                    </li>
                )}
            </ul>
            <p className="movie_summary">{summary}</p>

        </div>
    </div>
}
//tag 안에 style={{}} : js css사용 가능
//ex) <h3 class=" movie__title" style={{backgroundColor: "red"}}>{title}</h3>
//index를 넘겨야 한다. Why? => key!
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;

