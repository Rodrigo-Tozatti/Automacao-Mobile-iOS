const { I } = inject();

module.exports = {

  fields:{
    email: '~email',
    senha: '~senha'
  },

  button:{
    entrar: '~entrar'
  },

  realizarLogin(email, senha) {
    I.fillField(this.fields.email, email)
    I.fillField(this.fields.senha, senha)
    I.click(this.button.entrar)
  }
}
