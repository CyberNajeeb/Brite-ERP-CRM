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
    Examples:
      | username                    | password         | current_username   |
      | imm30@info.com              | inventorymanager | InventoryManager30 |
      | imm31@info.com              | inventorymanager | InventoryManager31 |
      | imm32@info.com              | inventorymanager | InventoryManager32 |
      | imm33@info.com              | inventorymanager | InventoryManager33 |
      | imm34@info.com              | inventorymanager | InventoryManager34 |
      | posmanager60@info.com       | posmanager       | POSManager60       |
      | posmanager61@info.com       | posmanager       | POSManager61       |
      | posmanager62@info.com       | posmanager       | POSManager62       |
      | posmanager63@info.com       | posmanager       | POSManager63       |
      | posmanager64@info.com       | posmanager       | POSManager64       |
      | eventscrmmanager38@info.com | eventscrmmanager | EventsCRMManager38 |
      | eventscrmmanager39@info.com | eventscrmmanager | EventsCRMManager39 |