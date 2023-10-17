const express = require("express");
const uuid = require("uuid");

const app = express();

app.use(express.json());

var MaSport = ["Bola", "chuteira"]

app.get("/", function (req, res) {
  res.json(MaSport);
});

console.log(MaSport.length)

var primeiro = MaSport [0]
var ultimo = MaSport[MaSport.length - 1]

MaSport.forEach(function (item, indice, array){
  console.log(item, indice)
})

var adicionar = MaSport.push("short")
//['bola', 'chuteira', 'short']

MaSport.push("camisa")

var pos = MaSport.indexOf("chuteira")