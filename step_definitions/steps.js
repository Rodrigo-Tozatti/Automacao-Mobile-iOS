const { I } = inject();
// Add in your custom step files


Dado('que eu digite o email', () => {
  I.fillField('~email', 'teste@teste.com');
});

E('a senha', () => {
  I.fillField('~senha', '123456');
});

Quando('eu clicar no botão Entrar', () => {
  I.click('~entrar');
});

Então('devo ver o botão Salvar', () => {
  I.waitForElement('~salvar', 5);
  I.seeElement('~salvar');
});
