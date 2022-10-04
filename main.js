addEventListener("DOMContentLoaded", () =>{
    // Un avión que viaja 800 Km/hr. Dispara un proyectil auto impulsado, en el momento del disparo, el
    // avión hace un giro de 90 grados y acelera a 20 mtrs/seg2. El proyectil sigue su curso, acelerando a 10
    // mtrs./seg2. Diseñe un pseudocódigo que escriba cada segundo, la distancia que separa al avión del
    // proyectil, hasta que estén a 10,000 mtrs. o más
    let vAvion = 222.222, vProyectil = 222.222, aAvion = 20, aProyectil = 10
    let tiempo = 0
    let hipo = 0
while (hipo < 10000){
    tiempo+=1
    let disAvion = (vAvion*tiempo)+(aAvion*(tiempo**2))/2
    let disProyectil = (vProyectil*tiempo)+(aProyectil*(tiempo**2))/2
    hipo = Math.sqrt(disAvion**2+disProyectil**2)
    console.log(`Segundo ${tiempo}`);
    console.log(`Recorrido ${Math.round(hipo,2)}`);
    }
})