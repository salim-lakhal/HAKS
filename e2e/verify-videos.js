const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 768, height: 1024 } });
  const p = await ctx.newPage();
  await p.goto('file:///home/salim/Informatique/Perso/HAKS/haks-demo-mobile.webm');
  await p.waitForTimeout(3000);
  await p.screenshot({ path: '/tmp/verify-mobile2.png' });
  await ctx.close();
  await browser.close();
  console.log('done');
})();
