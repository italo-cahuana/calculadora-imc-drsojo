// Formula para calcular el INDICE DE MASA CORPORAL:
// IMC = Peso (kg) / Estatura (M2)

// let peso = prompt("Escribe tu peso en (KG)");

// let altura = prompt("Escribe tu altura en (Metros)");

document.getElementById('calcular').addEventListener('click', () => main());

function main () {
let peso = Number(document.getElementById('peso').value);
let altura = Number(document.getElementById('altura').value);

if (isNaN(peso) || isNaN(altura) || peso === "" || altura === "") {
    alert("introduce valores validos: numeros");
} else {
    // Verificamos si el usuario introduce la altura en cm lo convertimos a metros
    if (altura > 3) { 
        altura = altura / 100
    }
    // Si esta en metros lo dejamos así y avanzamos
    formula(peso, altura);
}}

function formula (peso, altura) {
console.log(peso)
console.log(altura)
let resultado = peso / (altura * altura);
console.log(resultado)
let imc = resultado.toFixed(1);
return resultados(imc);
}

function resultados(imc) {
    let clasificacion, tips = "";

    if (imc < 18.5) {
        clasificacion = "Bajo peso";
        tips = "Ingiere mas comida, y haz un poco de ejercicio";
    } else if (imc < 24.9) {
        clasificacion = "Peso normal";
        tips = "Tienes un peso sano, sigue así";
    } else if (imc < 29.9) {
        clasificacion = "Sobrepeso";
        tips = "Trata de hacer ejercicio e ingerir menos alimentos";
    } else if (imc < 34.9) {
        clasificacion = "Obesidad tipo I";
        tips = "Trata de hacer ejercicio y entrar en dieta";
    } else if (imc < 39.9) {
        clasificacion = "Obesidad tipo II";
        tips = "Haz mucho mas ejercicio y entra en dieta";
    } else {
        clasificacion = "Obesidad tipo III (mórbida)";
        tips = "Trata de hacer ejercicio y buscar ayuda profesional de manera inmediata";
    }

    // document.getElementById('resultado').innerText =
    //     `Tu IMC es ${imc} → Clasificación: ${clasificacion}<br>${tips}`;

    document.getElementById('resultado').innerHTML = 
        `Tu Indice de Masas Corporal es ${imc}<br>→ Clasificación: ${clasificacion}<br>${tips}`;
}


// function resultados (resultado, imc) {
// if (resultado <= 18.5) {
//     alert("tu Indice de Masas Corporal Es: " + imc + " Tienes un PESO BAJO, Ingiere mas alimentos");
// } else if (resultado > 18.5 && resultado <= 24.9) {
//     alert("tu Indice de Masas Corporal Es: " + imc + " Lo que es un PESO SANO, sigue así");
// } else if (resultado > 25 && resultado <= 29.9) {
//     alert("tu Indice de Masas Corporal Es: " + imc + " Tienes SOBRE PESO, Trata de hacer ejercicio e ingerir menos alimentos");
// } else if (resultado > 30 && resultado <= 34.9) {
//     alert("tu Indice de Masas Corporal Es: " + imc + " Tienes OBESIDAD TIPO I, Trata de hacer ejercicio y entrar en dieta");
// } else if (resultado > 35 && resultado <= 39.9) {
//     alert("tu Indice de Masas Corporal Es: " + imc + " Tienes OBESIDAD TIPO II, haz mucho mas ejercicio y entra en dieta");
// } else {
//     alert("tu Indice de Masas Corporal Es: " + imc + " Tienes OBESIDAD MÓRBIDA, Trata de hacer ejercicio y buscar ayuda profesional de manera inmediata");
// }
// }