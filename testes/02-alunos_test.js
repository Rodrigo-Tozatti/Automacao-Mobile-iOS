Feature('CT002 - Manutenção de alunos');

const { I, loginPage, pagina_inicialPage  } = inject()
const variaveis_aluno = require('../dados/variaveis_aluno')

Scenario('Cadastrar aluno com sucesso',  () => {

    // login
    loginPage.login(variaveis_aluno.email, variaveis_aluno.senha)

    // manutenção aluno
    pagina_inicialPage.cadAlunos(variaveis_aluno.codigo, variaveis_aluno.nome) // cadastro do aluno
    pagina_inicialPage.pesquisaAluno(variaveis_aluno.nome)
    pagina_inicialPage.validarAluno(variaveis_aluno.codigo)

});
