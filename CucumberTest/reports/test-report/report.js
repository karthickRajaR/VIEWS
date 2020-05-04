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
  "duration": 17523189632,
  "status": "passed"
});
formatter.match({
  "location": "TimeSheetSteps.enter_the_Timesheet_URL()"
});
formatter.result({
  "duration": 1678139160,
  "status": "passed"
});
formatter.match({
  "location": "TimeSheetSteps.enter_the_Timesheet_Username()"
});
formatter.result({
  "duration": 638324967,
  "status": "passed"
});
formatter.match({
  "location": "TimeSheetSteps.enter_the_Timesheet_Password()"
});
formatter.result({
  "duration": 298672080,
  "status": "passed"
});
formatter.match({
  "location": "TimeSheetSteps.click_on_Timesheet_Login()"
});
formatter.result({
  "duration": 186814219,
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
  "duration": 3970029745,
  "status": "passed"
});
formatter.match({
  "location": "TimeSheetSteps.click_on_Add_Button()"
});
formatter.result({
  "duration": 872134219,
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
  "duration": 703030013,
  "status": "passed"
});
formatter.match({
  "location": "TimeSheetSteps.click_on_TimeSheet_Save_button()"
});
formatter.result({
  "duration": 3237502823,
  "status": "passed"
});
formatter.match({
  "location": "TimeSheetSteps.close_the_Pop_up()"
});
formatter.result({
  "duration": 546009767,
  "status": "passed"
});
formatter.match({
  "location": "TimeSheetSteps.click_on_leave_Application()"
});
formatter.result({
  "duration": 3945582218,
  "status": "passed"
});
formatter.match({
  "location": "TimeSheetSteps.click_on_Timesheet()"
});
formatter.result({
  "duration": 1111126897,
  "status": "passed"
});
formatter.match({
  "location": "TimeSheetSteps.click_on_Edit_button()"
});
formatter.result({
  "duration": 803854985,
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
        "10.00 am"
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
  "name": "Enter the End Time as 10.00 am",
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
  "duration": 717204238,
  "status": "passed"
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
  "duration": 208822403,
  "status": "passed"
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
  "duration": 164057266,
  "status": "passed"
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
  "duration": 472831253,
  "status": "passed"
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
  "duration": 1231663831,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10.00 am",
      "offset": 22
    }
  ],
  "location": "TimeSheetSteps.enter_the_End_Time(String)"
});
formatter.result({
  "duration": 2470916572,
  "status": "passed"
});
formatter.match({
  "location": "TimeSheetSteps.click_on_Task_Save_button()"
});
formatter.result({
  "duration": 180852701,
  "status": "passed"
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
        "Reviewing TFS bugs in 3.4.3 snd 3.4.4",
        "10.00 am",
        "2.00 pm"
      ],
      "line": 53,
      "id": "time-sheet;add-the-next-task;;2"
    },
    {
      "cells": [
        "Zion",
        "QA Testing",
        "TFS No",
        "Analysing PBI 65659 and reviewing Test cases",
        "3.00 pm",
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
  "name": "Enter the Next Task Name as Reviewing TFS bugs in 3.4.3 snd 3.4.4",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Enter the Next Start Time as 10.00 am",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Enter the Next End Time as 2.00 pm",
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
  "duration": 32309046266,
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
  "duration": 721916413,
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
  "duration": 448144958,
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
  "duration": 30125565372,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Reviewing TFS bugs in 3.4.3 snd 3.4.4",
      "offset": 28
    }
  ],
  "location": "TimeSheetSteps.enter_the_Next_Task_Name_as_Task(String)"
});
formatter.result({
  "duration": 738469589,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10.00 am",
      "offset": 29
    }
  ],
  "location": "TimeSheetSteps.enter_the_Next_Start_Time_as_Start(String)"
});
formatter.result({
  "duration": 1269601394,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.00 pm",
      "offset": 27
    }
  ],
  "location": "TimeSheetSteps.enter_the_Next_End_Time_as_End(String)"
});
formatter.result({
  "duration": 2295126866,
  "status": "passed"
});
formatter.match({
  "location": "TimeSheetSteps.click_on_Next_Task_Save_button()"
});
formatter.result({
  "duration": 143173805,
  "status": "passed"
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
  "name": "Enter the Next Task Name as Analysing PBI 65659 and reviewing Test cases",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Enter the Next Start Time as 3.00 pm",
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
  "duration": 31996992363,
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
  "duration": 836278544,
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
  "duration": 155763224,
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
  "duration": 30015289871,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Analysing PBI 65659 and reviewing Test cases",
      "offset": 28
    }
  ],
  "location": "TimeSheetSteps.enter_the_Next_Task_Name_as_Task(String)"
});
formatter.result({
  "duration": 648534039,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3.00 pm",
      "offset": 29
    }
  ],
  "location": "TimeSheetSteps.enter_the_Next_Start_Time_as_Start(String)"
});
formatter.result({
  "duration": 1213129650,
  "status": "passed"
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
  "duration": 2223959030,
  "status": "passed"
});
formatter.match({
  "location": "TimeSheetSteps.click_on_Next_Task_Save_button()"
});
formatter.result({
  "duration": 200352078,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 56,
      "value": "#| Zion        | QA Testing | TFS No | Analysing and discussed with dev team for PBI 71693, 72366, 72351,               | 1.45 pm  | 7.00 pm  |"
    }
  ],
  "line": 58,
  "name": "Time Out",
  "description": "",
  "id": "time-sheet;time-out",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 57,
      "name": "@tag4"
    }
  ]
});
formatter.step({
  "line": 59,
  "name": "Enter the Break time as \u003cBreak\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "Enter the Out time as \u003cTimeout\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "Enter the Save button",
  "keyword": "Then "
});
formatter.examples({
  "line": 63,
  "name": "",
  "description": "",
  "id": "time-sheet;time-out;",
  "rows": [
    {
      "cells": [
        "Break",
        "Timeout"
      ],
      "line": 64,
      "id": "time-sheet;time-out;;1"
    },
    {
      "cells": [
        "1.00",
        "7.00 pm"
      ],
      "line": 65,
      "id": "time-sheet;time-out;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 65,
  "name": "Time Out",
  "description": "",
  "id": "time-sheet;time-out;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 57,
      "name": "@tag4"
    }
  ]
});
formatter.step({
  "line": 59,
  "name": "Enter the Break time as 1.00",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "Enter the Out time as 7.00 pm",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 61,
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
  "duration": 31792270902,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7.00 pm",
      "offset": 22
    }
  ],
  "location": "TimeSheetSteps.enter_the_Out_time_as(String)"
});
formatter.result({
  "duration": 30683795585,
  "status": "passed"
});
formatter.match({
  "location": "TimeSheetSteps.enter_the_Save_button()"
});
formatter.result({
  "duration": 140466722,
  "status": "passed"
});
formatter.scenario({
  "line": 68,
  "name": "",
  "description": "",
  "id": "time-sheet;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 67,
      "name": "@tag5"
    }
  ]
});
formatter.step({
  "line": 69,
  "name": "Close the Broser",
  "keyword": "Then "
});
formatter.match({
  "location": "TimeSheetSteps.close_the_Broser()"
});
formatter.result({
  "duration": 2275514040,
  "status": "passed"
});
});