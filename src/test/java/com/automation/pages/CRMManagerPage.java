package com.automation.pages;

import com.automation.utilities.BrowserUtilities;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;

import java.util.Random;

public class CRMManagerPage extends BasePage {

    @FindBy(css = "[class='btn btn-primary btn-sm o-kanban-button-new']")
    private WebElement createPipelineBtn;

    public void createPipeline() {
        createPipelineBtn.click();
        BrowserUtilities.wait(1);
    }

    @FindBy(css = "[class='o_field_char o_field_widget o_input o_required_modifier']")
    private WebElement opportunityTitle;

    public void setOpportunityTitle(String opportunity) {
        opportunityTitle.sendKeys(opportunity);
        BrowserUtilities.wait(1);
    }

    @FindBy(css = "[name='partner_id'] [class='o_input ui-autocomplete-input']")
    private WebElement customerName;

    public void setCustomerName() {
        BrowserUtilities.wait(2);
        Select select = new Select(customerName);
        BrowserUtilities.wait(2);
        select.selectByVisibleText("&*&*)_( (copy), James");
        BrowserUtilities.wait(1);
    }

    @FindBy(css = "[name='planned_revenue']")
    private WebElement expectedRevenue;

    public void setExpectedRevenue() {
        expectedRevenue.sendKeys("1000000");
        BrowserUtilities.wait(1);
    }

    @FindBy(css = "[title='Very High']")
    private WebElement priority;

    public void setPriority() {
        priority.click();
        BrowserUtilities.wait(1);
    }

    @FindBy(css = "[name='close_dialog']")
    private WebElement createOpportunity;

    public void clickOnCreateOpportunity() {
        createOpportunity.click();
    }
}