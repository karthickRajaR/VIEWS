package seleniumBase;

import java.time.Duration;
import java.util.Iterator;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;

import utils.Constant;

public class SpecifiedBaseMethod {
	public static ChromeDriver driver;
	

public void fwait(WebDriver driver, WebElement element) {
	FluentWait<WebDriver> wait = new FluentWait<WebDriver>(driver).withTimeout(Duration.ofSeconds(10))
			.pollingEvery(Duration.ofMillis(1000)).ignoring(Exception.class);
	wait.until(ExpectedConditions.visibilityOf(element));
}

public void nextwindow() {
	Set<String> s1=driver.getWindowHandles();		
    Iterator<String> win=s1.iterator();
    
    System.out.println(win.hasNext());
    
	System.out.println(win);
	
	while(win.hasNext())			
    {
//	String ChildWindow=win.next();
	driver.switchTo().window(win.next());
    }
	System.out.println(driver.getCurrentUrl());
	
}

public void parentwindow() {
	Set<String> s1=driver.getWindowHandles();		
    Iterator<String> win=s1.iterator();
    
    System.out.println(win.hasNext());
    
	System.out.println(win);
	
	while(win.hasNext())			
    {
//	String ChildWindow=win.next();
	driver.switchTo().window(win.next());
    }
	System.out.println(driver.getCurrentUrl());
	
	
}

@BeforeMethod

 public void runDrive() throws InterruptedException {
System.setProperty("webdriver.chrome.driver", "./driver/chromedriver.exe");
 driver = new ChromeDriver();
 driver.manage().window().maximize();
 driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
 driver.get(Constant.URL);
// driver.findElement(By.xpath("//input[@id='UserName']")).sendKeys("karthik");
 Thread.sleep(3000);
}
 @AfterMethod
 
 public void closeDrive() {
	 //driver.close();
 }
 
 
 
 
}


