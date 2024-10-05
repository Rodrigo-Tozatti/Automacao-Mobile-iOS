const { I } = inject();

module.exports = {

  preecnhimento: {
    email: '~email',
    senha: '~senha'
  },

  botoes: {
    entrar: '~entrar'
  },

  mensagem: {
    erro: 'lognFail'

  },

//---------------------------------

login(email, senha) {
  I.retry(3).fillField(this.preecnhimento.email, email)
  I.fillField(this.preecnhimento.senha, senha)

  I.click(this.botoes.entrar)
},

validarErro() {
  //pause()
  I.waitForElement(this.mensagem.erro, 2)
  I.seeElement(this.mensagem.erro)
}

}


