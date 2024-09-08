const steps = require('./step_definitions/*.js')

exports.config = {
  output: './output',
  helpers: {
    Appium: {
      appiumV2: true,
      url: 'http://127.0.0.1:4723/',
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
    tela_LoginPage: './pages/Tela_Login.js',
    tela_InicialPage: './pages/Tela_Inicial.js'
  },
  mocha: {},
  //bootstrap: null,
  timeout: null,
  //teardown: null,
  hooks: [],
  /*gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/*.js']
  },*/
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {
      enabled: true
    }
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
  tests: './Testes_Mobile/*_test.js'
}