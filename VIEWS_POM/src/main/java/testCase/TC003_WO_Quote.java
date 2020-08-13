package testCase;

import org.testng.annotations.Test;
import java.awt.AWTException;

import org.testng.annotations.Test;

import page.LoginPage;
import seleniumBase.SpecifiedBaseMethod;


public class TC003_WO_Quote extends SpecifiedBaseMethod {
	@Test(enabled=false)
public void workToQuoteScope() throws InterruptedException {
	 
	new LoginPage().enterUserName().enterPassword().clickLogin()
	.clickWorkOrder().enterFrame().selectWOProject().enterWorkID().clickWOSearchButton().editWorkOrder()
	.clickWOQuotes().enterFrame().clickWOQuotesEdit().enterScope().clickSave();
}
@Test(enabled=true)

public void workToQuoteComment() throws InterruptedException, AWTException {

	new LoginPage().enterUserName().enterPassword().clickLogin()
	.clickWorkOrder().enterFrame().selectWOProject().enterWorkID().clickWOSearchButton().editWorkOrder()
	.clickWOQuotes().enterFrame().clickWOQuotesEdit().clickComments().selectCommentType().enterCommenttext().clickAttachIcon().clickSave();
}
	
}