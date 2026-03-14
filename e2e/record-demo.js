const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch();

  // --- DESKTOP ---
  const desktopCtx = await browser.newContext({
    viewport: { width: 1400, height: 900 },
    recordVideo: { dir: './demo-video/', size: { width: 1400, height: 900 } },
  });
  const dp = await desktopCtx.newPage();
  await dp.goto('http://localhost:3000');
  await dp.waitForTimeout(2500);

  // Slow scroll through the entire page
  const desktopHeight = await dp.evaluate(() => document.body.scrollHeight);
  const desktopSteps = 20;
  for (let i = 0; i < desktopSteps; i++) {
    await dp.evaluate((step) => window.scrollBy({ top: step, behavior: 'smooth' }), desktopHeight / desktopSteps);
    await dp.waitForTimeout(800);
  }
  await dp.waitForTimeout(1000);

  // Scroll back to top
  await dp.evaluate(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
  await dp.waitForTimeout(2000);

  // Now click navigation buttons
  await dp.locator('button:has-text("Profils")').click();
  await dp.waitForTimeout(2000);

  await dp.locator('button:has-text("Challenge")').click();
  await dp.waitForTimeout(2000);

  await dp.locator('button:has-text("Intervenants")').click();
  await dp.waitForTimeout(1500);

  await dp.locator('button:has-text("Informations Pratiques")').click();
  await dp.waitForTimeout(2000);

  await dp.locator('button:has-text("FAQ")').click();
  await dp.waitForTimeout(2000);

  // Back to top
  await dp.evaluate(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
  await dp.waitForTimeout(2000);

  await desktopCtx.close();

  // --- MOBILE ---
  const mobileCtx = await browser.newContext({
    viewport: { width: 768, height: 1024 },
    isMobile: true,
    hasTouch: true,
    recordVideo: { dir: './demo-video/', size: { width: 768, height: 1024 } },
  });
  const mp = await mobileCtx.newPage();
  await mp.goto('http://localhost:3000');
  await mp.waitForTimeout(2500);

  // Slow scroll through the whole page
  const mobileHeight = await mp.evaluate(() => document.body.scrollHeight);
  const mobileSteps = 25;
  for (let i = 0; i < mobileSteps; i++) {
    await mp.evaluate((step) => window.scrollBy({ top: step, behavior: 'smooth' }), mobileHeight / mobileSteps);
    await mp.waitForTimeout(700);
  }
  await mp.waitForTimeout(1000);

  // Back to top
  await mp.evaluate(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
  await mp.waitForTimeout(2000);

  // Open hamburger menu and click links
  await mp.locator('.hamburger1').click({ force: true });
  await mp.waitForTimeout(1500);

  await mp.locator('.link1:has-text("Profils")').click({ force: true });
  await mp.waitForTimeout(2000);

  await mp.evaluate(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
  await mp.waitForTimeout(1500);

  await mp.locator('.hamburger1').click({ force: true });
  await mp.waitForTimeout(1000);

  await mp.locator('.link1:has-text("FAQ")').click({ force: true });
  await mp.waitForTimeout(2000);

  // Scroll to footer
  await mp.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }));
  await mp.waitForTimeout(2000);

  await mobileCtx.close();
  await browser.close();
  console.log('Done!');
})();
