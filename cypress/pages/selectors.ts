class selectors {
    //login selectors
        login = {
                user : '[data-test="username"]',
                pass : '[data-test="password"]', 
                btn_ingresar:'[data-test="login-button"]'
                
        }
    
    //users selectors    
        dataBasic = {
            fname : '[data-test="firstName"]',
            lname : '[data-test="lastName"]',
            pcode : '[data-test="postalCode"]'
    }
    //products selector    
        products = {
            item:'.inventory_item',
                findButton:'button',
                cartBadge:'.shopping_cart_badge',
                cartLink: '.shopping_cart_link',
                checkoutLink: '[data-test="checkout"]',
                continueButton: '[data-test="continue"]',
                finishButton: '[data-test="finish"]',
                checkoutMessage: 'Thank you for your order!'

    }
        }
    // export selectors for use
    export default new selectors();