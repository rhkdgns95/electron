# webpack app.
- 번들링을 위한 webpack의 예제를 다뤄보기.

## Todo.
- Webpack
- Electron 환경설정 part1

## Install.
- yarn add react react-dom
- yarn add -D @types/react @types/react-dom
- yarn add -D webpack webpack-dev-server webpack-cli
- yarn add -D @babel/core babel-loader @babel/preset-react @babel/preset-env
- yarn add html-webpack-plugin
- yarn add -D typescript ts-loader source-map-loader
- yarn add -D electron

## Webpack.
- React:  webpack.react.config.js
- Electron: webpack.electron.config.js

## How to.

## Commands.
```bash
- yarn dev  # 기본 리액트 실행.
- yarn dev:react  # (webpack.react.config.js)개발모드 실행.
- yarn dev:electron  # (webpack.electron.config.js)일렉트론 개발모드 실행.
- yarn build  # 운용모드로 실행.
- yarn build:fast # (속도↑)운용모드로 실행.
```


## Study.
```
0. webpack 개발용 서버모듈을 사용하기 위해서 'webpack-dev-server'를 설치함.
1. webpack은 babel을 통해서 ES6문법을 모든 브라우저에 지원하도록 변경해주며, babel-loader를 통해서 webpack이 html,css등 js가 아닌 jsx파일이나 그 이외에 다른파일을 이해할 수 도록 도와줌(js이외 파일들을 로드)
2. webpack의 설정파일은 루트내에서 'webpack.config.js'라는 파일을 생성.
3. html-webpack-plugin은 웹팩이 html파일을 읽어서 로드할 수 있도록 도와줌.
4. 바벨적용을 위한 '.babelrc'파일을 루트폴더내에서 생성.

___________________수정___________
babel-loader → ts-loader 사용
즉, .ts파일을 컴파일해야하므로 babel은 제외.
babel모듈 제거.
___________________________________

5. webpack이 typescript를 해석하기 위해 ts-loader와 source-map-loader를 사용함.
6. electron 에러(error while loading shared libraries: libX11-xcb.so.1: cannot open shared object file: No such file or directory
)는 chromium을 사용하는데 관련라이브러리가 없으므로 생기는 문제임. 라이브러리 설치를 하여 해결하도록 할것.
(sudo apt-get install -y gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget
)
```

## Refs.
- [webpack 셋팅](https://medium.com/@krpeppermint100/js-react%EC%99%80-webpack-6ba46f84b327)
- [electron 초기](https://www.sitepen.com/blog/getting-started-with-electron-typescript-react-and-webpack/)
- [electron 초기2](https://dev.to/elisealcala/start-a-new-electron-app-with-react-and-typescript-5f67)
- [electron 실행에러](https://whiumisc.tistory.com/93)
- [electron 실행에러2(해결)](https://github.com/puppeteer/puppeteer/issues/5661#issuecomment-614814537)