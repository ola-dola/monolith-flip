require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

//made agreeable for both my computer and heroku.
const port = process.env.PORT || 4000;

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/api/greeting', (req, res) => {
    res.json(`Hello, ${req.query.name}! How are you?`);
})

app.use((req, res) => {
    res.json("App is alive");
})

app.listen(port, () => {
    console.log(`app listening on ${port}`);
})
