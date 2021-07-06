require('dotenv').config();

const app = require("./server/server")

app.listen(port, () => {
    console.log(`app listening on ${port}`);
})
