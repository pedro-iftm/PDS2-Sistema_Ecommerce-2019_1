const express = require('express');
const PORT = 3000;
const app = express();
const db = require("./config/database");
const bodyParser = require("body-parser");
const cors = require('cors');

app.use(cors({
  origin: ['http://localhost:4200'],
  methods: ["GET","POST","PUT","DELETE"],
  allowedHeaders: ["Content-Type","Authorization"]
}));
app.use(bodyParser.json());

db.authenticate()
  .then(() => console.log("Database connected"))
  .catch(err => console.log("Erro: " + err))

app.set("json spaces", 4);

const index = require("./routes/index");
const clientes = require("./routes/clientes");
const produtos = require("./routes/produtos")
const vendedores = require("./routes/vendedores")

app.use("/", index);
app.use("/clientes", clientes);
app.use("/produtos", produtos);
app.use("/vendedores", vendedores);

app.listen(PORT, () => console.log("Escutando na porta: " + PORT));
