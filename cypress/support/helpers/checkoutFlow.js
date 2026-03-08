import { faker } from "@faker-js/faker";
const email = faker.internet.email();
const firstname = faker.person.firstName();
const lastname = faker.person.lastName();
const address = faker.location.streetAddress();
const city = faker.location.city();
const postcode = faker.location.zipCode();

Cypress.Commands.add("checkoutAsguestwithCC", () => {
  cy.get('.button-1.checkout-as-guest-button').click()
  cy.get('#BillingNewAddress_FirstName').type(firstname)
  cy.get('#BillingNewAddress_LastName').type(lastname)
  cy.get('#BillingNewAddress_Email').type(email)
  cy.get('#BillingNewAddress_StateProvinceId').select('628')
  cy.get('#BillingNewAddress_City').type(city)
  cy.get('#BillingNewAddress_Address1').type(address)
  cy.get('#BillingNewAddress_ZipPostalCode').type(postcode)
  cy.get("button[onclick='Billing.save()']").click()
  cy.get('.button-1.shipping-method-next-step-button').click()
  cy.get('#paymentmethod_1').click()
  cy.get("button[class='button-1 payment-method-next-step-button']").click()
  cy.get('#CardholderName').type('baba akano')
  cy.get('#CardNumber').type('5555 5555 5555 4444')
  cy.get('#ExpireMonth').select('3')
  cy.get('#ExpireYear').select('2040')
  cy.get('.button-1.payment-info-next-step-button').click()
  cy.get('#termsofservice').click()
  cy.get('.button-1.confirm-order-next-step-button').click()
  cy.get("div[class='section order-completed'] h2[class='title']")
  .should('have.text', 'Your order has been successfully processed!')
   
  })

///// Registered user checkout flow /////////////
  Cypress.Commands.add('userLogin', () => {
   cy.get('.ico-login').click()
   cy.get('#Username').type('baba72')
   cy.get('#Password').type('red123')
   cy.get("button[class='button-1 login-button']").click()
 });

 


