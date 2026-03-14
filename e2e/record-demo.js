const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1400, height: 900 },
    recordVideo: {
      dir: './demo-video/',
      size: { width: 1400, height: 900 },
    },
  });

  const page = await context.newPage();
  await page.goto('http://localhost:3000');
  await page.waitForTimeout(2000);

  // Scroll down slowly through the hero section
  await page.evaluate(() => window.scrollBy({ top: 400, behavior: 'smooth' }));
  await page.waitForTimeout(1500);

  // Click "Profils" nav button
  await page.locator('button:has-text("Profils")').click();
  await page.waitForTimeout(2000);

  // Click "Challenge" nav button
  await page.locator('button:has-text("Challenge")').click();
  await page.waitForTimeout(2000);

  // Click "Intervenants" nav button
  await page.locator('button:has-text("Intervenants")').click();
  await page.waitForTimeout(2000);

  // Click "Informations Pratiques" nav button
  await page.locator('button:has-text("Informations Pratiques")').click();
  await page.waitForTimeout(2000);

  // Scroll down a bit to show map area
  await page.evaluate(() => window.scrollBy({ top: 500, behavior: 'smooth' }));
  await page.waitForTimeout(1500);

  // Click "FAQ" nav button
  await page.locator('button:has-text("FAQ")').click();
  await page.waitForTimeout(2000);

  // Scroll to the very bottom to show footer
  await page.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }));
  await page.waitForTimeout(2000);

  // Scroll back to top
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
  await page.waitForTimeout(2000);

  // Now show mobile view - hamburger menu
  await page.setViewportSize({ width: 375, height: 812 });
  await page.waitForTimeout(1500);

  // Open hamburger menu
  await page.locator('.hamburger1').click();
  await page.waitForTimeout(1500);

  // Click a mobile nav link
  await page.locator('.link1:has-text("FAQ")').click();
  await page.waitForTimeout(2000);

  // Scroll down on mobile
  await page.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }));
  await page.waitForTimeout(1500);

  await context.close();
  await browser.close();

  console.log('Demo video recorded successfully!');
})();
