const { I } = inject();
const step_definitions = require('./*.js')

Given('eu preecnha o email', () => {
  I.fillField('~email', 'teste@teste.com');
});

And('a senha corretamente', () => {
  I.fillField('~senha', '123456');
});

When('clicar no botão Entrar', () => {
  I.tap('~entrar');
});

Then('o App deve fazer o login na plataforma e validar o botão Salvar', () => {
  I.waitForElement('~salvar', 3)
    I.seeElement('~salvar');
});
