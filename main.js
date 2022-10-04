addEventListener("DOMContentLoaded", () =>{
    // 7. Una compañía de seguros tiene contratados a n vendedores. Cada uno hace tres ventas a la semana.
    // Su política de pagos es que un vendedor recibe un sueldo base, y un 10% extra por comisiones de
    // sus ventas. El gerente de su compañía desea saber cuanto dinero obtendrá en la semana cada
    // vendedor por concepto de comisiones por las tres ventas realizadas, y cuanto tomando en cuenta su
    // sueldo base y sus comisiones.
    let sueldoBase = 1000000
    let ventas = 0
    let comision = 0
    while (ventas<3){
        let venta = Number(prompt('Ingrese el valor de su venta'))
        ventas += 1
        comision+= venta
    }
    let comisiones = comision * 0.10
    let sueldoTotal = comisiones+sueldoBase
    console.log(`El total de comision del empleado es de ${comisiones}`);
    console.log(`El sueldo total del empleado es de ${sueldoTotal}`);
})