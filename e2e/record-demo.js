const { chromium } = require('@playwright/test');

(async () => {
  // Desktop recording
  const browser = await chromium.launch();
  const desktopContext = await browser.newContext({
    viewport: { width: 1400, height: 900 },
    recordVideo: {
      dir: './demo-video/',
      size: { width: 1400, height: 900 },
    },
  });

  const page = await desktopContext.newPage();
  await page.goto('http://localhost:3000');
  await page.waitForTimeout(2500);

  // Scroll through hero
  await page.evaluate(() => window.scrollBy({ top: 400, behavior: 'smooth' }));
  await page.waitForTimeout(1500);

  // Click through all nav buttons
  await page.locator('button:has-text("Profils")').click();
  await page.waitForTimeout(2500);

  await page.locator('button:has-text("Challenge")').click();
  await page.waitForTimeout(2500);

  await page.locator('button:has-text("Intervenants")').click();
  await page.waitForTimeout(2000);

  await page.locator('button:has-text("Informations Pratiques")').click();
  await page.waitForTimeout(2500);

  // Scroll a bit more
  await page.evaluate(() => window.scrollBy({ top: 500, behavior: 'smooth' }));
  await page.waitForTimeout(1500);

  await page.locator('button:has-text("FAQ")').click();
  await page.waitForTimeout(2500);

  // Scroll to footer
  await page.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }));
  await page.waitForTimeout(2500);

  // Back to top
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
  await page.waitForTimeout(2000);

  await desktopContext.close();

  // Mobile recording - tablet-ish width so content fits nicely
  const mobileContext = await browser.newContext({
    viewport: { width: 768, height: 1024 },
    isMobile: true,
    hasTouch: true,
    recordVideo: {
      dir: './demo-video/',
      size: { width: 768, height: 1024 },
    },
  });

  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto('http://localhost:3000');
  await mobilePage.waitForTimeout(2500);

  // Scroll down slowly through the page
  for (let i = 0; i < 6; i++) {
    await mobilePage.evaluate(() => window.scrollBy({ top: 600, behavior: 'smooth' }));
    await mobilePage.waitForTimeout(1500);
  }

  // Back to top
  await mobilePage.evaluate(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
  await mobilePage.waitForTimeout(1500);

  // Open hamburger menu
  await mobilePage.locator('.hamburger1').click();
  await mobilePage.waitForTimeout(2000);

  // Click FAQ from mobile menu
  await mobilePage.locator('.link1:has-text("FAQ")').click();
  await mobilePage.waitForTimeout(2500);

  // Scroll to bottom
  await mobilePage.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }));
  await mobilePage.waitForTimeout(2000);

  await mobileContext.close();
  await browser.close();

  console.log('Desktop and mobile videos recorded!');
})();
