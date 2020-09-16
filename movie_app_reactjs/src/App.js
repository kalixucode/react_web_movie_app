import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
    state = {
        isLoading: true,
        movies: []
    };
    getMovies = async () => {
        const { data: { data: { movies } } } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
        //movies.data.data.movies => {data: {data: {movies}}} //es6버전
        // this.setState({ movies: movies }); //movies:movies = state의 movies:data의 movies  =>  movies로 해도 js가 이해한다.
        // this.setState({movies}); //isLoading도 수정!
        this.setState({ movies, isLoading: false });
        console.log(this.state);
    }
    componentDidMount() { //이론적으로 componentDidMount에서 data를 fetch하는 것!
        // setTimeout(() => {d
        //     this.setState({ isLoading: false});
        // }, 6000);
        this.getMovies();
    }
    render() {
        const { isLoading, movies } = this.state;
        return (
            <section className="container">
                {
                    isLoading ? (
                        // "Loading"
                        <div className="loader">
                            <span className="loader_text">Loading...</span>
                        </div>)
                        :
                        // movies.map(movie => {
                        //     // console.log(movie);
                        //     return <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} />

                        (
                            <div className="movies">
                                {movies.map(movie => (
                                    <Movie
                                        key={movie.id}
                                        id={movie.id}
                                        year={movie.year}
                                        title={movie.title}
                                        summary={movie.summary}
                                        poster={movie.medium_cover_image}
                                        genres={movie.genres}
                                    />
                                ))}
                            </div>
                        )
                }</section>)
    }
}
//jsx에서는 class대신 className
export default App;


//빌드 순서(홈페이지 만들기)
//1. gh-page 설치 : npm i gh-pages
//
//at package.json
//2. url 넣기 : "hompage": "https://kalixucode.github.io/react_web_movie_app/"  => git 기준일때
//3. script에 빌드어 추가
    // 1. "deploy" : "gh-pages -d build" build => build파일명과 같게
    // 2. "predeploy" : "npm run build"  => build라는 폴더를 얻기위한 작업