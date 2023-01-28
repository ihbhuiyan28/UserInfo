const mongoose = require("mongoose");
const config = require("./config");

const dbUrl = config.db.url;

mongoose.connect(dbUrl)
    .then(() => console.log("Database Connected..."))
    .catch(error => {
        console.log(error);
        process.exit(1);
    });
