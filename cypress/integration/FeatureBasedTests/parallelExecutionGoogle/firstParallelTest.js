import {When, Then} from "cypress-cucumber-preprocessor/steps";

When("Navigate to Google page", ()=>{
    cy.visit("www.google.com");
});

Then("Assert Google Search button is loaded", () => {

});