package com.automation.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;

public class CRMManagerPage extends BasePage{

    @FindBy(css = "[class='btn btn-primary btn-sm o-kanban-button-new']")
    private WebElement createPipelineBtn;

    public void createPipeline() {
        createPipelineBtn.click();
    }

    @FindBy(css = "[class='o_field_char o_field_widget o_input o_required_modifier']")
    private WebElement opportunityTitle;

    public void setOpportunityTitle(String opportunity) {
        opportunityTitle.sendKeys(opportunity);
    }

    @FindBy(css = "[name='partner_id']")
    private WebElement customerName;

    public void setCustomerName() {
        Select select = new Select(customerName);
        select.selectByVisibleText("&*&*)_( (copy), James");
    }

    @FindBy(css = "[name='planned_revenue']")
    private WebElement expectedRevenue;

    public void setExpectedRevenue() {
        expectedRevenue.sendKeys("1000000");
    }

    @FindBy(css = "[title='Very High']")
    private WebElement priority;

    public void setPriority() {
        priority.click();
    }

    @FindBy(css = "[name='close_dialog']")
    private WebElement createOpportunity;

    public void clickOnCreateOpportunity() {
        createOpportunity.click();
    }

}
