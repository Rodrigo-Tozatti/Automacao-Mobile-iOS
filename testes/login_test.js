Feature('CT001 - Login na plataforma');

const { I, loginPage } = inject()

BeforeSuite(() => {
    console.log('BeforeSuite - roda uma vez antes de todos os Scenarios')
})

Before(() => {
    console.log('Before - roda antes de cada Scenario')
});

After(() => {
    console.log('After - roda no fim de cada Scenario')
});

AfterSuite(() => {
    console.log('AfterSuite - roda no final de todos os Scenario')
});

Scenario('Cenário 01: Realizar login com sucesso',  ( { pagina_inicialPage } ) => {
    loginPage.login('teste@teste.com', '123456'),
    pagina_inicialPage.validar()
});

Scenario('Cenário 02: Tentativa de login com senha errada',  () => {
    loginPage.login('teste2@teste.com', '123456')
    loginPage.validarErro()
});
