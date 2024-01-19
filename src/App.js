import { Component } from './core/core.js'
import TheHeader from './components/TheHeader.js'
import TheFooter from './components/TheFooter.js'

export default class App extends Component {
    render() {
        // 컴포넌트 출력되는 부분
        const theHeader = new TheHeader().el
        const routerView = document.createElement('router-view')
        const theFooter = new TheFooter().el

        this.el.append(
            // header는 모든 페이지에서 출력되어야하기에 라우트될 필요 없음
            theHeader,
            routerView,
            theFooter
            )
    }
}