Feature('CT001 - Login na plataforma');

const { I, loginPage } = inject()

Scenario('Cenário 01: Realizar login com sucesso',  ( { pagina_inicialPage } ) => {
    loginPage.login('teste@teste.com', '123456'),
    pagina_inicialPage.validar()
});

Scenario('Cenário 02: Tentativa de login com senha errada',  () => {
    loginPage.login('teste2@teste.com', '123456')
    loginPage.validarErro()
});
