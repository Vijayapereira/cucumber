$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/BankAndCashFunction.feature");
formatter.feature({
  "line": 2,
  "name": "Techfios bank and cash New Account Functionality",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FeatureFunction"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "User should be able to login with valid credentials",
  "description": "and open a new account",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Scenario"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User enters the \"\u003cusername\u003e\" in \"userName\" field",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User enters the \"\u003cpassword\u003e\" in \"Password\" field",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User click on \"\u003clogin\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User click at\"\u003cbankCash\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User clicks on the \"\u003cnewAccount\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters\"\u003caccountTitle\u003e\"in accounts page in \"AccountTitle\" page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters\"\u003cdescription\u003e\"in accounts page in \"Description\" page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters\"\u003cinitialBalance\u003e\"in accounts page in \"InitialBalance\" page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters\"\u003caccountNumber\u003e\"in accounts page in \"AccountNumber\" page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User enters\"\u003ccontactPerson\u003e\"in accounts page in \"ContactPerson\" page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User enters\"\u003cPhone\u003e\"in accounts page in \"phone\" page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User enters\"\u003cinternetBankingURL\u003e\"in accounts page in \"InternetBankingURL\" page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User clicks on\"\u003csubmit\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accountTitle",
        "description",
        "initialBalance",
        "accountNumber",
        "contactPerson",
        "Phone",
        "internetBankingURL"
      ],
      "line": 27,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "Savings",
        "QA Automation",
        "$50,000",
        "abc12345",
        "Ms XYZ",
        "0123456789",
        "https://www.hdfc.com"
      ],
      "line": 28,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2030352200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "BankAndCashStepDefinition.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "duration": 773634000,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "User should be able to login with valid credentials",
  "description": "and open a new account",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@FeatureFunction"
    },
    {
      "line": 7,
      "name": "@Scenario"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User enters the \"demo@techfios.com\" in \"userName\" field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User enters the \"abc123\" in \"Password\" field",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User click on \"\u003clogin\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User click at\"\u003cbankCash\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User clicks on the \"\u003cnewAccount\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters\"Savings\"in accounts page in \"AccountTitle\" page",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters\"QA Automation\"in accounts page in \"Description\" page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters\"$50,000\"in accounts page in \"InitialBalance\" page",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters\"abc12345\"in accounts page in \"AccountNumber\" page",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User enters\"Ms XYZ\"in accounts page in \"ContactPerson\" page",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User enters\"0123456789\"in accounts page in \"phone\" page",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User enters\"https://www.hdfc.com\"in accounts page in \"InternetBankingURL\" page",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User clicks on\"\u003csubmit\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 17
    },
    {
      "val": "userName",
      "offset": 40
    }
  ],
  "location": "BankAndCashStepDefinition.user_enters_the_in_field(String,String)"
});
formatter.result({
  "duration": 109538300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 17
    },
    {
      "val": "Password",
      "offset": 29
    }
  ],
  "location": "BankAndCashStepDefinition.user_enters_the_in_field(String,String)"
});
formatter.result({
  "duration": 3081445900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003clogin\u003e",
      "offset": 15
    }
  ],
  "location": "BankAndCashStepDefinition.user_click_on(String)"
});
formatter.result({
  "duration": 765118600,
  "status": "passed"
});
formatter.match({
  "location": "BankAndCashStepDefinition.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 3015079500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cbankCash\u003e",
      "offset": 14
    }
  ],
  "location": "BankAndCashStepDefinition.user_click_at(String)"
});
formatter.result({
  "duration": 74928700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cnewAccount\u003e",
      "offset": 20
    }
  ],
  "location": "BankAndCashStepDefinition.user_clicks_on_the(String)"
});
formatter.result({
  "duration": 248719300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Savings",
      "offset": 12
    },
    {
      "val": "AccountTitle",
      "offset": 41
    }
  ],
  "location": "BankAndCashStepDefinition.user_enters_in_accounts_page(String,String)"
});
formatter.result({
  "duration": 5068621900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QA Automation",
      "offset": 12
    },
    {
      "val": "Description",
      "offset": 47
    }
  ],
  "location": "BankAndCashStepDefinition.user_enters_in_accounts_page(String,String)"
});
formatter.result({
  "duration": 5077546400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$50,000",
      "offset": 12
    },
    {
      "val": "InitialBalance",
      "offset": 41
    }
  ],
  "location": "BankAndCashStepDefinition.user_enters_in_accounts_page(String,String)"
});
formatter.result({
  "duration": 5105128500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc12345",
      "offset": 12
    },
    {
      "val": "AccountNumber",
      "offset": 42
    }
  ],
  "location": "BankAndCashStepDefinition.user_enters_in_accounts_page(String,String)"
});
formatter.result({
  "duration": 5097149500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ms XYZ",
      "offset": 12
    },
    {
      "val": "ContactPerson",
      "offset": 40
    }
  ],
  "location": "BankAndCashStepDefinition.user_enters_in_accounts_page(String,String)"
});
formatter.result({
  "duration": 5093974000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0123456789",
      "offset": 12
    },
    {
      "val": "phone",
      "offset": 44
    }
  ],
  "location": "BankAndCashStepDefinition.user_enters_in_accounts_page(String,String)"
});
formatter.result({
  "duration": 5107638700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.hdfc.com",
      "offset": 12
    },
    {
      "val": "InternetBankingURL",
      "offset": 54
    }
  ],
  "location": "BankAndCashStepDefinition.user_enters_in_accounts_page(String,String)"
});
formatter.result({
  "duration": 5073504600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003csubmit\u003e",
      "offset": 15
    }
  ],
  "location": "BankAndCashStepDefinition.user_clicks_on(String)"
});
formatter.result({
  "duration": 5812430500,
  "status": "passed"
});
formatter.match({
  "location": "BankAndCashStepDefinition.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "duration": 47283300,
  "error_message": "junit.framework.ComparisonFailure: Message not found! expected:\u003c×[\r]\nAccount Created Suc...\u003e but was:\u003c×[]\nAccount Created Suc...\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat steps.BankAndCashStepDefinition.user_should_be_able_to_validate_account_created_successfully(BankAndCashStepDefinition.java:131)\r\n\tat ✽.Then User should be able to validate account created successfully(features/BankAndCashFunction.feature:24)\r\n",
  "status": "failed"
});
});