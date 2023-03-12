import {When, Then} from "cypress-cucumber-preprocessor/steps";

When("Navigate to Google page", ()=>{
    //Visit Google page 
    cy.visit("www.google.com");
});

Then("Assert there is Google word on page", () => {
    //Check whether there is google on page
    cy.contains("Google")


});