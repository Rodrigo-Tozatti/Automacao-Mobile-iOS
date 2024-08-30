Feature('login');

Scenario('Cenário 01 - Realizar login com sucesso',  ({ I }) => {
    I.fillField('~email', 'teste@teste.com')
    I.fillField('~senha', '123456')

    I.click('~entrar')

    I.waitForElement('~salvar', 5);
    I.seeElement('~salvar')

});

Scenario('Cenário 02 - Login com email inválido',  ({ I }) => {
    I.fillField('~email', 'teste123@teste.com')
    I.fillField('~senha', '123456')

    I.click('~entrar')

    I.waitForElement('~lognFail', 5);
    I.seeElement('~lognFail')

});
