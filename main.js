

addEventListener("DOMContentLoaded", () =>{
    // 5. El profesor de una materia desea conocer la cantidad de sus alumnos que no tienen derecho al examen
    // de nivelación. Diseñe un pseudocódigo que lea las calificaciones obtenidas en las 5 unidades por cada
    // uno de los 40 alumnos y escriba la cantidad de ellos que no tienen derecho al examen de nivelación
    
    let exaNivelTrue=0
    let exaNivelFalse=0
    let alumnosTotal=0
    i=0
    while (alumnosTotal<3){
        let nota1 = Number(prompt('Ingrese la nota 1'))
        let nota2 = Number(prompt('Ingrese la nota 2'))
        let nota3 = Number(prompt('Ingrese la nota 3'))
        let nota4 = Number(prompt('Ingrese la nota 4'))
        let nota5 = Number(prompt('Ingrese la nota 5'))
        let promEstu = (nota1+nota2+nota3+nota4+nota5)/5
        i++;

        if (promEstu<3){
            exaNivelFalse+=1
        }
        else{
            exaNivelTrue+=1
        }

        alumnosTotal+=1
    }
    console.log(`El total de estudiantes que no tienen derecho a presentar el examen de nivelacion son un total de ${exaNivelFalse}`);
    console.log(`El total de estudiantes que tienen derecho a presentar el examen de nivelacion son un total de ${exaNivelTrue}`);

})