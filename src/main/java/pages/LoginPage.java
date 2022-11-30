package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LoginPage {
WebDriver driver;

public LoginPage(WebDriver driver) {
	this.driver = driver;
}
//Element Library
	@FindBy(how = How.CSS , using = "input[name='username']")WebElement UserNameElement;
	@FindBy(how = How.CSS, using = "input[id='password']")WebElement PasswordElement;
	@FindBy(how = How.CSS, using = "button[name='login']")WebElement SignInButtonElement;
	
	public void insertUserName(String username) {
		UserNameElement.sendKeys(username);
	}
	public void insertPassword(String password) {
		PasswordElement.sendKeys(password);
	}
	public void clickSignInButton() {
		SignInButtonElement.click();
	}
	public String getPageTitle() {
	return driver.getTitle();
	}
	
}
