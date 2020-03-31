package page;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.Toolkit;
import java.awt.datatransfer.Clipboard;
import java.awt.datatransfer.StringSelection;
import java.awt.event.InputEvent;
import java.awt.event.KeyEvent;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import seleniumBase.SpecifiedBaseMethod;
import utils.Constant;

public class Quotes extends SpecifiedBaseMethod{
	
	
	public Quotes clickComments() {
		
		WebElement element = driver.findElement(By.xpath("//div[text()=' Comments ']/.."));
		fwait(driver,element);
		element.click();
		return this;
	}
public Quotes selectCommentType() {
		
		WebElement element = driver.findElement(By.xpath("//option[text()='Select Comment Type']/.."));
		fwait(driver,element);
		Select drop = new Select(element);
		drop.selectByVisibleText("Internal ");	
		return this;
	}

public Quotes enterCommenttext() {
	
	WebElement element = driver.findElement(By.xpath("//textarea[@name='quotationCommentDesc']"));
	fwait(driver,element);
	element.sendKeys(Constant.quoteComment);	
	return this;
}

public Quotes clickAttachIcon() throws AWTException {
	
	WebElement element = driver.findElement(By.xpath("//i[@title='Click to Attach']"));
	fwait(driver,element);
	element.click();
	//element.sendKeys("C:\\Users\\karamach\\Pictures\\Desert.jpg");
	Robot robot = new Robot();
	StringSelection path = new StringSelection("Desert.jpg");
	Toolkit tool = Toolkit.getDefaultToolkit();
	Clipboard clipboard = tool.getSystemClipboard();
	clipboard.setContents(path, null);
	robot.delay(1500);
	robot.keyPress(KeyEvent.VK_CONTROL);
	robot.keyPress(KeyEvent.VK_V);
	robot.keyRelease(KeyEvent.VK_CONTROL);
	robot.keyRelease(KeyEvent.VK_V);
	for(int i=1;i<=4;i++) {
		robot.keyPress(KeyEvent.VK_TAB);
		robot.keyRelease(KeyEvent.VK_TAB);
	}
	robot.keyPress(KeyEvent.VK_ENTER);
	robot.keyRelease(KeyEvent.VK_ENTER);
	StringSelection path1 = new StringSelection("C:\\Users\\karamach\\Pictures\\");
	Toolkit tool1 = Toolkit.getDefaultToolkit();
	Clipboard clipboard1 = tool1.getSystemClipboard();
	clipboard1.setContents(path1, null);
	robot.keyPress(KeyEvent.VK_CONTROL);
	robot.keyPress(KeyEvent.VK_V);
	robot.keyRelease(KeyEvent.VK_CONTROL);
	robot.keyRelease(KeyEvent.VK_V);
	robot.delay(1500);
	robot.keyPress(KeyEvent.VK_ENTER);
	robot.keyRelease(KeyEvent.VK_ENTER);
	for(int i=1;i<=7;i++) {
		robot.keyPress(KeyEvent.VK_TAB);
		robot.keyRelease(KeyEvent.VK_TAB);
	}
	robot.delay(1500);
	robot.keyPress(KeyEvent.VK_ENTER);
	robot.keyRelease(KeyEvent.VK_ENTER);
	
//	robot.mouseMove(630, 420);
//	robot.mousePress(InputEvent.BUTTON1_DOWN_MASK);
//	robot.mouseRelease(InputEvent.BUTTON1_DOWN_MASK);
	
		/*
		 * robot.keyPress(KeyEvent.VK_C); // C robot.keyRelease(KeyEvent.VK_C);
		 * 
		 * 
		 * robot.keyPress(KeyEvent.VK_COLON); // : (colon)
		 * robot.keyRelease(KeyEvent.VK_COLON); robot.keyPress(KeyEvent.VK_SLASH); // /
		 * (slash) robot.keyRelease(KeyEvent.VK_SLASH); // etc. for the whole file path
		 * 
		 * robot.keyPress(KeyEvent.VK_ENTER); // confirm by pressing Enter in the end
		 * robot.keyRelease(KeyEvent.VK_ENTER);
		 */
	
	return this;
}

public Quotes clickSave() {
	
	WebElement element = driver.findElement(By.xpath(" //button[text()=' Save ' ]"));
	fwait(driver,element);
	for (int i = 0; i < 3; i++) {
		element.sendKeys(Keys.PAGE_DOWN);
	}
	
	element.click();
	return this;
}

	
public Quotes enterScope() {
		try {
		WebElement element = driver.findElement(By.xpath("//textarea[@id='scopeOfWorkstxtbox']"));
		fwait(driver,element);
		element.clear();
		element.sendKeys(Constant.scopeOfWork);
		}catch(Exception excep) {
			
			driver.findElement(By.xpath("//img[@id='tblExcelIcon']")).click();
			
		}
		return this;
	}
	
}
