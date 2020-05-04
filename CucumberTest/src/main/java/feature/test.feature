Feature: Login Page

    #Given Click on Add Task
  
  Scenario: Login Page for timesheet
    #Given Click on Add Task
    
     #Then Close the Broser
     When Enter the Time IN as <inTime>
      And Enter the Date as <Date>
      
        Scenario Outline: Time Out
  Given Enter the Break time as <Break>
  And Enter the Out time as <Time Out>
  Then Enter the Save button
  
   Examples: 
      | Break | Time Out |
      |||
  
  
    #And Click on leave Application
     #When Select the Next project Name as <ProjectName>
    #And Select the Next Task type as <TaskType>
    #And Select the Next Mode of Request as <MOR>
    #And Enter the Next Task Name as <Task>
    #And Enter the Next Start Time as <Start>
    #And Enter the Next End Time as <End>
    #Then Click on Next Task Save button
    #And Enter the Timesheet URL
    #When Enter the Timesheet Username
    #And Enter the Timesheet Password
    #Then Click on Timesheet Login
#
  #@tag1
  #Scenario: Add In-Time TimeSheet
  #Given Click on Timesheet
  #And Click on Add Button
  #When Enter the Time IN
  #Then Click on TimeSheet Save button
  #And Close the Pop-up
  #Given Click on Edit button
  #Then Click on Task Save button
   #
   #
     #Scenario Outline: Enter Project Site
    #
      #
   #Given Select the project <project>
   #When Select the project Name as <ProjectName>
  #And Select the Task type as <TaskType>
  #And Select the Mode of Request as <MOR>
  #And Enter the Task Name as <Task>
  #And Enter the Start Time as <Start>
  #And Enter the End Time as <End>
      #
    #
     #Examples:
     #|value|
     #|3|
     #|4|
     #
     #Scenario: Close the browser
     #
     #Given Close the Browser

   