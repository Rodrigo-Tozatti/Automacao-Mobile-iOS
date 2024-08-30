Feature('Login');

const { I, tela_LoginPage } = inject()

Scenario('Cenário 01 - Realizar login com sucesso',  ({ tela_InicialPage }) => {
    tela_LoginPage.realizarLogin('teste@teste.com', '123456')
    tela_InicialPage.validarBotao()
});

Scenario('Cenário 02 - Login com email inválido',  () => {
    tela_LoginPage.realizarLogin('teste123@teste.com', '123456')
    tela_LoginPage.validarMensagemErro()
});

