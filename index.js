const express = require("express"); // express 파일 찾음. 1순위 같은 파일 위치, 2순위 node_modules
const app = express(); // app 상수에 express를 실행해서 담음.

const PORT = 4000;

function handleListening() {
  console.log(`Listening on: http://localhost:${PORT}`);
}
app.listen(4000, handleListening);
// listen하기 시작할 때 handleListening 함수를 실행하게 됨 (콜백 함수)
