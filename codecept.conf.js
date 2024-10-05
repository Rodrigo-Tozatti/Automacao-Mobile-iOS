const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');

setHeadlessWhen(process.env.HEADLESS);
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  name: 'automation_appium',
  tests: './testes/*_test.js', ///Users/rodrigotozatti/Repositorio-iOS/Automacao-Mobile-iOS/testes/*_test.js
  output: './output',
  helpers: {
    Appium: {
      appiumV2: true,
      //url: 'http://127.0.0.1:4723/', // URL do servidor Appium
      app: '/Users/rodrigotozatti/Repositorio-iOS/Automacao-Mobile-iOS/App-iOS/qazandoapp.app',
      desiredCapabilities: {
        platformName: 'iOS',
        platformVersion: '16.2', // Versão do sistema oper
        deviceName: 'iPhone 14 Pro Max', // Nome do dispositivo
        automationName: 'XcUiTest',
      },
      path: '/'
    }
  },
  include: {
    I: './steps_file.js', // Local do arquivo de etapas
    loginPage: "./pages/Login.js",
    pagina_inicialPage: "./pages/Pagina_inicial.js",
  },
  bootstrap: async () => {
    console.log('Iniciando bootstrap...');
    //await startServer('./server/server.js'); // Inicia o processo do bootstrap (neste caso, apenas exibe uma mensagem)
  },
  teardown: async () => {
    console.log('Executando teardown...');
    //await stopServer('./server/server.js'); // Executa o teardown (neste caso, apenas exibe uma mensagem)
  },

};