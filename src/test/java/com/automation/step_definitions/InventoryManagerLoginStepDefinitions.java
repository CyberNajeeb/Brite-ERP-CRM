package com.automation.step_definitions;

import com.automation.pages.BasePage;
import com.automation.pages.LoginPage;
import com.automation.utilities.ConfigurationReader;
import com.automation.utilities.Driver;
import io.cucumber.java.en.*;
import org.junit.Assert;

public class InventoryManagerLoginStepDefinitions  extends BasePage {

    LoginPage loginPage = new LoginPage();

    @Given("Inventory Manager is on login page")
    public void inventoryManagerIsOnLoginPage() {
        System.out.println("manager is on the login page");
        Driver.getDriver().get(ConfigurationReader.getProperty("qa1"));
    }

    @When("Inventory Manager signs in with {string} username and {string} password")
    public void inventoryManagerSignsInWithUsernameAndPassword(String username, String password) {
        System.out.println("Manager logs in");
        loginPage.login(username, password);
    }

    @Then("Inventory Manager confirms successful login by printing {string} username")
    public void inventoryManagerConfirmsSuccessfulLoginByPrintingUsername(String current_username) {
        System.out.println("Current username is: " + getCurrentUserName());
        Assert.assertEquals(getCurrentUserName(), current_username);

    }
}
