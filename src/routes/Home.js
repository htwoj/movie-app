/* ======= 메인 페이지 (페이지 구분 용도) ======= */
import { Component } from "../core/core.js";
import Headline from "../components/Headline.js";
import Search from "../components/Search.js";
import MovieList from "../components/MovieList.js";
import MovieListMore from "../components/MovieListMore.js";

export default class Home extends Component {
    render() {
        // Headline, Search 추가
        const headline = new Headline().el;
        const search = new Search().el;
        const movieList = new MovieList().el;
        const movieListMore = new MovieListMore().el;

        // HOME 컴포넌트는 container 클래스명의 div로 생성될 것임
        // headline 먼저 추가
        this.el.classList.add('container');
        this.el.append(
            headline,
            search,
            movieList,
            movieListMore
        )
    }
}