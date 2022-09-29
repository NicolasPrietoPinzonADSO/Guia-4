
addEventListener("DOMContentLoaded", () =>{
    // 3. Programa para solicitar el nombre, apellido, edad y la nota promedio de 5 estudiantes de un curso de
    // computación
    
    let obj = {}
    cantidadEstu = 0
    notaProm = 0
    while(cantidadEstu<5    ){
        nombre = prompt('Ingrese su nombre')
        edad = prompt('Ingrese su edad')
        nota = prompt('Ingrese su nota final')
        obj[`${nombre} de ${edad} años de edad`] = `Su nota es ${nota}`
        cantidadEstu+=1
        notaProm+=nota
    }
    let promFinal = notaProm/5
    obj[`La nota promedio del curso de ${cantidadEstu} es de`] = promFinal
    console.log(obj)
})