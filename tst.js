const express = require("express")
const app = express()

app.use(express.json())

const material = {
    produto: "lapis",
    estoque: 5,
}

app.get("/", function (req, res) {
 res.json(material)
})
 
app.patch("/:test", function (request, response) {
    const recebe = request.params.test

 if (recebe <= 0) {
    response.json("digite um valor maior que zero")
  } else {
    material.estoque = material.estoque - recebe;
    response.json(material)
  }
});

app.listen(5000, () => {
console.log('Servidor iniciado na porta 5000')
})