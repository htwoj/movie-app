// 프로젝트에서 관리하는 페이지 정리
import { createRouter } from '../core/core.js'
import Home from './Home.js'
import Movie from './Movie.js'
import About from './About.js'
import NotFound from './NotFound.js'

// 페이지를 구분하는 다양한 옵션을 배열로 받음
export default createRouter([
    // 메인 페이지 출력
    {path : '#/', component: Home },
    {path : '#/movie', component: Movie},
    {path : '#/about', component: About},
    // 0개 이상 모두 일치하는 정규표현식 ( .{0,} )과 동일 (.*)
    // find()는 찾은 결과를 바로 반환하고 실행 종료하기에 
    // notfound는 위의 모든 페이지와 일치하지 않는 경우 출력되어야해서 가장 마지막에 작성
    // core.js의 41 line code 참고
    {path : '.*', component: NotFound}
]) 