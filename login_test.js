Feature('login');

Scenario('Cenário 01: Deve realizar login com sucesso',  ({ I }) => {
    
    //preencher campos
    I.fillField('~email', 'teste@teste.com')
    I.fillField('~senha', '123456')

    //clicar botão Entrar
    I.click('~entrar')

    //checar
    I.waitForElement('~salvar', 3)
    I.seeElement('~salvar')
});
