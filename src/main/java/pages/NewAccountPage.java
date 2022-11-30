package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class NewAccountPage extends TestBase{
WebDriver driver;

public NewAccountPage(WebDriver driver) {
	this.driver = driver;
}
//Element Library
@FindBy(how= How.XPATH, using="//input[@id='account']")WebElement AccountTitleElement;
@FindBy(how= How.XPATH, using="//input[@id='description']")WebElement DescriptionElement;
@FindBy(how= How.XPATH, using="//input[@id='balance']")WebElement InitialBalanceElement;
@FindBy(how= How.XPATH, using="//input[@id='account_number']")WebElement AccountNumberElement;
@FindBy(how= How.XPATH, using="//input[@id='contact_person']")WebElement ContactPersonElement;
@FindBy(how= How.XPATH, using="//input[@id='contact_phone']")WebElement PhoneElement;
@FindBy(how= How.XPATH, using="//input[@id='ib_url']")WebElement InternetBankingURLElement;
@FindBy(how= How.XPATH, using="//button[@class='btn btn-primary']")WebElement SubmitButtonElement;
@FindBy(how = How.XPATH, using = "//div[@class = 'alert alert-success fade in']")WebElement ValidateMessageElement;

public void enterAccountTitle(String accountTitle) {
	String insertedAccountTitle =accountTitle+ generateRandomNumber(9999);
	AccountTitleElement.sendKeys( insertedAccountTitle);
	
}
public void enterDescription(String description) {
	String insertedDescription = description + generateRandomNumber(999);
	DescriptionElement.sendKeys( insertedDescription);
}
public void enterInitialBalance(String initialBalance) {
	InitialBalanceElement.sendKeys( initialBalance);
}
public void enterAccountNumber(String accountNumber) {
	AccountNumberElement.sendKeys( accountNumber);
}
public void enterContactPerson(String contactPerson) {
	String insertedName = contactPerson + generateRandomNumber(999);
	ContactPersonElement.sendKeys(insertedName);
}
public void enterPhone(String phone) {
	PhoneElement.sendKeys(phone);
}
public void enterInternetBankingURL(String internetBankingUrl) {
	InternetBankingURLElement.sendKeys( internetBankingUrl);
}
public void clickSubmitButton() {
	SubmitButtonElement.click();
}
public String getTextMessage() {
	return ValidateMessageElement.getText();
}

}
