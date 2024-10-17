const { I } = inject();

module.exports = {

  botoes: {
    salvar: '~salvar',
    cancelar: '~cancelar'
  },

  preenchimento: {
    codigoAluno: '//XCUIElementTypeTextField[@name="RNE__Input__text-input" and @label="codigo"]',
    nomeAluno: '//XCUIElementTypeTextField[@name="RNE__Input__text-input" and @label="aluno"]',
    pesquisaAluno: '//XCUIElementTypeTextField[@name="RNE__Input__text-input" and @label="search"]'
  },

  //--------------------

  validar(tempo) {
    I.waitForElement(this.botoes.salvar, 2)
    I.seeElement(this.botoes.salvar)
  },

  cadAlunos(codigo, nome, delay = 500) {
    I.fillField(this.preenchimento.codigoAluno, codigo)
    I.fillField(this.preenchimento.nomeAluno, nome)
    I.click(this.botoes.salvar)
  },

  pesquisaAluno(nome) {
    I.fillField(this.preenchimento.pesquisaAluno, nome)
  },

  validarAluno(codigo) {
    I.seeElement('(//XCUIElementTypeOther[@name="' + codigo + '"])[2]')
  },

}

