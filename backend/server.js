const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const quotes = [
    "The best way to get started is to quit talking and begin doing.",
    "Don’t let yesterday take up too much of today.",
    "It’s not whether you get knocked down, it’s whether you get up.",
    "If you are working on something exciting, it will keep you motivated.",
    "Success is not in what you have, but who you are."
];

app.get("/", (req, res) => {
    res.send("Backend is running");
});

app.get("/quote", (req, res) => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    res.json({ quote: randomQuote});
});

app.listen(3000, () => {
    console.log("Running on port 3000");
})