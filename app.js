// const express = require("express"); // express 파일 찾음. 1순위 같은 파일 위치, 2순위 node_modules
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middlewares";
import routes from "./routes";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
const app = express(); // app 상수에 express를 실행해서 담음.

app.use(helmet()); // node.js 앱 보안에 도움
app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json()); // json
app.use(bodyParser.urlencoded({ extended: true })); // html
app.use(morgan("dev")); // logging (무슨 일이 어디서 일어났는지 기록, 인자로 로깅 옵션 설정 가능)

app.use(localsMiddleware);

app.use(routes.home, globalRouter); // localhost:4000/ 를 기본
app.use(routes.users, userRouter); // localhost:4000/users를 기본 (videos를 보고 싶다면 loaclhost:videos/users/users)
app.use(routes.videos, videoRouter); // localhost:4000/videos를 기본 (videos를 보고 싶다면 localhost:4000/videos/videos)

export default app;
