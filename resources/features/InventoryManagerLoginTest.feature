@crmMgr
Feature: CRM Manager Login Test

  Scenario Outline: user signs in with username: <username> and password: <password>

    Given Inventory Manager is on login page
    When Inventory Manager signs in with "<username>" username and "<password>" password
    Then Inventory Manager confirms successful login by printing "<current_username>" username
    Then user navigates to CRM tab
    Then Manager clicks on create button

    Examples:
      | username       | password         | current_username   |
      | imm30@info.com | inventorymanager | InventoryManager30 |
#      | imm31@info.com | inventorymanager | InventoryManager31 |
#      | imm32@info.com | inventorymanager | InventoryManager32 |
#      | imm33@info.com | inventorymanager | InventoryManager33 |
#      | imm34@info.com | inventorymanager | InventoryManager34 |