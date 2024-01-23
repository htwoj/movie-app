import { Component } from "../core/core";
import movieStore, {searchMovies} from "../store/movie";

export default class Search extends Component {
    render(){
        this.el.classList.add('search');
        // 사용자가 뒤로가기 버튼 클릭 시, 검색어를 유지하기 위해
        // input 요소 value 속성에 기존 검색어 할당 필요
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
        inputEl?.addEventListener('input', ()=>{
            movieStore.state.searchText = inputEl.value
        });
        // input에서 enter 눌렀을 때 검색
        inputEl?.addEventListener('keydown', event => {
            // searchText.trim() 경우, 빈 문자는 false가 반환되기에 이 경우, 검색하지 않도록 조건 추가
            if (event.key === 'Enter' && movieStore.state.searchText.trim()) {
                searchMovies(1)
            };
        });


        const btnEl = this.el.querySelector('.btn');
        // 버튼 클릭했을 때 검색
        btnEl?.addEventListener('click', () => {
            if (movieStore.state.searchText.trim()) {
                searchMovies(1)
            }
        })
    }

}