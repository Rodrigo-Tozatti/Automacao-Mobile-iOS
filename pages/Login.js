const { I } = inject();

module.exports = {

  preecnhimento: {
    email: '~email',
    senha: '~senha'
  },

  botoes: {
    entrar: '~entrar'
  },

//---------------------------------

login(email, senha) {
  I.fillField(this.preecnhimento.email, email)
  I.fillField(this.preecnhimento.senha, senha)

  I.click(this.botoes.entrar)
}

}
