import { Component } from "../core/core.js";
import aboutStore from '../store/about.js'

export default class TheFooter extends Component {
    constructor() {
        super({
            // 컴포넌트가 footer 태그로 시작하도록 설정
            tagName : 'footer'
        })
    }
    render() {
        const {github, repository} = aboutStore.state
        this.el.innerHTML = /*html*/`
        <div>
            <a href="${repository}">github repository</a>
        </div>
        <div>
            <a href="${github}">
                ${new Date().getFullYear()}
                htwoj
            </a>    
        </div>
        `
    }
}