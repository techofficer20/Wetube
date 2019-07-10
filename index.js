// const express = require("express"); // express 파일 찾음. 1순위 같은 파일 위치, 2순위 node_modules
import express from "express";
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
const betweenHome = (req, res, next) => {
  console.log("Between");
  next();
};
/* middleware란 처리가 끝날 때 까지 연결되어 있는 것
request는 어떻게 시작? 웹사이트에 접속하려 할 때부터..
유저와 마지막 응답 사이에 존재하는 것을 middleware라 함
express의 모든 함수는 middleware가 될 수 있음.
express의 모든 route와 그런 것들은 request, response, next를 인자로 가지고 있는데
middleware는 이때 response에 해당됨.
res.send()를 마지막에 하지 않는다면 계속 로딩 화면이 뜰 것.
우리가 원하는 만큼 middleware를 사용할 수 있음.
모든 요청에 middleware 설정 방법: app.use() // get함수(route처리) 이전에 먼저 설정
*/
app.use(betweenHome);

app.get("/", handleHome);
app.get("/profile", handleProfile);

// listen하기 시작할 때 handleListening 함수를 실행하게 됨 (콜백 함수)
app.listen(PORT, handleListening);
