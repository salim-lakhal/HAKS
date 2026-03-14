const { test, expect } = require('@playwright/test');

test.describe('HAKS Website', () => {

  test('homepage loads successfully', async ({ page }) => {
    const response = await page.goto('/');
    expect(response.status()).toBe(200);
  });

  test('page title is correct', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/HAKS/i);
  });

  test('hero section displays main heading', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1').first()).toContainText('HAKS 2024');
  });

  test('all 12 page sections render', async ({ page }) => {
    await page.goto('/');
    // Check key content from various pages
    await expect(page.locator('text=HAKS 2024').first()).toBeVisible();
    await expect(page.locator('text=FOIRES AUX QUESTIONS')).toBeVisible();
    await expect(page.locator('text=Contact Information')).toBeVisible();
  });

  test('navigation buttons are present on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1400, height: 900 });
    await page.goto('/');
    await expect(page.locator('button:has-text("Profils")')).toBeVisible();
    await expect(page.locator('button:has-text("Challenge")')).toBeVisible();
    await expect(page.locator('button:has-text("Intervenants")')).toBeVisible();
    await expect(page.locator('button:has-text("Informations Pratiques")')).toBeVisible();
    await expect(page.locator('button:has-text("FAQ")')).toBeVisible();
  });

  test('hamburger menu appears on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    await expect(page.locator('.hamburger1')).toBeVisible();
    // Desktop buttons should not be visible
    await expect(page.locator('button:has-text("Profils")')).not.toBeVisible();
  });

  test('FAQ section has questions and answers', async ({ page }) => {
    await page.goto('/');
    const faqSection = page.locator('#Page11');
    await expect(faqSection.locator('text=Où aura lieu le HAKS ?')).toBeVisible();
    await expect(faqSection.locator('text=Télécom Paris')).toBeVisible();
    await expect(faqSection.locator('text=Comment je m\'inscris ?')).toBeVisible();
  });

  test('footer renders with copyright and social links', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('footer')).toContainText('Copyright © 2024 LAKHAL Salim');
    // Social links
    const socialLinks = page.locator('footer .social-icons a');
    await expect(socialLinks).toHaveCount(3);
  });

  test('social links point to correct URLs', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('footer a[href*="twitter.com"]')).toBeVisible();
    await expect(page.locator('footer a[href*="instagram.com"]')).toBeVisible();
    await expect(page.locator('footer a[href*="linkedin.com"]')).toBeVisible();
  });

  test('navigation links scroll to correct sections', async ({ page }) => {
    await page.setViewportSize({ width: 1400, height: 900 });
    await page.goto('/');
    await page.locator('a[href="#Page11"]').first().click();
    await page.waitForTimeout(500);
    await expect(page.locator('#Page11')).toBeInViewport();
  });

  test('page has no console errors', async ({ page }) => {
    const errors = [];
    page.on('console', msg => {
      if (msg.type() === 'error' && !msg.text().includes('Warning:')) errors.push(msg.text());
    });
    await page.goto('/');
    await page.waitForTimeout(1000);
    expect(errors).toEqual([]);
  });

  test('images load without broken links', async ({ page }) => {
    await page.goto('/');
    const images = page.locator('img');
    const count = await images.count();
    expect(count).toBeGreaterThan(0);
    for (let i = 0; i < count; i++) {
      const naturalWidth = await images.nth(i).evaluate(img => img.naturalWidth);
      const src = await images.nth(i).getAttribute('src');
      expect(naturalWidth, `Image "${src}" should load`).toBeGreaterThan(0);
    }
  });

  test('responsive: content is visible on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    await expect(page.locator('h1').first()).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
  });

});
