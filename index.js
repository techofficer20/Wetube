const express = require("express"); // express 파일 찾음. 1순위 같은 파일 위치, 2순위 node_modules
const app = express(); // app 상수에 express를 실행해서 담음.

const PORT = 4000;

function handleListening() {
  console.log(`Listening on: http://localhost:${PORT}`);
}

function handleHome(req, res) {
  /* 
  1. request object, 2. response object (3. function)
누가 페이지를 요청했고, 어떤 종류의 데이터가 페이지로 전송되었는지 등에는 1번을 이용
3번은 특정 함수를 호출하는 데 이용.
서버가 웹사이트 서버처럼 작동하길 바란다면 res.send에 완전한 html, css 파일을 넣어야 함.
*/
  console.log(req);
  res.send("Hello from home");
}
function handleProfile(req, res) {
  res.send("You are on my profile");
}
app.get("/", handleHome);
app.get("/profile", handleProfile);

app.listen(4000, handleListening);
// listen하기 시작할 때 handleListening 함수를 실행하게 됨 (콜백 함수)
