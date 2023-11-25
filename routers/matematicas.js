const express = require('express')

const routerMatematicas = express.Router()
const {matematicas} = require('../datos/cursos.js').infoCursos
routerMatematicas.get('/',(req,res) => {
    res.send(matematicas)
})
routerMatematicas.get('/:lenguaje',(req,res) => {
    const lenguaje = req.params.lenguaje
    const resultado = matematicas.filter(curso => curso.lenguaje === lenguaje)
    if(resultado.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${lenguaje}`)
    }
    res.send(JSON.stringify(resultado))
})

module.exports = routerMatematicas