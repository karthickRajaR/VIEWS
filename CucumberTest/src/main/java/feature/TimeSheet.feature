Feature: Time Sheet

  @tag
  Scenario: Login Page for timesheet
    Given Open the Browser
    And Enter the Timesheet URL
    When Enter the Timesheet Username
    And Enter the Timesheet Password
    Then Click on Timesheet Login

  @tag1
  Scenario Outline: Add In-Time TimeSheet
    Given Click on Timesheet
    And Click on Add Button
    When Enter the Time IN as <inTime>
    Then Click on TimeSheet Save button
    And Close the Pop-up
    And Click on leave Application
    Given Click on Timesheet
    And Click on Edit button

    Examples: 
      | inTime |
      |   9.00 |

  @tag2
  Scenario Outline: Add the Task
    When Select the project Name as <ProjectName>
    And Select the Task type as <TaskType>
    And Select the Mode of Request as <MOR>
    And Enter the Task Name as <Task>
    And Enter the Start Time as <Start>
    And Enter the End Time as <End>
    Then Click on Task Save button

    Examples: 
      | ProjectName | TaskType   | MOR    | Task                | Start   | End      |
      | Zion        | QA Testing | TFS No | Phone calls and GTM | 9.00 am | 10.00 am |

  @tag3
  Scenario Outline: Add the Next Task
    Given Click on Add Task
    When Select the Next project Name as <ProjectName>
    And Select the Next Task type as <TaskType>
    And Select the Next Mode of Request as <MOR>
    And Enter the Next Task Name as <Task>
    And Enter the Next Start Time as <Start>
    And Enter the Next End Time as <End>
    Then Click on Next Task Save button

    Examples: 
      | ProjectName | TaskType   | MOR    | Task                                         | Start    | End     |
      | Zion        | QA Testing | TFS No | Reviewing TFS bugs in 3.4.3 snd 3.4.4        | 10.00 am | 2.00 pm |
      | Zion        | QA Testing | TFS No | Analysing PBI 65659 and reviewing Test cases | 3.00 pm  | 7.00 pm |

  #| Zion        | QA Testing | TFS No | Analysing and discussed with dev team for PBI 71693, 72366, 72351,               | 1.45 pm  | 7.00 pm  |
  @tag4
  Scenario Outline: Time Out
    Given Enter the Break time as <Break>
    And Enter the Out time as <Timeout>
    Then Enter the Save button

    Examples: 
      | Break | Timeout |
      |  1.00 | 7.00 pm |

  @tag5
  Scenario: 
    Then Close the Broser
