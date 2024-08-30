const { I } = inject();

module.exports = {

  buttons: {
    botao: '~salvar'
  },

  //------------------------

  validarBotao(){
    I.waitForElement(this.buttons.botao, 5);
    I.seeElement(this.buttons.botao)
  }
  
}
