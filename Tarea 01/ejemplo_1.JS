let figure = prompt("Escribe el nombre de la figura que deseas calcular el área").toLocaleLowerCase()

let lado;
let base;
let altura;
let dia_may;
let dia_men;
let base_may;
let base_men;
let radio;
let perimetro;
let apotema;

switch(figure){
    case "cuadrado":
        lado= prompt("Cuánto mide su lado")
        
        console.log(`El área del cuadrado es ${Math.pow(lado, 2)}`)
        document.write(`El área del cuadrado es ${Math.pow(lado, 2)}`)
        break

    case "rectangulo":
        base = prompt ("Cuánto mide la base")
        altura = prompt("Cuánto mide su altura")

        console.log(`El área del rectangulo es ${base*altura}`)
        document.write(`El área del rectangulo es ${base*altura}`)
        break 
    
    case "triangulo":
        base = prompt ("Cuánto mide la base")
        altura = prompt("Cuánto mide su altura")

        console.log(`El área del rectangulo es ${(base*altura)/2}`)
        document.write(`El área del rectangulo es ${(base*altura)/2}`)
        break
    
    case "rombo":
        dia_may = prompt("Cuánto mide su diagonal mayor")
        dia_men = prompt("Cuánto mide su diagonal menor")

        console.log(`El área del rombo es ${dia_may*dia_men}`)
        document.write(`El área del rombo es ${dia_may*dia_men}`)
        break

    case "romboide":
        base = prompt ("Cuánto mide la base")
        altura = prompt("Cuánto mide su altura")

        console.log(`El área del romboide es ${base*altura}`)
        document.write(`El área del romboide es ${base*altura}`)
        break 
    
    case "trapecio":
        altura = prompt ("Cuánto mide su altura")
        base_may = prompt ("Cuánto mide su base mayor")
        base_men = prompt ("Cuánto mide su base menor")
        base_total = base_may*base_men

        console.log(`El área del romboide es ${(altura*base_total)/2}`)
        document.write (`El área del trapecio es ${(altura*base_total)/2}`)
        break

    case "circulo":
        radio = prompt("Cuánto tiene de radio")

        console.log(`El área del circulo es ${Math.PI * Math.pow(radio, 2) }`)

        document.write(`El área del circulo es ${Math.PI * Math.pow(radio, 2) }`)
        break

    case "pentagono":
        perimetro = prompt("Cuanto mide el perimetro de su pentagono")
        apotema = prompt("Cuánto mide su apotema")

        console.log(`El área del pentagono es ${(perimetro*apotema)/2}`)
        document.write(`El área del pentagono es ${(perimetro*apotema)/2}`)
        break
    
    default: 
    console.log ("La palabra que escribiste no es correcta")
    document.write ("La palabra que escribiste no es correcta")
    
}