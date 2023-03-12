import {When, Then} from "cypress-cucumber-preprocessor/steps";

When("Navigate to Amazon page", ()=>{
    //Visit Amazon page 
    cy.visit("www.amazon.com");
});

Then("Assert there is Amazon word on page", () => {
    //Check whether there is Amazon on page
    cy.contains("Amazon")


});