# webpack app
- 번들링을 위한 webpack의 예제를 다뤄보기.

## Todo

## Install
- yarn add react react-dom
- yarn add -D @types/react @types/react-dom
- yarn add -D webpack webpack-dev-server webpack-cli
- yarn add -D @babel/core babel-loader @babel/preset-react @babel/preset-env
- yarn add html-webpack-plugin
- yarn add -D typescript ts-loader source-map-loader

## Study
```
0. webpack 개발용 서버모듈을 사용하기 위해서 'webpack-dev-server'를 설치함.
1. webpack은 babel을 통해서 ES6문법을 모든 브라우저에 지원하도록 변경해주며, babel-loader를 통해서 webpack이 html,css등 js가 아닌 jsx파일이나 그 이외에 다른파일을 이해할 수 도록 도와줌(js이외 파일들을 로드)
2. webpack의 설정파일은 루트내에서 'webpack.config.js'라는 파일을 생성.
3. html-webpack-plugin은 웹팩이 html파일을 읽어서 로드할 수 있도록 도와줌.
4. 바벨적용을 위한 '.babelrc'파일을 루트폴더내에서 생성.
______________긴급수정
babel-loader → ts-loader 사용
즉, .ts파일을 컴파일해야하므로 babel은 제외시키도록 함.
______________
5. webpack이 typescript를 해석하기 위해 ts-loader와 source-map-loader를 사용함.
```

## Refs.
- [참고1](https://medium.com/@krpeppermint100/js-react%EC%99%80-webpack-6ba46f84b327)