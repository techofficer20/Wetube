// const express = require("express"); babel 필요 X
import express from "express"; // babel 필요
const app = express();
const PORT = 4000;

/*
function handleListening() {
    console.log(`Listening on: http://localhost:${PORT}`)
} babel 필요 X
*/
const handleListening = () => console.log(`Listening on: https//localhost:${PORT}`); // babel 필요
/*
function handleHome(req, res) {
    console.log(req);
    res.send("Hello from home");
}
*/
const handleHome = (req, res) => res.send("Hello from my ass");
/* 
function handleProfile(req, res){
    res.send("You are on my profile");
}
*/
const handleProfile = (req, res) => res.send("You are on my profile");

app.get("/", handleHome);
app.get("/profile", handleProfile);
app.listen(4000, handleListening);