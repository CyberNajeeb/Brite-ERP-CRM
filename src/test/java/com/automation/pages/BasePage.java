package com.automation.pages;

import com.automation.utilities.BrowserUtilities;
import com.automation.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

/**
 * This class will be extended by page classes
 * And common webelements/locators can be stored here
 * Since navigation menu doesn't belong to particular page
 * We cannot really create a dedicated page class to store
 * elements from that menu
 */
public abstract class BasePage {
    protected WebDriver driver = Driver.getDriver();
    protected WebDriverWait wait = new WebDriverWait(driver, 25);

    @FindBy(css = "[class=oe_topbar_name]")
    protected WebElement currentUser;

    @FindBy(css = "[class='btn-group pull-right'] > button")
    private WebElement saveAndClose;

    public BasePage() {
        PageFactory.initElements(driver, this);
    }


    public String getCurrentUserName(){
        BrowserUtilities.waitForPageToLoad(10);
        wait.until(ExpectedConditions.visibilityOf(currentUser));
        return currentUser.getText().trim();
    }
    public void clickOnSaveAndClose() {
        BrowserUtilities.wait(3);
        wait.until(ExpectedConditions.elementToBeClickable(saveAndClose)).click();
        waitForLoaderMask();
    }

    /**
     * Method for vytrack navigation. Provide tab name and module name to navigate
     * @param tabName, like Dashboards, Fleet or Customers
     */
    public void navigateTo(String tabName) {
        String tabNameXpath = "//span[@class='oe_menu_text' and contains(text(),'" + tabName + "')]";
        WebElement tabElement = driver.findElement(By.xpath(tabNameXpath));
        Actions actions = new Actions(driver);
        actions.moveToElement(tabElement).
                pause(1000).
                click(tabElement).
                build().perform();
        //increase this wait time if still failing
        BrowserUtilities.wait(4);
        waitForLoaderMask();
    }
    private void waitForLoaderMask(){
        wait.until(ExpectedConditions.invisibilityOfElementLocated(By.cssSelector("[class*='loader-mask']")));
    }
}