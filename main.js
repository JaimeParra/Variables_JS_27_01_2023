let nombre   = 'Jaime Alberto Parra Acevedo';
let edad     = 32;
let begginer = false;
let vehiculo = {marca:"chevrolet", referencia:"spark", modelo:2007};
let vehiculoTxt = JSON.stringify(vehiculo);

let texto = `Mi nombre es ${nombre} tengo ${edad} soy principiante jejeje ${begginer}
mi vehiculo es ${vehiculoTxt}`;

console.log(texto);