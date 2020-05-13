package com.automation.step_definitions;

import com.automation.pages.BasePage;
import com.automation.pages.LoginPage;
import com.automation.utilities.BrowserUtilities;
import com.automation.utilities.ConfigurationReader;
import com.automation.utilities.Driver;
import io.cucumber.java.en.*;
import org.junit.Assert;

import java.util.List;
import java.util.Map;

public class Login extends BasePage {

    LoginPage loginPage = new LoginPage();
    @When("user is on login page")
    public void user_is_on_login_page() {
        System.out.println("manager is on the login page");
        Driver.getDriver().get(ConfigurationReader.getProperty("qa1"));
    }

    @Then("user logs in as CRM manager")
    public void user_logs_in_as_CRM_manager() {
        System.out.println("logs in as CRM manager");
       loginPage.login();

    }

    @Then("user navigates to CRM tab")
    public void user_Navigates_To_CRM_Tab() {
        navigateTo("CRM");
    }
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

    @Then("user confirms successful login by getting current CRM username")
    public void user_Confirms_Successful_Login_By_Getting_Current_CRM_Username() {
        System.out.println("Current UserName = " + getCurrentUserName());
        Assert.assertEquals(getCurrentUserName(), "EventsCRMManager38");
    }

    @When("user signs in with {string} and {string}")
    public void user_signs_in_with_and(String string, String string2) {
        loginPage.login(string, string2);
    }
}
