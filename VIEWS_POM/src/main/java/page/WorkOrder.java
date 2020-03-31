package page;

import java.time.Duration;
import java.util.Iterator;
import java.util.Set;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Select;

import seleniumBase.SpecifiedBaseMethod;
import utils.Constant;

public class WorkOrder extends SpecifiedBaseMethod{
	
	
	public WorkOrder enterFrame() {
		
		WebElement iframe = driver.findElement(By.className("pageIframe"));
		driver.switchTo().frame(iframe);
		return this;
	}
	
public WorkOrder ExitFrame() {
		driver.switchTo().defaultContent();
		return this;
	}

	public void Fwait(WebDriver driver, WebElement element) {
		FluentWait<WebDriver> wait = new FluentWait<WebDriver>(driver).withTimeout(Duration.ofSeconds(10))
				.pollingEvery(Duration.ofMillis(1000)).ignoring(Exception.class);
		wait.until(ExpectedConditions.visibilityOf(element));
	}
	
	
	public WorkOrder selectWOProject() {	
		WebElement project = driver.findElement(By.xpath("//select[@name='projectID']"));
		Select dropdown = new Select(project);
		dropdown.selectByVisibleText("Telstra");
		return this;	
	}

	public WorkOrder enterWorkID() throws InterruptedException {
		Fwait(driver,driver.findElement(By.xpath("//label[text()='Work ID']/following::input")));
		driver.findElement(By.xpath("//label[text()='Work ID']/following::input")).sendKeys(Constant.Workid);	
//		Thread.sleep(3000);
		return this;
	}
	
	public WorkOrder clickWOSearchButton() throws InterruptedException {
		Fwait(driver,driver.findElement(By.xpath("//button[text()='Search']")));
		driver.findElement(By.xpath("//button[text()='Search']")).click();	
//		Thread.sleep(3000);
		return this;
	}
	
	public WorkOrder editWorkOrder() throws InterruptedException {
		Fwait(driver,driver.findElement(By.xpath("//img[@title='View Work Order']")));
		driver.findElement(By.xpath("//img[@title='View Work Order']")).click();	
//		Thread.sleep(3000);
		return this;
	}
	public WorkOrder clickWOQuotes() throws InterruptedException {
		Fwait(driver, driver.findElement(By.xpath("//a[text()=' Quotes ']"))); 
		driver.findElement(By.xpath("//a[text()=' Quotes ']")).click();
	//	Thread.sleep(4000);
		return this;
	}
	public Quotes clickWOQuotesEdit() throws InterruptedException {
		
		WebElement element = driver.findElement(By.xpath("//img[@title='View Quotation Items']"));
		Fwait(driver, element);
		element.click();
		nextwindow();
		return new Quotes();
	}
	//	Thread.sleep(3000);
	
	
	
	public void nextWindow() {
		
		Set<String> s1=driver.getWindowHandles();		
        Iterator<String> i1=s1.iterator();
		System.out.println(i1);
		
	}
	
	
	
}
