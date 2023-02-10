
/*
    Projeto: Sistema para cálculo de médias escolares 
    Ojetivo: calcular média dos alunos e emitir resultados de satisfação (aprovado ou reprovado)
    Data: 10/02/2023
    Autor: Ítalo Reis Rosa
    Versão: 1.0
*/

//imports..
const { stdin, stdout } = require('process')
let readline = require('readline')
const functions = require('./functions')
let entradaDados = readline.createInterface({

    input: process.stdin,
    output: process.stdout


})

entradaDados.question("Qual o nome do aluno ? \n", function (nomeAluno) {

    let nomeDoAluno = nomeAluno;

    entradaDados.question("Qual o Sexo do aluno ? \n", function (sexoAluno) {

        let sexoDoAluno = sexoAluno.toUpperCase()
        console.log(functions.validarSexoAluno(sexoDoAluno));

        entradaDados.question("Qual o nome do professor ? \n", function (nomeProfessor) {
            let nomeDoProfessor = nomeProfessor
            console.log(nomeDoProfessor);

            entradaDados.question("Qual o sexo do Professor ? \n ", function (sexoProfessor) {
                let sexoDoProfessor = sexoProfessor.toUpperCase()
                functions.validarSexoProf(sexoDoProfessor)

                entradaDados.question("Qual o nome do curso ? \n", function (nomeCurso) {
                    let nomeDoCurso = nomeCurso
                    console.log(nomeDoCurso);

                    entradaDados.question("Qual o nome da disciplina ? \n", function (nomeDisciplina) {
                        let nomeDaDisciplina = nomeDisciplina
                        console.log(nomeDaDisciplina);

                        //Notas: calculo de média funcionando com validação.
                        entradaDados.question("Qual é a nota1 ? \n", function (valor1) {
                            let nota1 = Number(valor1)

                            entradaDados.question("Qual é a nota2 ? \n", function (valor2) {
                                let nota2 = Number(valor2)

                                entradaDados.question("Qual é a nota3 ? \n", function (valor3) {
                                    let nota3 = Number(valor3)

                                    entradaDados.question("Qual é a nota4 ? \n", function (valor4) {
                                        let nota4 = Number(valor4)
                                        const media = functions.validarRangeDasNotasECalcular(nota1,nota2,nota3,nota4)
                                        const avaliacaoAluno = functions.exibirAvaliacaoDoAluno(media)
                                        console.log(avaliacaoAluno);
                                        //Notas
                                    })
                                })
                            })
                        })
                    })
                })

            })
        })
    })

})













