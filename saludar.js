function saludar(nombre){
    return `Hello, ${nombre}`;
}
function despedir(nombre){
    return `Bye, ${nombre}`;
}
module.exports = {
    saludar: saludar,
    despedir: despedir
}
console.log(module.exports);