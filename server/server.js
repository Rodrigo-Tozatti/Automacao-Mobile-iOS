// Função para o bootstrap
async function startServer() {
    console.log('Servidor iniciado - Bootstrap');
  }
  
  // Função para o teardown
  async function stopServer() {
    console.log('Servidor encerrado - Teardown');
  }
  
  // Exportar as funções para serem usadas no CodeceptJS
  module.exports = {
    startServer,
    stopServer,
  };
  