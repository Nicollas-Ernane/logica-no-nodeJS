const estudante = "caroline";
const docente = 'ana';
const cumprimento = "nosso lema é 'estudar bastante!'";
const citacao = `ju diz: "nosso lema é 'estudar bastante!'"`

console.log(cumprimento);
console.log(citacao);

// console.log('a estudante chama ' + estudante);

// template string
console.log(`a estudante chama ${estudante}`);

const senha = 'SenhaSegura123' + estudante.toUpperCase();
console.log(senha);
