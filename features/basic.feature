
Feature: Business rules
  Como usuário do App Qazando
  Quero fazer login 
  Para acessar a plataforma

  Scenario: Cenário 001 - Deve fazer login com sucesso
    Given eu preecnha o email
    And a senha corretamente
    When clicar no botão Entrar
    Then o App deve fazer o login na plataforma e validar o botão Salvar
