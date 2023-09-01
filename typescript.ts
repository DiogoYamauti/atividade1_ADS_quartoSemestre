import * as promptSync from "prompt-sync";

const prompt = promptSync();

interface Aluno {
    nome: string;
    notas: number[];
    media: number;
  }
  
  function calculaMedia(notas: number[]): number {
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    return soma / notas.length;
  }

  const nome = prompt('Digite o nome do aluno: ');

  const notas: number[] = [];
  for (let i = 1; i <= 4; i++) {
    const nota = parseFloat(prompt(`Digite a ${i}ª nota (0 a 10): `));
    
    if (isNaN(nota) || nota < 0 || nota > 10) {
      console.log('Nota inválida. As notas devem ser entre 0 e 10.'); // eu nao consegui fazer com que ele nao gravasse o numero caso seja maior ou menor
    }
    
    notas.push(nota);
  }

  const media = calculaMedia(notas);

  const aluno: Aluno = {
    nome,
    notas,
    media
  };

  console.log(aluno);
