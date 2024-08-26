import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello!!!</h1>");
})

app.get("/contact", (req, res) => {
    res.send("<ul><li>phone: 3125328592</li><li>address: 2801 S King dr, Chicago</li></ul>");
})

app.get("/about", (req, res) => {
    res.send("<h2>I am a web developer, Learning Full stack web development in PERN Stack</h2>");
})

app.listen(port, () => {
    console.log(`express is running on ${port}`);
})