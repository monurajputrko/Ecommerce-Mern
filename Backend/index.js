const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send({message : "Welcome to the app!"});
})

const authRouters = require('./routes/auth.route.js');

app.use("/auth", authRouters);

const userRouter = require('./routes/user.route.js');
app.use("/api/users", userRouter);
module.exports = app;