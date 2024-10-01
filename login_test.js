Feature('login');

Scenario('Cenário 01: Realizar login com sucesso',  ({ I }) => {
    
    //preencher campos
    I.fillField('~email', 'teste@teste.com')
    I.fillField('~senha', '123456')

    //clicar botão Entrar
    I.click('~entrar')

    //checar
    I.waitForElement('~salvar', 3)
    I.seeElement('~salvar')
});

Scenario.only('Cenário 02: Tentativa de login com senha errada',  ({ I }) => {
    
    //preencher campos
    I.fillField('~email', 'teste2@teste.com')
    I.fillField('~senha', '123456')

    //clicar botão Entrar
    I.click('~entrar')

    //checar
    I.waitForElement('lognFail', 2)
    I.seeElement('lognFail')
});
