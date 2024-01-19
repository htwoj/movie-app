// movies와 페이지 상태 활용
import { Component } from "../core/core.js";
import movieStore from "../store/movie.js";
import MovieItem from "./MovieItem.js";

export default class MovieList extends Component {

    constructor() {
        super()
        // movies라는 상태가 서버에서 영화 정보를 가져와 갱신될 때마다 콜백함수 실행
        movieStore.subscribe('movies', () => {
            this.render()
        })
        // loading 상태가 변할 때마다 render 실행
        movieStore.subscribe('loading', () => {
            this.render()
        })
        movieStore.subscribe('message', () => {
            this.render()
        })
    }

    render() {
        this.el.classList.add('movie-list')
        this.el.innerHTML = /*html*/ `
            ${movieStore.state.message
            ? `<div class="message">${movieStore.state.message}</div>`
            :  `<div class="movies"></div>`}
            <div class="the-loader hide"></div>
            `

        const moviesEl = this.el.querySelector('.movies')
        // 옵셔널 체이닝
        moviesEl?.append(
            // 앞에 붙은 배열데이터를 기준으로 콜백 함수 반복
            // 콜백 함수 결과로 새로운 배열 반환
            // 반환되는 배열을 append하면 안되고, 요소여야함
            // 전개연산자로 배열 대괄호 제거
            ...movieStore.state.movies.map(movie => {
                return new MovieItem({
                    movie: movie
                }).el
            })
        )

        const loaderEl = this.el.querySelector('.the-loader')
        movieStore.state.loading 
        ? loaderEl.classList.remove('hide')
        : loaderEl.classList.add('hide')
    }
}