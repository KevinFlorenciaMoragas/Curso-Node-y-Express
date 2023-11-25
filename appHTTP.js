const http = require('http');

// const servidor = http.createServer((req,res) =>{
//     res.end('Hola, mundo');
// });
// servidor.listen(3000, () => {
//     console.log('El servidor esta escuchando...')
// })
// const miURL = new URL('https://www.ejemplo.org/cursos/programacion?ordenar')

const cursos = require('./cursos')

const servidor = http.createServer((req,res) => {
    const {method} = req;
    switch(method){
        case 'GET':
            return manejarSolicitudGET(req,res)
        case 'POST':
            return manejarSolicitudPOST(req,res)
        default:
            res.statusCode = 501
            console.log('El metodo no puede ser manejado por el servidor')
    }
})
const PUERTO = 3000
servidor.listen(PUERTO, () => {
    console.log('El servidor esta escuchando')
})
function manejarSolicitudGET(req,res){
    let path = req.url;
    if(path === '/'){
        res.writeHead(200,{'Content-Type':'application/json'})
        return res.end('Bienvenidos a mi primer servidor y api creado en node.js')
    }else if(path === '/cursos'){
        res.statusCode = 200;
        return  res.end(JSON.stringify(cursos.infoCursos))
    }else if(path === '/cursos/programacion'){
        res.statusCode = 200;
        return res.end(JSON.stringify(cursos.infoCursos.programacion))
    }else{
        res.statusCode = 404;
        return res.end('El recurson no existe')
    }
}
function manejarSolicitudPOST(req,res){
    const path = req.url;
    if(path === '/cursos/programacion'){
        console.log('El servidor ha recibido POST')
        return res.end('El servidor recibio la solicitud post para programacion cursos')
    }
}
