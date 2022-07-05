
const productos = []
let tabla
let textoTotalCompra
let textoTotalVenta
let textoTotalGanancia

class Producto {
    constructor (codigo, nombre, precioCompra, precioVenta, cantidad){
        this.codigo = codigo
        this.nombre = nombre.toUpperCase() 
        this.precioCompra = precioCompra
        this.precioVenta = precioVenta
        this.cantidad = cantidad
    }     
    calcularPrecioCompra() {
        return this.precioCompra * this.cantidad
    }
    
    calcularPrecioVenta(){
        return this.precioVenta * this.cantidad
    } 
}

function inicializarElementos() {
    tabla = document.getElementById("tablaProductos")
    textoTotalCompra = document.querySelector("#totalCompra span") 
    textoTotalVenta = document.querySelector("#totalVenta span")
    textoTotalGanancia = document.querySelector("#totalGanancia span")
}

function registrarProductos(){
    let numeroProductos = parseInt(prompt("¿Cuántos productos va a registrar?"))
    for (let index = 0; index < numeroProductos; index++){ 
        let codigo =prompt("Ingrese código del producto")
        if(codigo < 0 || codigo === ""){
            alert("Error al ingresar información. Vuelva a intentarlo")
            break
        }else{
            let nombre = prompt("Ingrese el nombre")
            if (nombre === " "){
                alert("Error al ingresar información. Vuelva a intentarlo")
                break
            }else{
                let precioCompra = parseFloat(prompt("Ingrese el precio de compra"))
                if(precioCompra < 0 || precioCompra === " "){
                    alert("Error al ingresar información. Vuelva a intentarlo")
                    break
                }else{
                    let precioVenta = parseFloat(prompt("Ingrese el precio venta"))
                    if(precioVenta < 0 || precioVenta === " "){
                        alert("Error al ingresar información. Vuelva a intentarlo")
                        break
                    }else{
                    let cantidad = parseFloat(prompt("Ingrese la cantidad"))      
                     if(cantidad < 0 || cantidad === " "){
                        alert("Error al ingresar información. Vuelva a intentarlo")
                        break
                    }else{  
                    let productotARegistrar = new Producto (codigo, nombre, precioCompra, precioVenta, cantidad) 
                    productos.push (productotARegistrar) 
                    }            
                }         
            }    
        }
    }
}
}


function agregarProductosTabla(){
    productos.forEach((producto)=>{
        let filaTabla =document.createElement("tr")
        filaTabla.innerHTML = `
        <td>${producto.codigo}</td>
        <td>${producto.nombre}</td>
        <td>${producto.precioCompra}</td>
        <td>${producto.precioVenta}</td>
        <td>${producto.cantidad}</td>`
        tabla.tBodies[0].append(filaTabla)    
    })
}

function calcularTotales(){
    let totalCompra = 0
    let totalVenta = 0
    totalCompra = productos.reduce((acumulador, elemento) => acumulador + elemento.calcularPrecioCompra(),0) 
    totalVenta = productos.reduce((acumulador, elemento) => acumulador + elemento.calcularPrecioVenta(), 0) 
    textoTotalCompra.innerText = totalCompra 
    textoTotalVenta.innerText = totalVenta
    textoTotalGanancia.innerText = totalVenta - totalCompra
}

function main (){ 
    inicializarElementos() 
    registrarProductos()
    agregarProductosTabla()
    calcularTotales()
}

main()


