package testCase;

import org.testng.annotations.Test;
import org.testng.annotations.Test;

import page.LoginPage;
import seleniumBase.SpecifiedBaseMethod;

public class TC_005_DataProvid_Login  extends SpecifiedBaseMethod {
	
	@Test

	public void searchSiteId() throws InterruptedException {
		new LoginPage().enterUserName().enterPassword().clickLogin();
		}
}


