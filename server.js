const express = require("express");
const app = express();

const routes = require("./config/routes");
const port = process.env.PORT || 3000;

routes(app);

app.listen(port, () => {
    console.log("Listening to port http://localhost:${port}");
    console.log("4:49pm");
});
