package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features="src/main/java/feature/TimeSheetDate.feature",
			glue="steps",
			monochrome=true,
					 tags= {"@tag,@tag4"},
			dryRun = false)
	public class TimeSheetDate extends AbstractTestNGCucumberTests {
}
