import { Component } from "../core/core.js";

export default class MovieItem extends Component {
    // MovieItem 의 클래스가 생성자 함수로 호출될 때 어떤 정보를 받아올 것이고,
    // 그 정보는 MovieItem이 출력할 영화 정보

    // 영화 정보를 props로 받아서 super함수 호출할때 전달
    // 영화 정보를 상속하는 컴포넌트 클래스로 넣어줌
    constructor(props) {
        super({
            props,
            tagName: 'a'
        })
    }
    render() {
        // 부모 컴포넌트로부터 전달받은 movie
        const {movie} = this.props

        this.el.setAttribute('href', `#/movie?id=${movie.imdbID}`)
        this.el.classList.add('movie')
        this.el.style.backgroundImage = `url(${movie.Poster})`
        this.el.innerHTML = /*html*/ `
            <div class="info">
                <div class="year">
                    ${movie.Year}
                </div>
                <div class="title">
                    ${movie.Title}
                </div>
            </div>
        `
    }
}