addEventListener("DOMContentLoaded", () =>{
    // 42 personas toman parte de un baile. Durante la fiesta una dama bailó con 7 caballeros, una segunda
    // dama con 8, una tercera con 9, y así sucesivamente hasta que la última bailó con todos los hombres.
    // Cuantas damas había en el baile
    
    let caballeros = 6
    let damas = 0
    let personas = 0

    while (personas<42){
        damas+=1
        caballeros+=1
        personas=damas+caballeros
    }
    console.log(`La cantidad de caballeros en la fiesta es de ${caballeros} `);
    console.log(`La cantidad de damas en la fiesta es de ${damas} `);

})