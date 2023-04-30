import { login } from "../../lib/login"

describe('Login Page', () => {
   beforeEach(() => {
     cy.visit('http://localhost:3000/')
     login.loginWithPreExistingUser()
   })
 
   it('displays the login form', () => {
    
   })
 
 })