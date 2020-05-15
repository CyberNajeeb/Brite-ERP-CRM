package com.automation.step_definitions;

import com.automation.pages.BasePage;
import com.automation.pages.CRMManagerPage;
import com.automation.pages.LoginPage;
import com.automation.utilities.ConfigurationReader;
import com.automation.utilities.Driver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.Keys;

public class CRMManagerStepDefinitions extends BasePage {
    CRMManagerPage crmManagerPage = new CRMManagerPage();
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

    @Then("Manager clicks on create button")
    public void managerClicksOnCreateButton() {
        crmManagerPage.createPipeline();
    }

    @Then("Manager enters opportunity title")
    public void managerEntersOpportunityTitle() {
        crmManagerPage.setOpportunityTitle("Great New Deal");
    }

    @And("Manager selects customer name")
    public void managerSelectsCustomerName() {
        crmManagerPage.setCustomerName();
    }

    @And("Manager sets the expected revenue")
    public void managerSetsTheExpectedRevenue() {
        crmManagerPage.setExpectedRevenue();
    }

    @And("Manager sets the priority")
    public void managerSetsThePriority() {
        crmManagerPage.setPriority();
    }

    @Then("Manager clicks on create new opportunity button")
    public void managerClicksOnCreateNewOpportunityButton() {
        crmManagerPage.clickOnCreateOpportunity();
    }
}
