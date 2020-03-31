package testCase;

import org.testng.annotations.Test;

import page.LoginPage;
import seleniumBase.SpecifiedBaseMethod;

public class TC002_SearchProjectSite extends SpecifiedBaseMethod {
	
	@Test

	public void searchSiteId() throws InterruptedException {
		new LoginPage().enterUserName().enterPassword().clickLogin()
		.clickProjectSites().selectProject()
		.enterSiteID().clickProjectSiteSearch();
		
	}
	
}
