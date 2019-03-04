const express = require("express");
const graphqlHTTP = require("express-graphql");

const server = express();

// server.use('')

server.get("/", (req, res) => {
    res.send("Hey you!");
    return res;
});

server.listen(4000, () => {
    console.log("Running...");
});
