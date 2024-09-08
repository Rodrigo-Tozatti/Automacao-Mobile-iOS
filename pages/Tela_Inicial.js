const { I } = inject();

module.exports = {

  buttons: {
    botao: '~salvar'
  },

  //------------------------

  validarBotao(){
    I.waitForElement(this.buttons.botao, 5);
    //pause()
    I.seeElement(this.buttons.botao)
  }
  
}
