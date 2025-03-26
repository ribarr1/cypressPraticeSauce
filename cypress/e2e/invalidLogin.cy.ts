interface UserData {
  user: string;
  pass: string;
}
import selectors from '../pages/selectors';
describe('Invalid Login Tests', () => {
  let userData: UserData;
  beforeEach(() => {
      cy.visit('/')
      cy.fixture<UserData>('invalidUsers').then((data) => {   
      userData = data;
        cy.escribir(selectors.login.user,userData.user)
        cy.escribir(selectors.login.pass,userData.pass)
        cy.makeClick(selectors.login.btn_ingresar)
      })
   })    



  it('Debería mostrar un error con credenciales inválidas', () => {
        cy.get('[data-test="error"]').should('be.visible')
      .and('contain', 'Username and password do not match any user')

  })
})