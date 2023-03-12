Feature: Test for navigation www.google.com

    Scenario: Navigating to Google and check the word of Google
        When Navigate to Google page
        Then Assert there is Google word on page