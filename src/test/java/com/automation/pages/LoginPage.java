package com.automation.pages;

import com.automation.utilities.BrowserUtilities;
import com.automation.utilities.ConfigurationReader;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginPage extends BasePage{

    @FindBy(id = "login")
    private WebElement username;

    @FindBy(id = "password")
    private WebElement password;

    @FindBy(css = "[type='submit']")
    private WebElement login;

    @FindBy(linkText = "Reset Password")
    private WebElement resetPassword;

    @FindBy(css = "[class='alert alert-danger']")
    private WebElement warningMessage;

    //PageFactory.initElements(Driver.getDriver(), this); was implemented in the parent, BasePage class
    /*
        public LoginPage() {
        //to connect our webdriver, page class and page factory
        //PageFactory - used to use @FindBy annotations
        //PageFactory - helps to find elements easier
        PageFactory.initElements(Driver.getDriver(), this);
    }
     */


    public String getWarningMessageText() {
        return warningMessage.getText();
    }

    /**
     * Method to login, version #1
     * Login as a specific user
     *
     * @param usernameValue
     * @param passwordValue
     */
    public void login(String usernameValue, String passwordValue) {
        username.sendKeys(usernameValue);
        password.sendKeys(passwordValue, Keys.ENTER);
        BrowserUtilities.waitForPageToLoad(10);
        BrowserUtilities.wait(3);
    }

    /**
     * Method to login, version #2
     * Login as a default user
     * Credentials will be retrieved from configuration.properties file
     */
    public void login() {
        username.sendKeys(ConfigurationReader.getProperty("crm_manager"));
        password.sendKeys(ConfigurationReader.getProperty("password"), Keys.ENTER);
        BrowserUtilities.waitForPageToLoad(10);
        BrowserUtilities.wait(3);
    }

    public void login(String module){
        String username = "";
        if (module.equalsIgnoreCase("contracts")) {
            username = "imm30@info.com";
        }else {
            throw new RuntimeException("Invalid module");
        }
        System.out.println("Login as " + module);
        login(username, "inventorymanager");
    }
}