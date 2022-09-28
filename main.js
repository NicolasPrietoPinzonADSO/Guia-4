addEventListener("DOMContentLoaded", () =>{
    // 1. En una granja se requiere saber alguna información para determinar el precio de venta por cada kilo
    // de huevo. precio se determina a traves del promedio de calidad de las N gallinas que hay en la
    // granja. La calidad de cada gallina se obtiene según la formula:
    // calidad = (peso de la gallina * altura de la gallina)/Numero de huevos que pone;
    let numeroGallinas = 0
    do{
        let peso = Number(prompt('Ingrese el peso de la gallina en kilos'))
        let altura = Number(prompt('Ingrese la altura'))
        let numeroHue = Number(prompt('Ingrese el numero de huevos que pone la gallina'))
        let calidad = (peso*altura)/numeroHue
        alert(`La calidad de la gallina es de ${calidad}`)
        listaCalidad.push(calidad)
    }
    while(confirm('Desea ingresar a otra persona')){
        console.log(listaCalidad);
    }

})