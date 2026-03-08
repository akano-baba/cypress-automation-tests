import { Environment } from "../../support/helpers/environs";
import { UserRegistration } from "../../support/page/userRegistration";
import { faker } from "@faker-js/faker";
const userRegistration = new UserRegistration();
const baseUrl = Environment.getBaseUrl();

const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const email = faker.internet.email();
const username = faker.internet.username();
const street = faker.location.streetAddress();
const city = faker.location.city();
const postcode = faker.location.zipCode();
const country = faker.location.country();

describe("", () => {
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it("Register a new user with valid credentials", () => {
    
    userRegistration.pageAction.clickRegisterLink().click();
    userRegistration.pageAction.selectFemaleGender().click()
    userRegistration.pageAction.enterFirstName().type(firstName)
    userRegistration.pageAction.enterLastName().type(lastName)
    userRegistration.pageAction.selectDay().select('10')
    userRegistration.pageAction.selectMonth().select('7')
    userRegistration.pageAction.selectYear().select('1927')
    userRegistration.pageAction.enterEmail().type(email)
    userRegistration.pageAction.enterUsername().type(username)
    userRegistration.pageAction.enterAddress().type(street)
    userRegistration.pageAction.entercountry().type(country)
    userRegistration.pageAction.enterZip().type(postcode)
    userRegistration.pageAction.enterCity().type(city)
    userRegistration.pageAction.selectState().select('628')
    userRegistration.pageAction.enterPassword().type('Password1')
    userRegistration.pageAction.enterconfirmPwd().type('Password1')
    userRegistration.pageAction.clickPP().click()
    userRegistration.pageAction.clickRegisterBtn().click()
    cy.get('.result').should('contain.text','Your registration completed')

  });
});
