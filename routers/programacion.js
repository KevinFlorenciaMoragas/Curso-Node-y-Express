const express = require('express')

const routerProgramacion = express.Router()
const {programacion} = require('../datos/cursos.js').infoCursos
routerProgramacion.use(express.json())
routerProgramacion.get('/', (req, res) => {
    res.send(programacion)
})

//PARAMETROS DE RUTA
routerProgramacion.get('/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const resultado = programacion.filter(curso => curso.lenguaje === lenguaje)
    if (resultado.length === 0) {
        return res.status(404).send(`No se encontraron cursos ${lenguaje}`)
    }
    res.send(JSON.stringify(resultado))
})

//CON DOS PARAMETROS DE RUTA
routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
    const lenguaje = req.params.lenguaje
    const nivel = req.params.nivel
    const resultado = programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel)

    if (resultado === 0) {
        console.log('No hay cursos')
        return res.status(404).send(`No se encontraron cursos de ${lenguaje} o ${nivel}`)
    }
    res.send(JSON.stringify(resultado))
})

//POST
routerProgramacion.post('/',(req,res) => {
    let cursoNuevo = req.body;
    programacion.push(cursoNuevo)
    res.send(JSON.stringify(programacion))
})
//PUT
routerProgramacion.put('/:id', (req,res) => {
    let cursoCambiado = req.body;
    const id = req.params.id
    console.log(id)
    const indice = programacion.findIndex(curso => curso.id == id)
    if(indice >= 0){
        console.log(indice)
        console.log(cursoCambiado)
        programacion[indice] = cursoCambiado
    }
    res.send(JSON.stringify(programacion))
})
routerProgramacion.patch('/:id',(req,res) => {
    const infoNueva = req.body
    const id = req.params.id
    const indice = programacion.findIndex(curso => curso.id == id)
    if(indice >= 0){
        const cursoAModificar = programacion[indice]
        Object.assign(cursoAModificar, infoNueva);
        
    }
    res.send(JSON.stringify(programacion))
})
routerProgramacion.delete('/:id', (req,res) => {
    const id = req.params.id
    const indice = programacion.findIndex(curso => curso.id == id)

    if(index >= 0){
        programacion.splice(indice, 1)
    }
    res.send(JSON.stringify(programacion))
})


module.exports = routerProgramacion