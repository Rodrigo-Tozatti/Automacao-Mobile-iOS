const { I } = inject();

Given('eu digite o usuário', () => {
  I.fillField('~email', 'teste@teste.com')
});

Given('a senha válidos', () => {
  I.fillField('~senha', '123456')
});

When('clicar no botão Entrar', () => {
  I.click('~entrar')
});

Then('consigo ter acesso au sistema', () => {
  I.waitForElement('~salvar', 3)
  I.seeElement('~salvar')
});
