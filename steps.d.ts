/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type tela_LoginPage = typeof import('./pages/Tela_Login.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, tela_LoginPage: tela_LoginPage }
  interface Methods extends Appium {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
