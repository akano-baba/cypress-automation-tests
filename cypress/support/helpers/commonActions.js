Cypress.Commands.add('linkText', () => {
    cy.get("a[href*='/']");
  });

  Cypress.Commands.add('checkOutBtn', () => {
    cy.get('.checkout-buttons').click()
  });

  Cypress.Commands.add('termsofservice', () => {
    cy.get('#termsofservice').click()
  });


  Cypress.Commands.add('radioBtn', () => {
    cy.get('[type="radio"]')
  });

  Cypress.Commands.add('checkBox', () => {
    cy.get('[type="checkbox"]')
  });

  Cypress.Commands.add('AddToCartBtn', () => {
    cy.get('input.product-box-add-to-cart-button')
      .should('have.value', 'Add to cart');
  });

  Cypress.Commands.add('shoppingCart', () => {
    cy.get('.cart-qty').click()
  });
  
  
  

  Cypress.Commands.add("assertAnyValidationMessage", (expectedText) => {
    cy.get("body").then(($body) => {
      if ($body.find(".field-validation-error").length > 0) {
        cy.get(".field-validation-error").should("contain.text", expectedText);
      } else if ($body.find(".validation-summary-errors").length > 0) {
        cy.get(".validation-summary-errors").should("contain.text", expectedText);
      } else {
        throw new Error("No validation message found on the page.");
      }
    });
  });