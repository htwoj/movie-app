import { Store } from "../core/core";

interface State {
    photo:string
    email:string
    github:string
    repository:string
}

export default new Store<State>({ // generic을 통해 state interface 받음
    photo: 'https://avatars.githubusercontent.com/u/63083358?v=4',
    email: 'test@gmail.com',
    github: 'https://github.com/htwoj',
    repository : 'https://github.com/htwoj/movie-app'
})