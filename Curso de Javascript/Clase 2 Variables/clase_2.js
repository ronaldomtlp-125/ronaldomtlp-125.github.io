/*A esto se le conoce como declaración de una variable
    let nombre = (..) */ 

/*Luego de declarar la variable hay que darle dato(s) 
    nombre = "Ronaldo" */

/*Pero no puedes asignarle un nombre prederteminado como "var" "alert", etc. Tampoco numeros antes del nombre como "12edad" ni caracteres especiales "#edad" pero si se puede con caracteres como "$ ó _". Si se puede colocar números en el nombre de la variable pero solo en medio o al final del nombre "edad87" y recuerda que entre más especifico es el nombre mejor legivilidad presentara "lasUserPaswordEgresed" notaras que cada palabra comienza con mayusculas ya que es más facil leerlo y por ultimo ten cuidado al nombrar una variable en mayus o minuscula ya que de haber 2 variables parecidas no seran iguales "edad=16 ≠ Edad=16" */

/*Para declara valores que que no cambiaran en el transcurso del código (Que mantengan su mismo valor siempre) se utiliza la variable "const" (constante)*/
    //const idUser = "Renato"

/*La caracteristica principal de una variable es que puede cambiar por ello se llama "variable", en el transcurso del código */

/* var y let son parecidos pero tiene una diferencia importante. (Investiga) */

let userAge;
let birthYear;

/* "prompt" es para solcitar un valor de una varible al usuario. Es como el input de python */
userAge = prompt("Ingrese su edad:");
birthYear = 2022 - userAge;

/*backticks (`` ya que si utilizamos "" se transformara en un string simple y no imprimira el valor de userAge*/
/*A esta acción se le conoce como "Concatenación" por que estamos mezclando texto con valores*/
/*Para imprimir un valor se utiliza "$" y "{}"  */
document.write(`Tu tienes ${userAge} años y nacistes en el año ${birthYear}.`)




