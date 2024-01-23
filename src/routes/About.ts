import { Component } from "../core/core";
import aboutStore from '../store/about'

export default class About extends Component {
    render(){
        const {photo, email, github, repository} = aboutStore.state

        this.el.classList.add('container', 'about')
        // store에서 정보 관리
        this.el.innerHTML = /*html*/ `
            <div 
            style="background-image: url(${photo})" 
            class ="photo"></div>
            <p>
                <a 
                    href="https://mail.google.com/mail?view=cm&fs=1&to=${email}" 
                    target="_blank">${email}
                </a>
            </p>
            <p><a href="${github}" target="_blank">github</a></p>
        `
    }
}