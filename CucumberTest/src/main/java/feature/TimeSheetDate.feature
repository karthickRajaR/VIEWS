Feature: Time Sheet for Date

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
    And Enter the Date as <Date>
    When Enter the Time IN as <inTime>
    Then Click on TimeSheet Save button
    And Close the Pop-up
    And Click on leave Application
    Given Click on Timesheet
    And Click on Edit button
    
    Examples:
    |inTime|Date|
    |9.00|06-Apr-2020|
    
    
    @tag4
     Scenario Outline: Time Out
    Given Click on Timesheet
    And Click on Edit for Date
    Given Enter the Break time as <Break>
    And Enter the Out time as <Timeout>
    Then Enter the Save button

    Examples: 
      | Break | Timeout |
      |  1.00 | 7.00 pm |
    

  #@tag2
  #Scenario Outline: Add the Task
    #When Select the project Name as <ProjectName>
    #And Select the Task type as <TaskType>
    #And Select the Mode of Request as <MOR>
    #And Enter the Task Name as <Task>
    #And Enter the Start Time as <Start>
    #And Enter the End Time as <End>
    #Then Click on Task Save button
#
    #Examples: 
      #| ProjectName | TaskType   | MOR    | Task                    | Start   | End     |
      #| Zion        | QA Testing | TFS No | Analsing Emails PBI 72057  | 9.00 am | 11.30 am |
#
  #@tag3
  #Scenario Outline: Add the Next Task
    #Given Click on Add Task
    #When Select the Next project Name as <ProjectName>
    #And Select the Next Task type as <TaskType>
    #And Select the Next Mode of Request as <MOR>
    #And Enter the Next Task Name as <Task>
    #And Enter the Next Start Time as <Start>
    #And Enter the Next End Time as <End>
    #Then Click on Next Task Save button
#
    #Examples: 
      #| ProjectName | TaskType   | MOR    | Task                                                             | Start    | End      |
      #| Zion        | QA Testing | TFS No |PBI 72057 Test Case prpared and testing has been done in SIT  | 11.30 am | 1.00 pm |
      #| Zion        | QA Testing | TFS No | Test Case prepared for PBI| 2.00 PM  | 4.30 PM |
      #| Zion        | QA Testing | TFS No | Bug ID 71337 has been created in TFS                                                                      | 11.00 am | 11.30 am |
  #Scenario: 
    #Then Close the Broser
