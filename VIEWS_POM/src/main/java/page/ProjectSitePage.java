package page;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import seleniumBase.SpecifiedBaseMethod;

public class ProjectSitePage extends SpecifiedBaseMethod {

	public ProjectSitePage selectProject() {	
		 driver.switchTo().frame(driver.findElement(By.className("pageIframe")));
		WebElement prolist = driver.findElement(By.xpath("//select[@name='projectID']"));
		Select drop = new Select(prolist);
		drop.selectByVisibleText("Telstra");
		return this;
	}
	
public ProjectSitePage enterSiteID()  {

		driver.findElement(By.xpath("//input[@ng-model='search.SiteID']")).sendKeys("DUDE");
		return new ProjectSitePage();	
	}

public ProjectSitePage clickProjectSiteSearch()  {
	
	driver.findElement(By.xpath("//button[text()='Search']")).click();
	return new ProjectSitePage();	
}

}
