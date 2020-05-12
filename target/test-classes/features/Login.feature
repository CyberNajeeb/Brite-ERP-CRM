@driver
Feature: Login
  Background:
    When user is on login page

  Scenario: Login as CRM Manager
    Then user logs in as CRM manager
    Then user navigates to CRM tab
    Then user confirms successful login by getting current CRM username

  Scenario: Use logins as Inventory manager Manager
    Then user logs in as Inventory manager
    Then user navigates to Inventory tab
    Then user confirms successful login by getting current Inventory username