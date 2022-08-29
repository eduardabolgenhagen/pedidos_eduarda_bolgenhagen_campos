const express = require("express");
const router = require("./router");
const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', router);

app.listen(port , () => {
    console.log("Servidor rodando em https://localhost: " + port)
})