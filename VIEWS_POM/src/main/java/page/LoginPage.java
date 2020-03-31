package page;

import org.openqa.selenium.By;
import org.testng.annotations.Parameters;

import seleniumBase.SpecifiedBaseMethod;
import utils.Constant;

public class LoginPage extends SpecifiedBaseMethod {

	//@Test
//	public LoginPage enterUserName() {
//		
//		driver.findElement(By.xpath("(//div[@class='form-group']//input)[1]")).sendKeys(Constant.username);
//		return this;
//	}
	public LoginPage enterPassword() {
		
		driver.findElement(By.xpath("(//div[@class='form-group']//input)[2]")).sendKeys(Constant.password);
		return this; 
	}
	public HomePage clickLogin() {
		
		driver.findElement(By.xpath("//button[@type=\"submit\"]")).click();
		return new HomePage();
	}
	public LoginPage enterUserName() {
		driver.findElement(By.xpath("(//div[@class='form-group']//input)[1]")).sendKeys(Constant.username);
		return this;
	}
}
