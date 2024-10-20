const { I } = inject();

module.exports = {

  fields: {
    email: '~email',
    login: '~senha'
  },

  buttons: {
    entrar: '~entrar'
  },

  menssage: {
    mensagemErro: '~lognFail'
  },

  //------------------------

  realizarLogin(email, senha){
    I.fillField(this.fields.email, email),
    //pause()
    I.fillField(this.fields.login, senha),
    I.click(this.buttons.entrar)
  },

  validarMensagemErro(){
    I.waitForElement(this.menssage.mensagemErro, 3);
    I.seeElement(this.menssage.mensagemErro)
  }
}
