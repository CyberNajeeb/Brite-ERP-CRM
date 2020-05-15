@driver
Feature: Login

  Scenario Outline: user signs in with username: <username> and password: <password>

    Given user is on login page
#    Then user logs in as CRM manager
#    Then user navigates to CRM tab

#Scenario:
#    Then user logs in as Inventory manager
#    Then user navigates to Inventory tab
#    Then user confirms successful login by getting current Inventory username

    When user signs in with "<username>" username and "<password>" password
    Then user confirms successful login by getting "<current_username>" username
    Then user navigates to CRM tab
    Then Manager clicks on create button
#    Then Manager enters opportunity title
    And Manager selects customer name
    And Manager sets the expected revenue
    And Manager sets the priority
    Then Manager clicks on create new opportunity button
    Examples:
      | username                    | password         | current_username   |
#      | posmanager60@info.com       | posmanager       | POSManager60       |
#      | posmanager61@info.com       | posmanager       | POSManager61       |
#      | posmanager62@info.com       | posmanager       | POSManager62       |
#      | posmanager63@info.com       | posmanager       | POSManager63       |
#      | posmanager64@info.com       | posmanager       | POSManager64       |
      | eventscrmmanager38@info.com | eventscrmmanager | EventsCRMManager38 |
      | eventscrmmanager39@info.com | eventscrmmanager | EventsCRMManager39 |