Feature('Login');

const { I, tela_LoginPage } = inject()

BeforeSuite(() => {
    console.log('BeforeSuite')
});

Before(() => {
    console.log('Before')
});

AfterSuite(() => {
    console.log('AftereSuite')
});

After(() => {
    console.log('After')
});

Scenario('Cenário 01 - Realizar login com sucesso',  ({ tela_InicialPage }) => {
    tela_LoginPage.realizarLogin('teste@teste.com', '123456')
    //pause()
    tela_InicialPage.validarBotao()
});

Scenario('Cenário 02 - Login com email inválido',  () => {
    tela_LoginPage.realizarLogin('teste123@teste.com', '123456')
    tela_LoginPage.validarMensagemErro()
});

