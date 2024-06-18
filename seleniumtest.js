// seleniumtest.js
const {Builder, By, Key, until} = require('selenium-webdriver');

async function example() {
    let driver = await new Builder().forBrowser('firefox').build();
    try {
        // Navigate to DuckDuckGo
        await driver.get('https://www.duckduckgo.com');

        // Enter text "WebDriver" and perform keyboard action "Enter"
        await driver.findElement(By.name('q')).sendKeys('Teater Vanemuine', Key.ENTER);

        // DuckDuckGo's first search result
        let firstResult = await driver.wait(until.elementLocated(By.css('h2 a')), 10000);

        console.log(await firstResult.getAttribute('textContent'));
    }
    finally {
        // Quit the browser after the test
        await driver.quit();
    }
}

example();

