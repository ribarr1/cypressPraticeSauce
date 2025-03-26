interface UserData {
  user: string;
  pass: string;
  fname: string;
  lname: string;
  pcode: string;
}
import selectors from '../pages/selectors';
describe('Checkout Tests', () => {
  let userData: UserData;
  beforeEach(() => {
    cy.visit('/')
    cy.fixture<UserData>('basicData').then((data) => {   
      userData = data;
        cy.escribir(selectors.login.user,userData.user)
        cy.escribir(selectors.login.pass,userData.pass)
        cy.makeClick(selectors.login.btn_ingresar)
        cy.productClick(selectors.products.item,selectors.products.findButton)
        cy.makeClick(selectors.products.cartLink)
        cy.makeClick(selectors.products.checkoutLink)
        cy.escribir(selectors.dataBasic.fname,userData.fname)
        cy.escribir(selectors.dataBasic.lname,userData.lname)
        cy.escribir(selectors.dataBasic.pcode,userData.pcode)
        cy.makeClick(selectors.products.continueButton)
        cy.makeClick(selectors.products.finishButton)
  });
  })

  it('Debería finalizar la compra con éxito', () => {
    
    cy.contains(selectors.products.checkoutMessage).should('be.visible')
  })
})