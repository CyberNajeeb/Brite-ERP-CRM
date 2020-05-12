package com.automation.step_definitions;

import com.automation.utilities.ConfigurationReader;
import com.automation.utilities.Driver;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import org.openqa.selenium.WebDriver;

public class Hooks {

    WebDriver driver;
    @Before
    public void setup(){
        System.out.println("Before method executed");
    }
    @After
    public void teardown(){
        Driver.closeDriver();
    }
}
