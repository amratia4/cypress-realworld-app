import { defaultPassword, preExistingUserNames } from "../fixtures/test-data/login-test-data"

export const loginPageSelector = {
   username: '[id="username"]',
   password:'[id="password"]',
   rememberCheckbox: '[class="PrivateSwitchBase-input-14"]',
   signIn:'[data-test="signin-submit"]',
   assertLogin:'[data-test="sidenav-username"]'
}

export class login {
   static loginWithPreExistingUser(){
      cy.get(loginPageSelector.username).type(preExistingUserNames[0])
      cy.get(loginPageSelector.password).type(defaultPassword.password)
      cy.log(`Logging in with username: ${preExistingUserNames[0]} and password: ********`)
      cy.get(loginPageSelector.signIn).click()
      cy.get(loginPageSelector.assertLogin).should('contain.text',preExistingUserNames[0])
   }
}