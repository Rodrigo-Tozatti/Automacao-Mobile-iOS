//const Tela_login = require("./pages/Tela_login");
const { I, Tela_login } = inject

Feature('CT001 - Login na plataforma');

Scenario('Cenário 01: Realizar login com sucesso',  ({ }) => {

    Tela_login.realizarLogin('teste@teste.com', '123456')

    //checar
    I.waitForElement('~salvar', 2)
    I.seeElement('~salvar')
});

Scenario('Cenário 02: Tentativa de login com senha errada',  ({ }) => {
    
    Tela_login.realizarLogin('teste2@teste.com', '123456')

    //checar
    I.waitForElement('lognFail', 2)
    I.seeElement('lognFail')
});
