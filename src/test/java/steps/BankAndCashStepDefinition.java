package steps;


import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pages.BankAndCashPage;
import pages.LoginPage;
import pages.NewAccountPage;
import pages.TestBase;

public class BankAndCashStepDefinition extends TestBase {
	LoginPage loginPage;
	BankAndCashPage bankAndCashPage;
	NewAccountPage newAccountPage;

	@Before
	public void setUp() {
		initDriver();
		loginPage = PageFactory.initElements(driver, LoginPage.class);
		bankAndCashPage = PageFactory.initElements(driver, BankAndCashPage.class);
		newAccountPage = PageFactory.initElements(driver, NewAccountPage.class);
	}

	@Given("^User is on the techfios login page$")
	public void user_is_on_the_techfios_login_page() {
		driver.get("https://techfios.com/billing/?ng=login/");
	}

	@When("^User enters the \"([^\"]*)\" in \"([^\"]*)\" field$")
	public void user_enters_the_in_field(String loginData, String fieldName) {

		switch (fieldName) {
		case "userName":
			loginPage.insertUserName(loginData);
			break;
		case "Password":
			loginPage.insertPassword(loginData);
			try {
				Thread.sleep(3000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
			break;

		default:
			System.out.println("Unable to enter login data.");
		}

	}
	@And("^User click on \"([^\"]*)\"$")
	public void user_click_on (String login) {
		loginPage.clickSignInButton();
	}
	@Then("^User should land on Dashboard page$")
	public void user_should_land_on_Dashboard_page() {
		Assert.assertEquals("Dashboard- iBilling",loginPage.getPageTitle());
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	   
	}
	@When("^User click at\"([^\"]*)\"$")
	public void user_click_at (String bankCash) {
		bankAndCashPage.clickBankAndCashButton();
	}
	@When("^User clicks on the \"([^\"]*)\"$")
	public void user_clicks_on_the (String newAccount) {
		bankAndCashPage.clickNewAccountButton();
	}
	@Then("^User enters\"([^\"]*)\"in accounts page in \"([^\"]*)\" page$")
	public void user_enters_in_accounts_page(String accountData, String pageName) {
		switch(pageName) {
		
		case "AccountTitle":
			newAccountPage.enterAccountTitle(accountData);
			break;
		case "Description":
			newAccountPage.enterDescription(accountData);
			break;
		case "InitialBalance":
			newAccountPage.enterInitialBalance(accountData);
			break;
		case "AccountNumber":
			newAccountPage.enterAccountNumber(accountData);
			break;
		case "ContactPerson":
			newAccountPage.enterContactPerson(accountData);
			break;
		case "phone":
			newAccountPage.enterPhone(accountData);
			break;
		case "InternetBankingURL":
			newAccountPage.enterInternetBankingURL(accountData);
			break;
			default:
				System.out.println("Account data is unable to print.");
		} try {
			Thread.sleep(5000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		
	} 
	@Then("^User clicks on\"([^\"]*)\"$")
	public void user_clicks_on(String submit) {
		newAccountPage.clickSubmitButton();
		 try {
				Thread.sleep(5000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
	}
	@Then("^User should be able to validate account created successfully$")
	public void user_should_be_able_to_validate_account_created_successfully() {
		
		String actualMessage =  newAccountPage.getTextMessage();
		
		String expectedMessage = "×\r\n"
				+ "Account Created Successfully";
		
		System.out.println(actualMessage);
		System.out.println(expectedMessage);
	Assert.assertEquals("Message not found!", expectedMessage, actualMessage);
	
	}
}