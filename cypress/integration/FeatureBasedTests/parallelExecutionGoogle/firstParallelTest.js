import {When, Then} from "cypress-cucumber-preprocessor/steps";

When("Navigate to Google page", ()=>{
    //Visit Google page 
    cy.visit("www.google.com");
});

Then("Assert Google Search button is loaded", () => {
    //Assert there is a button (Actually its text :) )
    cy.contains("Gmail").should("be.visible");

});