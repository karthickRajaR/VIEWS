package page;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.testng.annotations.Test;

import seleniumBase.SpecifiedBaseMethod;

public class VPLSites extends SpecifiedBaseMethod {

	public VPLSites enterFrame () {
		 driver.switchTo().frame(driver.findElement(By.className("pageIframe")));
		 return this;
	}
	
	public VPLSites enterSiteId() {
//		 driver.switchTo().frame(driver.findElement(By.className("pageIframe")));
		driver.findElement(By.xpath("//div//label[text()='Site ID']//following::input[1]")).sendKeys("451");
		return this;
	}
	
	public VPLSites clickVPLSearchButton() {
		
		driver.findElement(By.xpath("//button[text()='Search']")).click();
		return this;
	}
	
	public VPLSites exitFrame () {
		 driver.switchTo().defaultContent();
		 return this;
	}
	////button[text()='Search']
	
}
