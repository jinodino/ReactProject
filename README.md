# Movie App 2020

React JS Fundamentals Course (2020 Update!)


# React
  - npm start 
  - 내가 만든것을 자바스크립트와 함께 만들고 그것들을 HTML로 밀어 넣는다

  - Index.js와 Index.html의 main div Id를 맞춰줘야한다 -> 그 id를 가진 div에 밀어넣기 때문
  - 우리가 보는 파일은 Index.js파일이다

  # 빠른 이유
    - application에서 로드 할 떄 빈 HTML을 로드하게되고
      그런 다음 react가 Html을 밀어넣게 한다. (component에 작성해 두었던 것 -> App.js)

  # component
  - React는 component와 함게 동작한다.
    @ index.js -> <App />
      - <App /> -> JSX : javascript와 HTML사이의 조합
  - *component는 HTML을 반환하는 함수*
  # 기억하기
    - *react application은 한 번에 하나의  component만 redering할 수 있다*
      - index.js -> <App />
      - 그렇기 때문에 component추가할 때는 App.js안에 component를 추가해야하는 것 같다.

  # react masic
    - react는 우리가 전달한 props를 가져가는 일을 한다    
    - props는 argument로 간다!