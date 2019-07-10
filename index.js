// const express = require("express"); // express 파일 찾음. 1순위 같은 파일 위치, 2순위 node_modules
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
const app = express(); // app 상수에 express를 실행해서 담음.

const PORT = 4000;

/* 
function handleListening() {
  console.log(`Listening on: http://localhost:${PORT}`);
}
*/
const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);
/*
function handleHome(req, res) {
 
  1. request object, 2. response object (3. function)
누가 페이지를 요청했고, 어떤 종류의 데이터가 페이지로 전송되었는지 등에는 1번을 이용
3번은 특정 함수를 호출하는 데 이용.
서버가 웹사이트 서버처럼 작동하길 바란다면 res.send에 완전한 html, css 파일을 넣어야 함.

  console.log(req);
  res.send("Hello from home");
}
*/
const handleHome = (req, res) => res.send("Hello from home");
/*
function handleProfile(req, res) {
  res.send("You are on my profile");
}
*/
const handleProfile = (req, res) => res.send("You are on my profile");

// cookie parser, body parser는 cookie와 body를 다루는 것을 도와준다.
// cookie parser: session을 다루기 위해 cookie에 사용자 정보 저장
// body parser: form 데이터 가진 request object에 접근
app.use(cookieParser());
app.use(bodyParser.json()); // json
app.use(bodyParser.urlencoded({ extended: true })); // html
app.use(helmet()); // node.js 앱 보안에 도움
app.use(morgan("dev")); // logging (무슨 일이 어디서 일어났는지 기록, 인자로 로깅 옵션 설정 가능)

const middleware = (req, res, next) => {
  res.send("not happening");
};
app.get("/", middleware, handleHome);
app.get("/profile", handleProfile);
// listen하기 시작할 때 handleListening 함수를 실행하게 됨 (콜백 함수)
app.listen(PORT, handleListening);

/*
처음 단계: betweenHome이 get 요청 (request)을 받는다.
response인 console.log("Between")을 실행한다.
다음 next인 handleHome을 호출한다.

handleHome(req, res)에서 req는 위에 betweenHome에서의 next 호출이 된다.
response는 res.send("Hello from my home!")이 된다.
app.get("/", betweenHome, handleHome); 이전에
app.use(betweenHome())으로 둘 수 있다. 이렇게 하면 모든 요청에 middleware가 적용된다.
*/
