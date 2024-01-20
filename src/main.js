import App from './App.js'
import router from './routes/index.js'

const root = document.querySelector('#root')
// 실제 요소 정보를 갖고 있는 app 컴포넌트 속성을 추가하여 화면에 출력
root.append(new App().el)
// 라우터를 실행
router()

;(async ()=>{
   const res = await fetch('/api/test')
   const json = await res.json()
   console.log('/api/test',json )
})()