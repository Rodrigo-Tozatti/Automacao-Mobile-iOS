Feature('CT002 - Manutenção de alunos');

const { I, loginPage, pagina_inicialPage  } = inject()
const variaveis_aluno = require('../utils/variaveis_geral.js')

const codigo = require ('../utils/codigo.js')
const nomeCompleto = require ('../utils/fakerbrasil.js');
const variaveis_geral = require('../utils/variaveis_geral.js');

Scenario('Cadastrar aluno com sucesso',  () => {

    const codigo4 = codigo.codigo4Digitos() // criar a variável para que na tela utilize o mesmo código em vários campos
    const nomeAluno = nomeCompleto.nomeFaker() // criar variável para que na tela utilize o mesmo código em vários campos

    // login
    loginPage.login(variaveis_geral.email, variaveis_geral.senha)

    // manutenção aluno
    pagina_inicialPage.cadAlunos(codigo4, nomeAluno) // cadastro do aluno
    pagina_inicialPage.pesquisaAluno(nomeAluno)
    pagina_inicialPage.validarAluno(codigo4)

});
