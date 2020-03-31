package testCase;

import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

import page.LoginPage;
import seleniumBase.SpecifiedBaseMethod;

public class TC001_SearchVPLSites extends SpecifiedBaseMethod {

	@Parameters({ "UserName", "PassWord" })
	@Test

	public void searchSiteID() {

		new LoginPage().enterUserName().enterPassword().clickLogin();
		// .enterPassword().clickLogin()
		// .clickVPLSites().enterFrame().enterSiteId()
		// .clickVPLSearchButton().exitFrame();

	}

}
