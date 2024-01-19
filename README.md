1. npm init -y
2. npm i -D parcel
3. package.json 수정
scripts ->   "scripts": {
    "dev": "parcel ./index.html", // 진입점 설정
    "build": "parcel build ./index.html"
  },

4. html 수정
favicon 추가
script 추가
link reset-css
link google fonts

6. 과정
main.js에서 app.js 사용으로 화면에 내용 출력
 -> app.js에서 routerview 요소 생성
  -> 요소가 생겨야 페이지를 구분해주는 index.js 동작
  (그래서 main.js에 root에 append 메소드 다음에 router() 실행)
  -> 라우터 함수 실행되면 페이지 주소에 맞게 어떤 컴포넌트를 실행 가능(index.js)
  -> home이라는 컴포넌트로 페이지를 출력 (core.js에 router 기능 참고)

  Home.js -> Hedaline.js -> search.js -> 


loading 애니메이션
영화 상세정보가질 상태 관리 추가

about 페이지

notfound 페이지

반응형 레이아웃 적용


# 예제 4 - 영화 검색 사이트

## 설명
- HTML/CSS/JS를 활용하여 영화 검색 사이트 구현
- OMDB API 사용
- [DEMO 페이지로 이동]()


## 주요 파일/폴더
대문자 파일 : 모듈

**index.html**  
**src**
- main.css
- main.js
- App.js
    **components**
    - Headline.js // 헤드라인 텍스트
    - MovieItem.js // 영화 정보(제목, 연도)
    - MovieList.js // 영화 리스트
    - MovieListMore.js // 검색 결과 더보기
    - Search.js // 검색 이벤트
    **core**
    - core.js // component, router, store
    **routes**
    - Home.js // 메인 페이지
    - index.js // 페이지를 구분하는 다양한 옵션을 배열로 받음
    **store**
    - movie.js // omdb api


## 기타
**[CSS 변수]**  
--color-black:#0E111B;
--color-white: #FFF;
--color-white-50: rgba(255,255,255,.5);
--color-white-30: rgba(255,255,255,.3);
--color-white-20: rgba(255,255,255,.2);
--color-white-30: rgba(255,255,255,.1);
--color-white-5: rgba(255,255,255,.05);
--color-primary: #FDC000;
--color-hover: #F86A05;
--color-area: #1C212E;


**[실시간 이미지 리사이징]**
- 요청된 이미지의 주소 정보에 맞게 서버에서 실시간으로 원본 이미지의 크기를 변경해서 응답하는 방법

**[skeleton UI]**
- 어떤 내용이 채워지기 직전까지 동작하는 애니메이션 구조