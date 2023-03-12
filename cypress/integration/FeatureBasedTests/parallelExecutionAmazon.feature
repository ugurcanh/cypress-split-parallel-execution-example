Feature: Test for navigation www.amazon.com

    Scenario: Navigating to Amazon and check the word of Google
        When Navigate to Amazon page
        Then Assert there is Amazon word on page