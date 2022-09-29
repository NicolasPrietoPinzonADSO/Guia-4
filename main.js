addEventListener("DOMContentLoaded", () =>{
    // 2. Hacer un algoritmo que al ingresar 2 números por la pantalla y se calcule la suma, resta, multiplicación
    // y división. El proceso debe terminar cuando se hallan realizado 10 procesos (Hacer uso de
    // contadores
    
    procesosTot = 0

    while (procesosTot<10){
        let num1 = Number(prompt('Ingrese el primer numero'))
        let num2 = Number(prompt('Ingrese el segundo  numero'))
        let suma = num1+num2
        let resta = num1-num2
        let multiplicacion = num1*num2
        let division = num1/num2

        alert(`El resultado de la suma de ${num1} + ${num2} es : ${suma}`);
        alert(`El resultado de la resta de ${num1} - ${num2} es : ${resta}`);
        alert(`El resultado de la multiplicacion de ${num1} * ${num2} es : ${multiplicacion}`);
        alert(`El resultado de la suma de ${num1} / ${num2} es : ${division   }`);

        procesosTot+=1
    }
    
})