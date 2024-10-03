const { I } = inject();

module.exports = {

  botoes: {
    salvar: '~salvar'
  },

  //--------------------

  validar(tempo) {
    I.waitForElement(this.botoes.salvar, 2)
    I.seeElement(this.botoes.salvar)
  }

}
