exports.config = {
  output: './output',
  helpers: {
    Appium: {
      appiumV2: true,
      app: '/Users/rodrigotozatti/Repositorio-iOS/Automacao-Mobile-iOS/App-iOS/qazandoapp.app',
      desiredCapabilities: {
        platformName: 'iOS',
        platformVersion: '16.2',
        deviceName: 'iPhone 14 Pro Max',
        automationName: 'XcUiTest'
      },
      path: '/'
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: './pages/Login.js',
    pagina_inicialPage: './pages/Pagina_inicial.js'
  },
  mocha: {},
  bootstrap: async () => {
    console.log('Iniciando bootstrap...');
    //await startServer('./server/server.js'); // Inicia o processo do bootstrap (neste caso, apenas exibe uma mensagem)
  },
  teardown: async () => {
    console.log('Executando teardown...');
    //await stopServer('./server/server.js'); // Executa o teardown (neste caso, apenas exibe uma mensagem)
  },
  timeout: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    allure: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  name: 'automation_appium',
  //tests: './testes/*_test.js'
}