
Feature('CT001 - Login na plataforma');

const { I, loginPage } = inject()

Scenario('Cenário 01: Realizar login com sucesso',  () => {

    loginPage.login('teste@teste.com', '123456')

    //checar
    I.waitForElement('~salvar', 2)
    I.seeElement('~salvar')
});

Scenario('Cenário 02: Tentativa de login com senha errada',  () => {
    
    loginPage.login('teste2@teste.com', '123456')

    //checar
    I.waitForElement('lognFail', 2)
    I.seeElement('lognFail')
});
