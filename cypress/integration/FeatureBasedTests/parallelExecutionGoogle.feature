Feature: Test for finding element in www.google.com

    Scenario: Navigating to Google and check Google Search button
        When Navigate to Google page
        Then Assert Google Search button is loaded