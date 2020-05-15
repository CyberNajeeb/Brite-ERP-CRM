package com.automation.step_definitions;

import com.automation.pages.BasePage;
import com.automation.pages.InventoryManagerPage;
import com.automation.pages.LoginPage;
import com.automation.utilities.ConfigurationReader;
import com.automation.utilities.Driver;
import io.cucumber.java.en.*;
import org.junit.Assert;

public class LoginStepDefinitions extends BasePage {

    LoginPage loginPage = new LoginPage();

    @Then("user logs in as Inventory manager")
    public void user_logs_in_as_Inventory_manager() {
        loginPage.login(ConfigurationReader.getProperty("InventoryManager"), ConfigurationReader.getProperty("InventoryManagerPassword"));
    }

    @Then("user navigates to Inventory tab")
    public void user_navigates_to_Inventory_tab() {
        navigateTo("Inventory");
    }
    @Then("user confirms successful login by getting current Inventory username")
    public void user_confirms_successful_login_by_getting_current_Inventory_username() {
        System.out.println("Current UserName = " + getCurrentUserName());
        Assert.assertEquals(getCurrentUserName(), "InventoryManager30");
    }

    @Then("user confirms successful login by getting {string} username")
    public void user_Confirms_Successful_Login_By_Getting_Current_CRM_Username(String current_username) {
        System.out.println("Current UserName = " + getCurrentUserName());
        Assert.assertEquals(getCurrentUserName(), current_username);
    }

    @When("user signs in with {string} username and {string} password")
    public void user_signs_in_with_and_password(String username, String password) {
        loginPage.login(username, password);
    }
}
