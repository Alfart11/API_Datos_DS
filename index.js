const express = require("express");
const app = express();
const rutas = require('./routes');

const port = 3000;
app.use(express.json());

app.listen(port, () =>{
  console.log("puerto activao " + port);
});

rutas(app);


