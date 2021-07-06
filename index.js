require('dotenv').config();

const app = require("./server/server");

//made agreeable for both my computer and heroku.
const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`app listening on ${port}`);
})
