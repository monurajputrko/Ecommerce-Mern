const app = require(".");
const {connectinDB} = require("./config/db");

const dotenv = require("dotenv");
require("dotenv").config();

const PORT = process.env.PORT || 8000;

app.listen(PORT, async () => {
    await connectinDB();
    console.log("listening on PORT " + PORT);
})
