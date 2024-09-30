Feature('login');

Scenario('Cenário 01: Deve realizar login com sucesso',  ({ I }) => {
    I.fillField('~email', 'teste@teste.com')

});
