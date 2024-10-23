const server = require ('./server/server.js')

exports.config = {
  output: './output',
  helpers: {
    Appium: {
      defaultWaitForAction: 500,
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
    await server.start(); 
  },
  teardown: async () => {
    await server.stop(); 
  },
  timeout: null,
  hooks: [],
  /*gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },*/
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
  tests: './testes/*_test.js'
}