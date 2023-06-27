const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Testing API on Vercel!");
});

const site = 'http://0.0.0.0:'
const port = 3000;
app.listen(port, () => {
    console.log(`Listening at ${site}${port}`);
});