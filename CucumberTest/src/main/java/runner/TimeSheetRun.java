package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;


@CucumberOptions(features="src/main/java/feature/TimeSheet.feature", 
                  glue="steps",
                  plugin ={"pretty","html:reports/test-report","json:reports/test-report.json"},
                  monochrome=true,
                  tags= {"@tag,@tag1,@tag2,@tag3,@tag4,@tag5"},
                  //tags={@smoke},
                  dryRun = false)
                   

public class TimeSheetRun extends AbstractTestNGCucumberTests{

}
