package page;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.Actions;

import seleniumBase.SpecifiedBaseMethod;

public class HomePage  extends SpecifiedBaseMethod {
	
	
	

	public VPLSites clickVPLSites()  {
		driver.findElement(By.xpath("//a[@mattooltip='VPL Sites']")).click();
		return new VPLSites();	
	}
	
	
public ProjectSitePage clickProjectSites() throws InterruptedException  {
	
		WebElement prosite = driver.findElement(By.xpath("//span[text()='Project Site']"));
		Actions act = new Actions(driver);
		act.doubleClick(prosite).perform();
		
		Thread.sleep(3000);
		return new ProjectSitePage();
	}

public WorkOrder clickWorkOrder() throws InterruptedException{
	
	WebElement element = driver.findElement(By.xpath("//div[@class='nav-body-item is-active']"));
	fwait(driver, element);	
	Actions act = new Actions(driver);
	act.doubleClick(element).perform();;
	return new WorkOrder();
}
}
