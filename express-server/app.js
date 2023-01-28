require("./config/db");
const cors = require("cors");
const express = require("express");
const app = express();
const usersRouter = require("./routes/users.route");

app.use(cors());
app.use(express.json());

app.use("/api/users", usersRouter);

app.get("/", (req, res) => {
    res.status(200).json({
        statusCode: 200,
        data: "Hello World!"
    });
});

app.use((req, res, next) => {
    res.status(404).json({
        statusCode: 404,
        data: "Route Error!"
    });
})

app.use((err, req, res, next) => {
    res.status(500).json({
        statusCode: 500,
        data: "Server Error!"
    });
});

module.exports = app;
