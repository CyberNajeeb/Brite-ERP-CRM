@driver
Feature: Login
  Scenario Outline: user signs in with <username> and <password>

    Given user is on login page
#    Then user logs in as CRM manager
#    Then user navigates to CRM tab
#    Then user confirms successful login by getting current CRM username
#Scenario:
#    Then user logs in as Inventory manager
#    Then user navigates to Inventory tab
#    Then user confirms successful login by getting current Inventory username




    When user signs in with "<username>" and "<password>"
    Examples:
      | username                    | password         |
      | imm30@info.com              | inventorymanager |
      | imm31@info.com              | inventorymanager |
      | imm32@info.com              | inventorymanager |
      | imm33@info.com              | inventorymanager |
      | imm34@info.com              | inventorymanager |
      | posmanager60@info.com       | posmanager       |
      | posmanager61@info.com       | posmanager       |
      | posmanager62@info.com       | posmanager       |
      | posmanager63@info.com       | posmanager       |
      | posmanager64@info.com       | posmanager       |
      | eventscrmmanager38@info.com | eventscrmmanager |
      | eventscrmmanager39@info.com | eventscrmmanager |