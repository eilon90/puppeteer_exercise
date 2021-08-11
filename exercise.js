const puppeteer = require('puppeteer');

const checkWebsite = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://contractorsinsurancereview.com/ExampleForm/');

    await page.$eval('#name', name => name.value = 'Eilon Roseman');
    await page.$eval('#email', email => email.value = 'eilon90@gmail.com');
    await page.$eval('#phone', phone => phone.value = '0546348882');
    await page.$eval('#company', comp => comp.value = 'freelancer');
    await page.select('#employees', '51-500');

    await page.screenshot({path: 'example.png'});

    await Promise.all([
        page.click('.primary'),
        page.waitForNavigation()
    ]);

    const title = await page.title();
    if (title === 'Thank You') {
        console.log('Reached to the Thank You page succescfully');
    }
    else {
        console.log('error - the page was not loaded');
    }

    await browser.close();
}
checkWebsite();