const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1400, height: 900 },
  });
  const page = await context.newPage();
  const dir = './demo-screenshots';

  await page.goto('http://localhost:3000');
  await page.waitForTimeout(1500);
  await page.screenshot({ path: `${dir}/01-hero.png`, fullPage: false });

  await page.locator('button:has-text("Profils")').click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: `${dir}/02-profils.png`, fullPage: false });

  await page.locator('button:has-text("Challenge")').click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: `${dir}/03-challenge.png`, fullPage: false });

  await page.locator('button:has-text("FAQ")').click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: `${dir}/04-faq.png`, fullPage: false });

  await page.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: `${dir}/05-footer.png`, fullPage: false });

  // Mobile
  await page.setViewportSize({ width: 375, height: 812 });
  await page.evaluate(() => window.scrollTo({ top: 0 }));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: `${dir}/06-mobile-hero.png`, fullPage: false });

  await page.locator('.hamburger1').click();
  await page.waitForTimeout(800);
  await page.screenshot({ path: `${dir}/07-mobile-menu.png`, fullPage: false });

  await context.close();
  await browser.close();
  console.log('Screenshots captured!');
})();
