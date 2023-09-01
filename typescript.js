"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
function calculaMedia(notas) {
    var soma = notas.reduce(function (acc, nota) { return acc + nota; }, 0);
    return soma / notas.length;
}
var nome = prompt('Digite o nome do aluno: ');
var notas = [];
for (var i = 1; i <= 4; i++) {
    var nota = parseFloat(prompt("Digite a ".concat(i, "\u00AA nota (0 a 10): ")));
    if (isNaN(nota) || nota < 0 || nota > 10) {
        console.log('Nota inválida. As notas devem ser entre 0 e 10.'); // eu nao consegui fazer com que ele nao gravasse o numero caso seja maior ou menor
    }
    notas.push(nota);
}
var media = calculaMedia(notas);
var aluno = {
    nome: nome,
    notas: notas,
    media: media
};
console.log(aluno);
