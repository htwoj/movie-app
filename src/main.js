import App from './App.js'
import router from './routes/index.js'

const root = document.querySelector('#root')
// 실제 요소 정보를 갖고 있는 app 컴포넌트 속성을 추가하여 화면에 출력
root.append(new App().el)
// 루트 요소를 등록한 후에 실행해야 하는 플러그인 라우터를 실행
router()