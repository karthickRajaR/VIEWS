package page;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import seleniumBase.SpecifiedBaseMethod;

public class HomePage  extends SpecifiedBaseMethod {
	
	
	

	public VPLSites clickVPLSites()  {
		driver.findElement(By.xpath("//a[@mattooltip='VPL Sites']")).click();
		return new VPLSites();	
	}
	
	
public ProjectSitePage clickProjectSites() throws InterruptedException  {
		driver.findElement(By.xpath("//a[@mattooltip='Project Sites']")).click();
		Thread.sleep(3000);
		return new ProjectSitePage();
	}

public WorkOrder clickWorkOrder() throws InterruptedException{
	
	WebElement element = driver.findElement(By.xpath("//app-nav-link[@label='Work Order']/a//div/div"));
	fwait(driver, element);	
	element.click();
	return new WorkOrder();
}
}
