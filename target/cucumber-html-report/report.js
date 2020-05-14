$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:resources/features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@driver"
    }
  ]
});
formatter.scenarioOutline({
  "name": "user signs in with username: \u003cusername\u003e and password: \u003cpassword\u003e",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user signs in with \"\u003cusername\u003e\" username and \"\u003cpassword\u003e\" password",
  "keyword": "When "
});
formatter.step({
  "name": "user confirms successful login by getting \"\u003ccurrent_username\u003e\" username",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "current_username"
      ]
    },
    {
      "cells": [
        "imm30@info.com",
        "inventorymanager",
        "InventoryManager30"
      ]
    },
    {
      "cells": [
        "imm31@info.com",
        "inventorymanager",
        "InventoryManager31"
      ]
    },
    {
      "cells": [
        "imm32@info.com",
        "inventorymanager",
        "InventoryManager32"
      ]
    },
    {
      "cells": [
        "imm33@info.com",
        "inventorymanager",
        "InventoryManager33"
      ]
    },
    {
      "cells": [
        "imm34@info.com",
        "inventorymanager",
        "InventoryManager34"
      ]
    },
    {
      "cells": [
        "posmanager60@info.com",
        "posmanager",
        "POSManager60"
      ]
    },
    {
      "cells": [
        "posmanager61@info.com",
        "posmanager",
        "POSManager61"
      ]
    },
    {
      "cells": [
        "posmanager62@info.com",
        "posmanager",
        "POSManager62"
      ]
    },
    {
      "cells": [
        "posmanager63@info.com",
        "posmanager",
        "POSManager63"
      ]
    },
    {
      "cells": [
        "posmanager64@info.com",
        "posmanager",
        "POSManager64"
      ]
    },
    {
      "cells": [
        "eventscrmmanager38@info.com",
        "eventscrmmanager",
        "EventsCRMManager38"
      ]
    },
    {
      "cells": [
        "eventscrmmanager39@info.com",
        "eventscrmmanager",
        "EventsCRMManager39"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user signs in with username: imm30@info.com and password: inventorymanager",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@driver"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.automation.step_definitions.LoginStepDefinitions.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user signs in with \"imm30@info.com\" username and \"inventorymanager\" password",
  "keyword": "When "
});
formatter.match({
  "location": "com.automation.step_definitions.LoginStepDefinitions.user_signs_in_with_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user confirms successful login by getting \"InventoryManager30\" username",
  "keyword": "Then "
});
formatter.match({
  "location": "com.automation.step_definitions.LoginStepDefinitions.user_Confirms_Successful_Login_By_Getting_Current_CRM_Username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user signs in with username: imm31@info.com and password: inventorymanager",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@driver"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.automation.step_definitions.LoginStepDefinitions.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user signs in with \"imm31@info.com\" username and \"inventorymanager\" password",
  "keyword": "When "
});
formatter.match({
  "location": "com.automation.step_definitions.LoginStepDefinitions.user_signs_in_with_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user confirms successful login by getting \"InventoryManager31\" username",
  "keyword": "Then "
});
formatter.match({
  "location": "com.automation.step_definitions.LoginStepDefinitions.user_Confirms_Successful_Login_By_Getting_Current_CRM_Username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user signs in with username: imm32@info.com and password: inventorymanager",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@driver"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.automation.step_definitions.LoginStepDefinitions.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user signs in with \"imm32@info.com\" username and \"inventorymanager\" password",
  "keyword": "When "
});
formatter.match({
  "location": "com.automation.step_definitions.LoginStepDefinitions.user_signs_in_with_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user confirms successful login by getting \"InventoryManager32\" username",
  "keyword": "Then "
});
formatter.match({
  "location": "com.automation.step_definitions.LoginStepDefinitions.user_Confirms_Successful_Login_By_Getting_Current_CRM_Username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user signs in with username: imm33@info.com and password: inventorymanager",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@driver"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.automation.step_definitions.LoginStepDefinitions.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user signs in with \"imm33@info.com\" username and \"inventorymanager\" password",
  "keyword": "When "
});
formatter.match({
  "location": "com.automation.step_definitions.LoginStepDefinitions.user_signs_in_with_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user confirms successful login by getting \"InventoryManager33\" username",
  "keyword": "Then "
});
formatter.match({
  "location": "com.automation.step_definitions.LoginStepDefinitions.user_Confirms_Successful_Login_By_Getting_Current_CRM_Username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user signs in with username: imm34@info.com and password: inventorymanager",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@driver"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.automation.step_definitions.LoginStepDefinitions.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user signs in with \"imm34@info.com\" username and \"inventorymanager\" password",
  "keyword": "When "
});
formatter.match({
  "location": "com.automation.step_definitions.LoginStepDefinitions.user_signs_in_with_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user confirms successful login by getting \"InventoryManager34\" username",
  "keyword": "Then "
});
formatter.match({
  "location": "com.automation.step_definitions.LoginStepDefinitions.user_Confirms_Successful_Login_By_Getting_Current_CRM_Username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user signs in with username: posmanager60@info.com and password: posmanager",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@driver"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.automation.step_definitions.LoginStepDefinitions.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user signs in with \"posmanager60@info.com\" username and \"posmanager\" password",
  "keyword": "When "
});
formatter.match({
  "location": "com.automation.step_definitions.LoginStepDefinitions.user_signs_in_with_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user confirms successful login by getting \"POSManager60\" username",
  "keyword": "Then "
});
formatter.match({
  "location": "com.automation.step_definitions.LoginStepDefinitions.user_Confirms_Successful_Login_By_Getting_Current_CRM_Username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user signs in with username: posmanager61@info.com and password: posmanager",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@driver"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.automation.step_definitions.LoginStepDefinitions.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user signs in with \"posmanager61@info.com\" username and \"posmanager\" password",
  "keyword": "When "
});
formatter.match({
  "location": "com.automation.step_definitions.LoginStepDefinitions.user_signs_in_with_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user confirms successful login by getting \"POSManager61\" username",
  "keyword": "Then "
});
formatter.match({
  "location": "com.automation.step_definitions.LoginStepDefinitions.user_Confirms_Successful_Login_By_Getting_Current_CRM_Username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user signs in with username: posmanager62@info.com and password: posmanager",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@driver"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.automation.step_definitions.LoginStepDefinitions.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user signs in with \"posmanager62@info.com\" username and \"posmanager\" password",
  "keyword": "When "
});
formatter.match({
  "location": "com.automation.step_definitions.LoginStepDefinitions.user_signs_in_with_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user confirms successful login by getting \"POSManager62\" username",
  "keyword": "Then "
});
formatter.match({
  "location": "com.automation.step_definitions.LoginStepDefinitions.user_Confirms_Successful_Login_By_Getting_Current_CRM_Username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user signs in with username: posmanager63@info.com and password: posmanager",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@driver"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.automation.step_definitions.LoginStepDefinitions.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user signs in with \"posmanager63@info.com\" username and \"posmanager\" password",
  "keyword": "When "
});
formatter.match({
  "location": "com.automation.step_definitions.LoginStepDefinitions.user_signs_in_with_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user confirms successful login by getting \"POSManager63\" username",
  "keyword": "Then "
});
formatter.match({
  "location": "com.automation.step_definitions.LoginStepDefinitions.user_Confirms_Successful_Login_By_Getting_Current_CRM_Username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user signs in with username: posmanager64@info.com and password: posmanager",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@driver"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.automation.step_definitions.LoginStepDefinitions.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user signs in with \"posmanager64@info.com\" username and \"posmanager\" password",
  "keyword": "When "
});
formatter.match({
  "location": "com.automation.step_definitions.LoginStepDefinitions.user_signs_in_with_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user confirms successful login by getting \"POSManager64\" username",
  "keyword": "Then "
});
formatter.match({
  "location": "com.automation.step_definitions.LoginStepDefinitions.user_Confirms_Successful_Login_By_Getting_Current_CRM_Username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user signs in with username: eventscrmmanager38@info.com and password: eventscrmmanager",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@driver"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.automation.step_definitions.LoginStepDefinitions.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user signs in with \"eventscrmmanager38@info.com\" username and \"eventscrmmanager\" password",
  "keyword": "When "
});
formatter.match({
  "location": "com.automation.step_definitions.LoginStepDefinitions.user_signs_in_with_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user confirms successful login by getting \"EventsCRMManager38\" username",
  "keyword": "Then "
});
formatter.match({
  "location": "com.automation.step_definitions.LoginStepDefinitions.user_Confirms_Successful_Login_By_Getting_Current_CRM_Username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "user signs in with username: eventscrmmanager39@info.com and password: eventscrmmanager",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@driver"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.automation.step_definitions.LoginStepDefinitions.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user signs in with \"eventscrmmanager39@info.com\" username and \"eventscrmmanager\" password",
  "keyword": "When "
});
formatter.match({
  "location": "com.automation.step_definitions.LoginStepDefinitions.user_signs_in_with_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user confirms successful login by getting \"EventsCRMManager39\" username",
  "keyword": "Then "
});
formatter.match({
  "location": "com.automation.step_definitions.LoginStepDefinitions.user_Confirms_Successful_Login_By_Getting_Current_CRM_Username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});