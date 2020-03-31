package seleniumBase;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

public class JaveClass {

	public static void main(String[] args) throws InterruptedException {
		System.setProperty("webdriver.chrome.driver", "./driver/chromedriver.exe");
		ChromeDriver driver = new ChromeDriver();
		 driver.manage().window().maximize();
		 driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		 driver.get("https://test-views.vspl.net/Views.Web.DATA/Account/Login");
		 driver.findElement(By.xpath("//input[@id='UserName']")).sendKeys("karthik");
		 driver.findElement(By.id("Password")).sendKeys("Chembian2");
		 driver.findElement(By.xpath("//button[@type=\"button\"]")).click();
		 driver.findElement(By.xpath("//a[@mattooltip='Project Sites']")).click();
		 Thread.sleep(3000);
		 driver.switchTo().frame(driver.findElement(By.className("pageIframe")));
		 //WebElement prolist = driver.findElement(By.xpath("//select[@name='projectID']"));
			Select drop = new Select(driver.findElement(By.xpath("//select[@name='projectID']")));
			drop.selectByVisibleText("Telstra");
			driver.findElement(By.xpath("//input[@ng-model='search.SiteID']")).sendKeys("DUDE");
			driver.findElement(By.xpath("//button[text()='Search']")).click();
	}
}
