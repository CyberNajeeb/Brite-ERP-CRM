package com.automation.runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "resources/features",
        glue = "com/automation/step_definitions",
        dryRun = false,
        tags = "@driver",
        strict = false,
        plugin = {
                "html:target/cucumber-html-report",
                "json:target/cucumber1.json",
                "rerun:target/rerun.txt"
        }
)

public class CukesRunner {
}
