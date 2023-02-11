//Arquivo para as funções do app
const validarSexoProf = (sexoProf) =>{

    if (sexoProf === 'FEMININO') {
        return 'Professora';
    }
    else if(sexoProf === 'MASCULINO'){
        return 'Professor'
    }
    else{
        return false
    }

}
const validarSexoAluno = (sexoAluno) =>{

    if(sexoAluno === 'MASCULINO'){
        return 'Aluno'
    }
    else if(sexoAluno === 'FEMININO'){
        return 'Aluna'
    }
    else{
        return false
    }

}
const validarRangeDasNotasECalcular = (nota1, nota2, nota3, nota4) => {
    if (nota1 > 100 || nota2 > 100 || nota3 > 100 || nota4 > 100 || nota1 < 0 || nota2 < 0 || nota3 < 0 || nota4 < 0) {
        console.log('erro, digite apenas valores entre 0 e 100');
    }
    else if(isNaN(nota1)|| isNaN(nota2) || isNaN(nota3) || isNaN(nota4)){
        console.log("erro: digite apenas numeros");
    }
    else if(nota1 == ' ' || nota2 == ' ' || nota3 == ' ' || nota4 == ' '){
        console.log("erro, campo sem preenchimento nescessário");
    }
    else {
        let somaMedia = (nota1 + nota2 + nota3 + nota4) 
        let resultadoMedia = somaMedia / 4
        return resultadoMedia
    }
}
const exibirAvaliacaoDoAluno = (media) => {
    if(media > 70){
        return `Aprovado, média: ${media}`
    }
    else if(media >= 50 && media <=69){
        return  `Exame, média: ${media}`

    }
    else if(media < 50){
        return `Reprovado, média: ${media}`
    }
    
}
const avaliarExame = (mediaNotaExame, media) =>{
    if(mediaNotaExame < 50 ){
        return `Reprovado, média final: ${mediaNotaExame}`
    }
    else if(mediaNotaExame >= 50){
        return `Aprovado média final: ${mediaNotaExame}`
    }
    else{
        return false
    }
    
}
const imprimirRelatorio = (sexoAluno, nomeAluno, sexoProfessor,nomeProfessor,tipoDocurso,nomeDisciplina) =>{
    return `${sexoAluno}: ${nomeAluno} 
    \n${sexoProfessor}: ${nomeProfessor}
    \nCurso: ${tipoDocurso}
    \nDisciplina: ${nomeDisciplina} 
    `
          
}

module.exports = {
    validarRangeDasNotasECalcular,
    validarSexoProf,
    validarSexoAluno,
    exibirAvaliacaoDoAluno,
    imprimirRelatorio,
    avaliarExame
}




