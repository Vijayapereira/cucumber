package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class BankAndCashPage {
	WebDriver driver;
	
	public BankAndCashPage(WebDriver driver) {
		this.driver = driver;
	}
//Element Library
	
	@FindBy(how = How.XPATH, using = "//*[@id=\"side-menu\"]/li[10]/a/span[1]")WebElement BankAndCashButtonElement;
	@FindBy(how = How.XPATH, using = "//a[contains(text(),'New Account')]")WebElement NewAccountButtonElement;
	
	
		public void clickBankAndCashButton() {
		BankAndCashButtonElement.click();
	}
	public boolean elementClickable() {

		try {
			WebDriverWait wait = new WebDriverWait(driver, 10);
			wait.until(ExpectedConditions.visibilityOf(BankAndCashButtonElement));

			return false;

		} catch (Exception e) {

		}
		return true;

	}

	public void clickNewAccountButton() {
		NewAccountButtonElement.click();
	}
	
}
