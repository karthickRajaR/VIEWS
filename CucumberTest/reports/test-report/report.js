$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/feature/TimeSheet.feature");
formatter.feature({
  "line": 1,
  "name": "Time Sheet",
  "description": "",
  "id": "time-sheet",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Login Page for timesheet",
  "description": "",
  "id": "time-sheet;login-page-for-timesheet",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open the Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter the Timesheet URL",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Enter the Timesheet Username",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Enter the Timesheet Password",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on Timesheet Login",
  "keyword": "Then "
});
formatter.match({
  "location": "TimeSheetSteps.open_the_Browser()"
});
formatter.result({
  "duration": 16911650651,
  "status": "passed"
});
formatter.match({
  "location": "TimeSheetSteps.enter_the_Timesheet_URL()"
});
formatter.result({
  "duration": 2610762637,
  "status": "passed"
});
formatter.match({
  "location": "TimeSheetSteps.enter_the_Timesheet_Username()"
});
formatter.result({
  "duration": 477085789,
  "status": "passed"
});
formatter.match({
  "location": "TimeSheetSteps.enter_the_Timesheet_Password()"
});
formatter.result({
  "duration": 216958662,
  "status": "passed"
});
formatter.match({
  "location": "TimeSheetSteps.click_on_Timesheet_Login()"
});
formatter.result({
  "duration": 681597803,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Add In-Time TimeSheet",
  "description": "",
  "id": "time-sheet;add-in-time-timesheet",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "Click on Timesheet",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Click on Add Button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Enter the Time IN as \u003cinTime\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Click on TimeSheet Save button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Close the Pop-up",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click on leave Application",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Click on Timesheet",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "Click on Edit button",
  "keyword": "And "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "time-sheet;add-in-time-timesheet;",
  "rows": [
    {
      "cells": [
        "inTime"
      ],
      "line": 23,
      "id": "time-sheet;add-in-time-timesheet;;1"
    },
    {
      "cells": [
        "9.00"
      ],
      "line": 24,
      "id": "time-sheet;add-in-time-timesheet;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "Add In-Time TimeSheet",
  "description": "",
  "id": "time-sheet;add-in-time-timesheet;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "Click on Timesheet",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Click on Add Button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Enter the Time IN as 9.00",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Click on TimeSheet Save button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Close the Pop-up",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click on leave Application",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Click on Timesheet",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "Click on Edit button",
  "keyword": "And "
});
formatter.match({
  "location": "TimeSheetSteps.click_on_Timesheet()"
});
formatter.result({
  "duration": 4862687528,
  "status": "passed"
});
formatter.match({
  "location": "TimeSheetSteps.click_on_Add_Button()"
});
formatter.result({
  "duration": 2374773406,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9.00",
      "offset": 21
    }
  ],
  "location": "TimeSheetSteps.enter_the_Time_IN(String)"
});
formatter.result({
  "duration": 597529171,
  "status": "passed"
});
formatter.match({
  "location": "TimeSheetSteps.click_on_TimeSheet_Save_button()"
});
formatter.result({
  "duration": 3167065951,
  "status": "passed"
});
formatter.match({
  "location": "TimeSheetSteps.close_the_Pop_up()"
});
formatter.result({
  "duration": 1345152226,
  "status": "passed"
});
formatter.match({
  "location": "TimeSheetSteps.click_on_leave_Application()"
});
formatter.result({
  "duration": 3133876868,
  "status": "passed"
});
formatter.match({
  "location": "TimeSheetSteps.click_on_Timesheet()"
});
formatter.result({
  "duration": 1452570542,
  "status": "passed"
});
formatter.match({
  "location": "TimeSheetSteps.click_on_Edit_button()"
});
formatter.result({
  "duration": 904630037,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 27,
  "name": "Add the Task",
  "description": "",
  "id": "time-sheet;add-the-task",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "Select the project Name as \u003cProjectName\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "Select the Task type as \u003cTaskType\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Select the Mode of Request as \u003cMOR\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Enter the Task Name as \u003cTask\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Enter the Start Time as \u003cStart\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Enter the End Time as \u003cEnd\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Click on Task Save button",
  "keyword": "Then "
});
formatter.examples({
  "line": 36,
  "name": "",
  "description": "",
  "id": "time-sheet;add-the-task;",
  "rows": [
    {
      "cells": [
        "ProjectName",
        "TaskType",
        "MOR",
        "Task",
        "Start",
        "End"
      ],
      "line": 37,
      "id": "time-sheet;add-the-task;;1"
    },
    {
      "cells": [
        "Zion",
        "QA Testing",
        "TFS No",
        "Phone calls and GTM",
        "9.00 am",
        "11.00 aM"
      ],
      "line": 38,
      "id": "time-sheet;add-the-task;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 38,
  "name": "Add the Task",
  "description": "",
  "id": "time-sheet;add-the-task;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "Select the project Name as Zion",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "Select the Task type as QA Testing",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Select the Mode of Request as TFS No",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Enter the Task Name as Phone calls and GTM",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Enter the Start Time as 9.00 am",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Enter the End Time as 11.00 aM",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Click on Task Save button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Zion",
      "offset": 27
    }
  ],
  "location": "TimeSheetSteps.select_the_project_Name(String)"
});
formatter.result({
  "duration": 30108101806,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//td[@class\u003d\u0027taL\u0027]//select)[3]\"}\n  (Session info: chrome\u003d84.0.4147.105)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027CIS20\u0027, ip: \u002710.77.27.91\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.105, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\karamach\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:4541}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 70468cbda81fe2f8fed32c660e951fa6\n*** Element info: {Using\u003dxpath, value\u003d(//td[@class\u003d\u0027taL\u0027]//select)[3]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat steps.TimeSheetSteps.select_the_project_Name(TimeSheetSteps.java:120)\r\n\tat ✽.When Select the project Name as Zion(src/main/java/feature/TimeSheet.feature:28)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "QA Testing",
      "offset": 24
    }
  ],
  "location": "TimeSheetSteps.select_the_Task_type(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "TFS No",
      "offset": 30
    }
  ],
  "location": "TimeSheetSteps.select_the_Mode_of_Request(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Phone calls and GTM",
      "offset": 23
    }
  ],
  "location": "TimeSheetSteps.enter_the_Task_Name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "9.00 am",
      "offset": 24
    }
  ],
  "location": "TimeSheetSteps.enter_the_Start_Time(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "11.00 aM",
      "offset": 22
    }
  ],
  "location": "TimeSheetSteps.enter_the_End_Time(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TimeSheetSteps.click_on_Task_Save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 41,
  "name": "Add the Next Task",
  "description": "",
  "id": "time-sheet;add-the-next-task",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 40,
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "Click on Add Task",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "Select the Next project Name as \u003cProjectName\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "Select the Next Task type as \u003cTaskType\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Select the Next Mode of Request as \u003cMOR\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Enter the Next Task Name as \u003cTask\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Enter the Next Start Time as \u003cStart\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Enter the Next End Time as \u003cEnd\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Click on Next Task Save button",
  "keyword": "Then "
});
formatter.examples({
  "line": 51,
  "name": "",
  "description": "",
  "id": "time-sheet;add-the-next-task;",
  "rows": [
    {
      "cells": [
        "ProjectName",
        "TaskType",
        "MOR",
        "Task",
        "Start",
        "End"
      ],
      "line": 52,
      "id": "time-sheet;add-the-next-task;;1"
    },
    {
      "cells": [
        "Zion",
        "QA Testing",
        "TFS No",
        "Internal - Testing done for v3.6 for SIT and UAT",
        "11.00 am",
        "1.00 pm"
      ],
      "line": 53,
      "id": "time-sheet;add-the-next-task;;2"
    },
    {
      "cells": [
        "Zion",
        "QA Testing",
        "TFS No",
        "Mobile testing and high level regression in UAT",
        "2.30 pm",
        "7.00 pm"
      ],
      "line": 54,
      "id": "time-sheet;add-the-next-task;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 53,
  "name": "Add the Next Task",
  "description": "",
  "id": "time-sheet;add-the-next-task;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 40,
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "Click on Add Task",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "Select the Next project Name as Zion",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "Select the Next Task type as QA Testing",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Select the Next Mode of Request as TFS No",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Enter the Next Task Name as Internal - Testing done for v3.6 for SIT and UAT",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Enter the Next Start Time as 11.00 am",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Enter the Next End Time as 1.00 pm",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Click on Next Task Save button",
  "keyword": "Then "
});
formatter.match({
  "location": "TimeSheetSteps.click_on_Add_Task()"
});
formatter.result({
  "duration": 31498813666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Zion",
      "offset": 32
    }
  ],
  "location": "TimeSheetSteps.select_the_Next_project_Name_as_ProjectName(String)"
});
formatter.result({
  "duration": 2138042040,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QA Testing",
      "offset": 29
    }
  ],
  "location": "TimeSheetSteps.select_the_Next_Task_type_as_TaskType(String)"
});
formatter.result({
  "duration": 152142959,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TFS No",
      "offset": 35
    }
  ],
  "location": "TimeSheetSteps.select_the_Next_Mode_of_Request_as_MOR(String)"
});
formatter.result({
  "duration": 189522698,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Internal - Testing done for v3.6 for SIT and UAT",
      "offset": 28
    }
  ],
  "location": "TimeSheetSteps.enter_the_Next_Task_Name_as_Task(String)"
});
formatter.result({
  "duration": 1215439135,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11.00 am",
      "offset": 29
    }
  ],
  "location": "TimeSheetSteps.enter_the_Next_Start_Time_as_Start(String)"
});
formatter.result({
  "duration": 30065811617,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//input[@class\u003d\u0027watermarked\u0027])[3]\"}\n  (Session info: chrome\u003d84.0.4147.105)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027CIS20\u0027, ip: \u002710.77.27.91\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.105, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\karamach\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:4541}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 70468cbda81fe2f8fed32c660e951fa6\n*** Element info: {Using\u003dxpath, value\u003d(//input[@class\u003d\u0027watermarked\u0027])[3]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat steps.TimeSheetSteps.enter_the_Next_Start_Time_as_Start(TimeSheetSteps.java:228)\r\n\tat ✽.And Enter the Next Start Time as 11.00 am(src/main/java/feature/TimeSheet.feature:47)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "1.00 pm",
      "offset": 27
    }
  ],
  "location": "TimeSheetSteps.enter_the_Next_End_Time_as_End(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TimeSheetSteps.click_on_Next_Task_Save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 54,
  "name": "Add the Next Task",
  "description": "",
  "id": "time-sheet;add-the-next-task;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 40,
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "Click on Add Task",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "Select the Next project Name as Zion",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "Select the Next Task type as QA Testing",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Select the Next Mode of Request as TFS No",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Enter the Next Task Name as Mobile testing and high level regression in UAT",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Enter the Next Start Time as 2.30 pm",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Enter the Next End Time as 7.00 pm",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Click on Next Task Save button",
  "keyword": "Then "
});
formatter.match({
  "location": "TimeSheetSteps.click_on_Add_Task()"
});
formatter.result({
  "duration": 32896907083,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Zion",
      "offset": 32
    }
  ],
  "location": "TimeSheetSteps.select_the_Next_project_Name_as_ProjectName(String)"
});
formatter.result({
  "duration": 808141636,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QA Testing",
      "offset": 29
    }
  ],
  "location": "TimeSheetSteps.select_the_Next_Task_type_as_TaskType(String)"
});
formatter.result({
  "duration": 208225134,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TFS No",
      "offset": 35
    }
  ],
  "location": "TimeSheetSteps.select_the_Next_Mode_of_Request_as_MOR(String)"
});
formatter.result({
  "duration": 281649398,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mobile testing and high level regression in UAT",
      "offset": 28
    }
  ],
  "location": "TimeSheetSteps.enter_the_Next_Task_Name_as_Task(String)"
});
formatter.result({
  "duration": 781379736,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.30 pm",
      "offset": 29
    }
  ],
  "location": "TimeSheetSteps.enter_the_Next_Start_Time_as_Start(String)"
});
formatter.result({
  "duration": 41066130672,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//input[@class\u003d\u0027watermarked\u0027])[3]\"}\n  (Session info: chrome\u003d84.0.4147.105)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027CIS20\u0027, ip: \u002710.77.27.91\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.105, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\karamach\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:4541}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 70468cbda81fe2f8fed32c660e951fa6\n*** Element info: {Using\u003dxpath, value\u003d(//input[@class\u003d\u0027watermarked\u0027])[3]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat steps.TimeSheetSteps.enter_the_Next_Start_Time_as_Start(TimeSheetSteps.java:228)\r\n\tat ✽.And Enter the Next Start Time as 2.30 pm(src/main/java/feature/TimeSheet.feature:47)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "7.00 pm",
      "offset": 27
    }
  ],
  "location": "TimeSheetSteps.enter_the_Next_End_Time_as_End(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TimeSheetSteps.click_on_Next_Task_Save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 55,
      "value": "# | Zion        | QA Testing | TFS No | Testing done in data PBI 65659                                                                                                             | 5.30 pm  | 7.30 pm  |"
    },
    {
      "line": 57,
      "value": "#| Zion        | QA Testing | TFS No | Data Management  - PBI 72538  -Test case prepared and Testing has been done in SIT and Prod  for Test Suite : Data Management_PVT_20200507 | 6.00 pm  | 8.00 pm  |"
    }
  ],
  "line": 59,
  "name": "Time Out",
  "description": "",
  "id": "time-sheet;time-out",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 58,
      "name": "@tag4"
    }
  ]
});
formatter.step({
  "line": 60,
  "name": "Enter the Break time as \u003cBreak\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "Enter the Out time as \u003cTimeout\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "Enter the Save button",
  "keyword": "Then "
});
formatter.examples({
  "line": 64,
  "name": "",
  "description": "",
  "id": "time-sheet;time-out;",
  "rows": [
    {
      "cells": [
        "Break",
        "Timeout"
      ],
      "line": 65,
      "id": "time-sheet;time-out;;1"
    },
    {
      "cells": [
        "1.00",
        "8.00 pm"
      ],
      "line": 66,
      "id": "time-sheet;time-out;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 66,
  "name": "Time Out",
  "description": "",
  "id": "time-sheet;time-out;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 58,
      "name": "@tag4"
    }
  ]
});
formatter.step({
  "line": 60,
  "name": "Enter the Break time as 1.00",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "Enter the Out time as 8.00 pm",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "Enter the Save button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1.00",
      "offset": 24
    }
  ],
  "location": "TimeSheetSteps.enter_the_Break_time_as(String)"
});
formatter.result({
  "duration": 32024603564,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8.00 pm",
      "offset": 22
    }
  ],
  "location": "TimeSheetSteps.enter_the_Out_time_as(String)"
});
formatter.result({
  "duration": 31060152749,
  "status": "passed"
});
formatter.match({
  "location": "TimeSheetSteps.enter_the_Save_button()"
});
formatter.result({
  "duration": 147620682,
  "status": "passed"
});
formatter.scenario({
  "line": 69,
  "name": "",
  "description": "",
  "id": "time-sheet;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 68,
      "name": "@tag5"
    }
  ]
});
formatter.step({
  "line": 70,
  "name": "Close the Broser",
  "keyword": "Then "
});
formatter.match({
  "location": "TimeSheetSteps.close_the_Broser()"
});
formatter.result({
  "duration": 2452404033,
  "status": "passed"
});
});