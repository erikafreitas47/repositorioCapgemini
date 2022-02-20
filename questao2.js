let senha = "Ya3";
let tamanhoSenha = senha.length;
let adicionados = 0;
const regexEspecial = /\W/;
const regexMaiusculo = /[A-Z]/;
const regexMinusculo = /[a-z]/;
const regexNumero = /[0-9]/;

if (! regexEspecial.test(senha)){
    adicionados++;
}

if (! regexMaiusculo.test(senha)){
    adicionados++;
}

if (! regexMinusculo.test(senha)){
    adicionados++;
}

if (! regexNumero.test(senha)){
    adicionados++;
}

if (adicionados + tamanhoSenha < 6){
    adicionados = adicionados + (6 - (adicionados + tamanhoSenha));
}

console.log("Senha com caracteres insuficientes. Por favor, insira mais " + adicionados + " caractere(s).");







