const express = require('express');
const app = express();
let promise = app.get("/");
promise.then((req) => res);
app.listen(3000, () => console.log("SERVIDOR ESCUCHANDO POR EL PUERTO 3000"));
