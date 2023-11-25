//PRIMERA PARTE DEL CURSO MODULOS
// const saludo = require("./saludar.js")
// console.log(saludo.saludar('Juan'));
// console.log(saludo.despedir('Juan'));

//MODULOS BUILT IN
// console.log("Hola mundo")
// console.warn("Ocurrio un error")
// console.error(new Error("Ocurrio un error inesperado"))

//MODULO PROCESS
//console.log(process.argv)
// console.log(process.argv[2])
// console.log(process.argv[3])
// for(let i = 2; i < process.argv.length; i++){
//     console.log(process.argv[i])
// }

//MODULO OS

// const os = require("os");
// console.log(os.type())
// console.log(os.homedir())
// console.log(os.uptime())
// console.log(os.userInfo())

//MODULO TIMEOUT
// function mostrarTema(tema){
//     console.log(`Estoy aprendiendo ${tema}`)
// }
// function sumar(a,b){
//     console.log(a + b)
// }
// function molestarAlIan(molestia){
//     console.log(`Ian vamos al ${molestia}`)
// }
// setTimeout(sumar,2000, 5,7)

//SETINMEDIATE
// function mostrarTema(tema){
//     console.log(`Estoy aprendiendo ${tema}`)
// }
// console.log("Antes de setInmediate()")
// setImmediate(mostrarTema, 'NodeJS')
// console.log("Despues")

//SETINTERVAL
// function mostrarTema(tema){
//     console.log(`Estoy aprendiendo ${tema}`)
// }
// function sumar(a,b){
//     console.log(a+b)
// }
// setInterval(sumar,1000,1,2)

//MODULO FS
// const fs = require("fs")

// fs.readFile('index.html','utf-8',(err, contenido)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(contenido)
//     }
// });
// fs.rename('main.html','index.html',(err)=>{
//     if(err) console.log(err)
//     console.log("Nombre cambiado exitosamente")
// })
//APPEND SOLO AÑADE A UN ARCHIVO EXISTENTE
// fs.appendFile("index.html",'<p>HOLA</p>',(err)=>{
//     if(err) console.log(err)
//     console.log("Se ha agregado correctamnete")
// })
// //WRITEFILE crea o sustituye todo el contenido si este no existe
// fs.writeFile('index.html','Contenido Nuevo',(err)=>{
//     if(err) console.log(err)
//     console.log("Contenido reemplazado exitosamente")
// })

//EVENTOS 
// const EventEmitter = require('events');
// const emisorProductos = new EventEmitter();
// //Metodo ON contiene la funcion que se ejecuta al realizar el evento 
// emisorProductos.on('compra', (total, numProducts) => {
//     console.log(`Se realizo una compra por ${total}€`);
//     console.log(`Productos adquiridos ${numProducts}`);

// });
// //Metodo emit hace que se ejecute el metodo ON
// emisorProductos.emit('compra',500,5)

//PROMESAS
// const promesCumplida = false
// const miPromesa = new Promise((resolve,reject)=> {
//     setTimeout(()=>{
//         if(promesCumplida){
//             resolve('Promesa cumplida')
//         }else{
//             reject('Promesa rechazada')
//         }
//     },3000)
// })
// // miPromesa.then((valor) => {
// //     console.log(valor)
// // })
// const manejarPromesaCumplida = (valor) => {
//     console.log(valor)
// }
// const manejarPromesaRechazada = (razonRechazo) =>{
//     console.log(razonRechazo)
// }
// miPromesa.then(manejarPromesaCumplida,manejarPromesaRechazada)
//EJEMPLO PROMESA
// const estatusPedido = () => {
//     const estatus = Math.random() < 0.8
//     return estatus
// }
// // for(let i = 0; i < 10; i++){
// //     console.log(estatusPedido())
// // }
// const miPedidoPizza = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (estatusPedido()) {
//             resolve('Pedido exitoso pizza en camino')
//         } else {
//             reject('Ocurrio un error')
//         }
//     }, 1000)
// })

// // const manejarPedido = (mensajeConfirmacion) =>{
// //  console.log(mensajeConfirmacion)
// // }
// // const rechazarPedido = (mensajeError) =>{
// //  console.log(mensajeError)
// // }
// // miPedidoPizza.then(manejarPedido,rechazarPedido)

// miPedidoPizza
//     .then((mensajeConfirmacion) => {
//         console.log(mensajeConfirmacion)
//     })
//     .catch((mensajeError) => {
//         console.log(mensajeError)
//     })
//ASYNC AWAIT Y ENCADENAR PROMESAS
// function ordenarProducto(producto){
//     return new Promise((resolve,reject) => {
//         console.log(`Ordenando: ${producto} de freeCodeCamp`)
//         setTimeout(()=> {
//             if(producto === 'taza'){
//                 resolve('Ordenando una taza con el logo de freeCodeCamp...')
//             }
//             else{
//                 reject('Este producto no esta disponible actualmente')
//             }
//         },2000)
//     });
// }
// function procesarPedido(respuesta){
//     return new Promise((resolve,reject) => {
//         console.log('Procesando respuesta')
//         console.log(`La respuesta fue: "${respuesta}"`)
//         setTimeout(() =>{
//             resolve('Gracias por su compra')
//         },4000)
//     })
// }
// //ENCADENAMIENTO DE PROOMESAS
// // ordenarProducto('taza')
// //     .then(respuesta => {
// //         console.log('Respuesta recibida')
// //         console.log(respuesta)
// //         return procesarPedido(respuesta)
// //     })
// //     .then(respuestaProcesada => {
// //         console.log(respuestaProcesada)
// //     })
// //     .catch(err => {
// //         console.log(err)
// //     })
// //ASYNC AWAIT
// async function realizarPedido(producto){
//     try{
//         const respuesta = await ordenarProducto(producto)
//         console.log('Respuesta recibida')
//         const respuestaProcesada = await procesarPedido(respuesta)
//         console.log(respuestaProcesada)
//     }catch(err){
//         console.log(err)
//     }
// }
// realizarPedido('taza')