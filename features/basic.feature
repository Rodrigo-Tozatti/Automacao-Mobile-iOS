
Feature: CT001 - Login na plataforma
  Como usuário do APP Qazando
  Quero realizar o login
  Para ter acesso ao sistema
  

  Scenario: Cenário 01: Realizar login com sucesso
    Given eu digite o usuário 
    And a senha válidos
    When clicar no botão Entrar
    Then consigo ter acesso au sistema
