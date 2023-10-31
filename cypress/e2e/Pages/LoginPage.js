export class LoginPage {
    navigateToPage() {
      cy.visit('https://www.edu.goit.global/account/login');
    }
  
    validateLoginTitle() {
      cy.get('.css-10stgr7 > .css-c1vj7d').should('be.visible');
      cy.get('.css-10stgr7 > .css-c1vj7d').should('have.text', 'Login');
    }
  
    validateInputs() {
      cy.get('#user_email').should('be.visible');
      cy.get('#user_password').should('be.visible');
    }
  
    validateLoginButton() {
      cy.contains('Log in').should('be.visible');
    }
  
    validatePasswordLink() {
      cy.get('[href="/account/password/restore"]').should('be.visible');
      cy.get('[href="/account/password/restore"]').should(
        'have.text',
        "I can't remember the password"
      );
    }
  }

  export class LogIn {
    inputEmail(email) {
      cy.get('#user_email').type(email);
    }
  
    inputPassword(password) {
      cy.get('#user_password').type(password);
    }
  
    clickLogIn() {
      cy.contains('Log in').click();
    }
  }
  
  export class LogOut {
    openBurgerMenu() {
      cy.get('#open-navigation-menu-mobile').click();
    }
  
    clickLogOut() {
      cy.contains('Log out').click();
    }
  }