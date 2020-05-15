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
formatter.step({
  "name": "user navigates to CRM tab",
  "keyword": "Then "
});
formatter.step({
  "name": "Manager clicks on create button",
  "keyword": "Then "
});
formatter.step({
  "name": "Manager selects customer name",
  "keyword": "And "
});
formatter.step({
  "name": "Manager sets the expected revenue",
  "keyword": "And "
});
formatter.step({
  "name": "Manager sets the priority",
  "keyword": "And "
});
formatter.step({
  "name": "Manager clicks on create new opportunity button",
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
  "location": "com.automation.step_definitions.CRMManagerStepDefinitions.user_is_on_login_page()"
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
formatter.step({
  "name": "user navigates to CRM tab",
  "keyword": "Then "
});
formatter.match({
  "location": "com.automation.step_definitions.CRMManagerStepDefinitions.user_Navigates_To_CRM_Tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager clicks on create button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.automation.step_definitions.CRMManagerStepDefinitions.managerClicksOnCreateButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager selects customer name",
  "keyword": "And "
});
formatter.match({
  "location": "com.automation.step_definitions.CRMManagerStepDefinitions.managerSelectsCustomerName()"
});
formatter.result({
  "error_message": "org.openqa.selenium.support.ui.UnexpectedTagNameException: Element should have been \"select\" but was \"input\"\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Najeebs-iMac.local\u0027, ip: \u0027fe80:0:0:0:1478:7444:3b50:d7d9%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.4\u0027, java.version: \u002714\u0027\nDriver info: driver.version: unknown\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:48)\n\tat com.automation.pages.CRMManagerPage.setCustomerName(CRMManagerPage.java:34)\n\tat com.automation.step_definitions.CRMManagerStepDefinitions.managerSelectsCustomerName(CRMManagerStepDefinitions.java:47)\n\tat ✽.Manager selects customer name(file:///Users/mohammadsohrabi/Desktop/Cybertek/Brite-ERP-CRM/resources/features/Login.feature:20)\n",
  "status": "failed"
});
formatter.step({
  "name": "Manager sets the expected revenue",
  "keyword": "And "
});
formatter.match({
  "location": "com.automation.step_definitions.CRMManagerStepDefinitions.managerSetsTheExpectedRevenue()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Manager sets the priority",
  "keyword": "And "
});
formatter.match({
  "location": "com.automation.step_definitions.CRMManagerStepDefinitions.managerSetsThePriority()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Manager clicks on create new opportunity button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.automation.step_definitions.CRMManagerStepDefinitions.managerClicksOnCreateNewOpportunityButton()"
});
formatter.result({
  "status": "skipped"
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
  "location": "com.automation.step_definitions.CRMManagerStepDefinitions.user_is_on_login_page()"
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
formatter.step({
  "name": "user navigates to CRM tab",
  "keyword": "Then "
});
formatter.match({
  "location": "com.automation.step_definitions.CRMManagerStepDefinitions.user_Navigates_To_CRM_Tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager clicks on create button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.automation.step_definitions.CRMManagerStepDefinitions.managerClicksOnCreateButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manager selects customer name",
  "keyword": "And "
});
formatter.match({
  "location": "com.automation.step_definitions.CRMManagerStepDefinitions.managerSelectsCustomerName()"
});
formatter.result({
  "error_message": "org.openqa.selenium.support.ui.UnexpectedTagNameException: Element should have been \"select\" but was \"input\"\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Najeebs-iMac.local\u0027, ip: \u0027fe80:0:0:0:1478:7444:3b50:d7d9%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.4\u0027, java.version: \u002714\u0027\nDriver info: driver.version: unknown\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:48)\n\tat com.automation.pages.CRMManagerPage.setCustomerName(CRMManagerPage.java:34)\n\tat com.automation.step_definitions.CRMManagerStepDefinitions.managerSelectsCustomerName(CRMManagerStepDefinitions.java:47)\n\tat ✽.Manager selects customer name(file:///Users/mohammadsohrabi/Desktop/Cybertek/Brite-ERP-CRM/resources/features/Login.feature:20)\n",
  "status": "failed"
});
formatter.step({
  "name": "Manager sets the expected revenue",
  "keyword": "And "
});
formatter.match({
  "location": "com.automation.step_definitions.CRMManagerStepDefinitions.managerSetsTheExpectedRevenue()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Manager sets the priority",
  "keyword": "And "
});
formatter.match({
  "location": "com.automation.step_definitions.CRMManagerStepDefinitions.managerSetsThePriority()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Manager clicks on create new opportunity button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.automation.step_definitions.CRMManagerStepDefinitions.managerClicksOnCreateNewOpportunityButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});