require("expect-puppeteer");

describe("Google", async () => {
  let page;
  beforeAll(async () => {
    const browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto("https://google.com");
  });

  it('should be titled "Google"', async () => {
    await expect(page.title()).resolves.toMatch("Google");
  });
});

const puppeteer = require("puppeteer");
