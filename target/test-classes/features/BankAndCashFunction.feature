@FeatureFunction
Feature: Techfios bank and cash New Account Functionality 

Background:
Given User is on the techfios login page 

@Scenario
Scenario Outline: User should be able to login with valid credentials 
	and open a new account	
 When User enters the "<username>" in "userName" field
	When User enters the "<password>" in "Password" field
	And  User click on "<login>"
	Then User should land on Dashboard page 
	And User click at"<bankCash>"
	And User clicks on the "<newAccount>"
	And User enters"<accountTitle>"in accounts page in "AccountTitle" page
	And User enters"<description>"in accounts page in "Description" page
	And User enters"<initialBalance>"in accounts page in "InitialBalance" page
	And User enters"<accountNumber>"in accounts page in "AccountNumber" page
	And User enters"<contactPerson>"in accounts page in "ContactPerson" page
	And User enters"<Phone>"in accounts page in "phone" page
	And User enters"<internetBankingURL>"in accounts page in "InternetBankingURL" page
	And User clicks on"<submit>"
	Then User should be able to validate account created successfully
	
	Examples:
	|username|password|accountTitle|description|initialBalance|accountNumber|contactPerson|Phone|internetBankingURL|
	|demo@techfios.com|abc123|Savings|QA Automation|$50,000|abc12345|Ms XYZ|0123456789|https://www.hdfc.com|