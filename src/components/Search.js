import { Component } from "../core/core.js";
import movieStore, {searchMovies} from "../store/movie.js";

export default class Search extends Component {
    render(){
        this.el.classList.add('search');
        this.el.innerHTML = /*html*/ `
            <input 
            value="${movieStore.state.searchText}" 
            placeholder = "Enter the movie title to search!"/>
            <button class ="btn btn-primary">
                Search!
            </button>
        `;

        const inputEl = this.el.querySelector('input');
        // input에 값을 입력할 때 어떤 내용을 갱신
        inputEl.addEventListener('input', ()=>{
            movieStore.state.searchText = inputEl.value
        });
        // input에서 enter 눌렀을 때 검색
        inputEl.addEventListener('keydown', event => {
            // searchText.trim() 경우, 빈 문자는 false가 반환되기에 이 경우, 검색하지 않도록 조건 추가
            if (event.key === 'Enter' && movieStore.state.searchText.trim()) {
                searchMovies(1)
            };
        });


        const btnEl = this.el.querySelector('.btn');
        // 버튼 클릭했을 때 검색
        btnEl.addEventListener('click', () => {
            if (movieStore.state.searchText.trim()) {
                searchMovies(1)
            }
        })
    }

}