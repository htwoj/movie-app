import {Component} from '../core/core'

interface State {
    [key:string] : unknown
    menus : {
        name: string
        href: string
    } []
}

export default class TheHeader extends Component {
    public state! : State // 초기화 데이터가 존재하지 않지만, 할당 단언으로 할당된 것처럼 정의
    constructor() {
        // 태그명 변경 (div -> header)
        // render()의 this.el은 header로 설정됨
        super({
            tagName : 'header',
            state: {
                menus: [
                    {
                        name: 'Search',
                        href: '#/'
                    },
                    {
                        name: 'Movie',
                        href: '#/movie?id=tt4520988'
                    },
                    {
                        name: 'About',
                        href: '#/about'
                    },
                ]
            }
        })
        // popstate : 페이지가 바뀔 때마다 동작하는 이벤트
        // 페이지 바뀔 때마다 render 함수 실행하면서 active 값을 추가/제거
        window.addEventListener('popstate', ()=>{
            this.render()
        })
    }

    render() {
        this.el.innerHTML = /*html*/`
        <a href="#/" class="logo">
            <span>OMDbAPI</span>.COM
        </a>
        <nav>
            <ul>
                ${this.state.menus.map(menu => {
                    // 쿼리 스트링의 내용을 비교하게 되면 정확하게 일치시킬 수 없음
                    // ? 기준으로 쿼리스트링 내용 제거한 값으로 현재 주소와 비교
                    const href = menu.href.split('?')[0]
                    const hash = location.hash.split('?')[0]
                    const isActive = href === hash

                    return /*html*/`
                        <li>
                            <a
                            class="${isActive ? 'active' : ''}"
                            href="${menu.href}">
                            ${menu.name}
                            </a>
                        </li>
                    `
                }).join('')}
            </ul>
        </nav>
        <a href="#/about" class="user">
            <img src="https://avatars.githubusercontent.com/u/63083358?v=4" alt="user">
        </a>
        `
    }
}