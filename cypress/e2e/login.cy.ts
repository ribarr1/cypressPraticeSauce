interface UserData {
  user: string;
  pass: string;
}
import selectors from '../pages/selectors';
describe('Login Tests', () => {
   
      let userData: UserData;
      beforeEach(() => {
        cy.visit('/')
        cy.fixture<UserData>('validUsers').then((data) => {   
            userData = data;
            cy.escribir(selectors.login.user,userData.user)
            cy.escribir(selectors.login.pass,userData.pass)
            cy.makeClick(selectors.login.btn_ingresar)           
         });
       
    })

    it('log in with valid credentials', () => {
      cy.url().should('include', '/inventory.html')
      cy.contains('Products').should('be.visible')
    })
})

