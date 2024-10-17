Feature('CT002 - Manutenção de alunos');

const { I, loginPage, pagina_inicialPage  } = inject()

Scenario('Cadastrar aluno com sucesso',  () => {
    const codigo = 9090
    const nome = 'Fer Silveira'

    loginPage.login('teste@teste.com', '123456')

    pagina_inicialPage.cadAlunos(codigo, nome) // cadastro do aluno
    pagina_inicialPage.pesquisaAluno(nome)
    pagina_inicialPage.validarAluno(codigo)

});
