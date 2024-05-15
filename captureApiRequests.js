const fs = require('fs');
const puppeteer = require('puppeteer');

function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time)
  });
}

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  const apiRequests = [];

  await page.setRequestInterception(true);
  page.on('request', request => {
    if (request.resourceType() === 'xhr' || request.resourceType() === 'fetch') {
      apiRequests.push({
        url: request.url(),
        method: request.method(),
        headers: request.headers(),
        postData: request.postData()
      });
    }
    request.continue();
  });

  await page.goto('https://jsonplaceholder.typicode.com/');
  await delay(30000); // Wait for 30 seconds to capture all requests

  fs.writeFileSync('apiRequests.json', JSON.stringify(apiRequests, null, 2));

  await browser.close();
})();
