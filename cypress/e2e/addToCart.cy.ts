interface UserData {
  user: string;
  pass: string;
}
import selectors from '../pages/selectors';
describe('Add to Cart Tests', () => {
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

  it('add a product to the cart', () => {
    cy.productClick(selectors.products.item,selectors.products.findButton)    
    cy.get(selectors.products.cartBadge).should('contain', '1')
  })
})