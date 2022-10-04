addEventListener("DOMContentLoaded", () =>{
    // Diseñar un pseudocódigo que calcule el promedio ponderado para alumno del ITT. El cálculo se hace
    // de la siguiente forma:
    // Se multiplica cada calificación por los créditos de cada materia
    // El resultado anterior se suma con los resultados de todas las materias, por separado se suman los
    // créditos de cada materia y finalmente se divide la suma de todas las materias por sus respectivos
    // créditos, entre la suma de todos los créditos. (materias: Fundamentos, BD y ética)

    let condicion = 'si'
    let numeroEstudiante = 1
    do{
        creFunda = Number(prompt('Ingrese el valor de los creditos de Fundamentos'))
        caliFunda = Number(prompt('Ingrese su calificacion de Fundamentos'))
        creEtica = Number(prompt('Ingrese el valor de los creditos de Etica'))
        caliEtica = Number(prompt('Ingrese su calificacion de Etica'))
        creBD = Number(prompt('Ingrese el valor de los creditos de BD'))
        caliBD = Number(prompt('Ingrese calificacion de BD'))

        notaFunda = creFunda * caliFunda
        notaEtica = creEtica * caliEtica
        notaBD = creBD * caliBD
        totalCreditos = creFunda + creBD + creEtica

        prom = (notaFunda+notaEtica+notaBD)/totalCreditos

        console.log(`Estudainte numero ${numeroEstudiante++} su promedio es de ${prom}`);
    }
        while (confirm('Va a ingresar otro estudiante')){}
})