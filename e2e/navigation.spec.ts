import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('homepage loads and shows hero section', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('用花朵');
    await expect(page.getByRole('navigation').getByRole('link', { name: '花語圖鑑' })).toBeVisible();
  });

  test('can navigate to flower guide', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('navigation').getByRole('link', { name: '花語圖鑑' }).click();
    await expect(page).toHaveURL('/flowers');
    await expect(page.getByRole('heading', { name: '花語圖鑑' }).first()).toBeVisible();
  });

  test('can navigate to arrangements', async ({ page }) => {
    await page.goto('/arrangements');
    await expect(page.getByRole('heading', { name: '花型教學' }).first()).toBeVisible();
    await expect(page.getByRole('heading', { name: '圓形花型' })).toBeVisible();
    await expect(page.getByRole('heading', { name: '三角形結構' })).toBeVisible();
    await expect(page.getByRole('heading', { name: '線條感設計' })).toBeVisible();
  });

  test('can navigate to structure analysis', async ({ page }) => {
    await page.goto('/structure');
    await expect(page.getByRole('heading', { name: '插花結構解析' })).toBeVisible();
    await expect(page.getByRole('heading', { name: '重心怎麼抓' })).toBeVisible();
  });

  test('can navigate to journal', async ({ page }) => {
    await page.goto('/journal');
    await expect(page.getByRole('heading', { name: '學習日誌' }).first()).toBeVisible();
  });

  test('can navigate to practice page', async ({ page }) => {
    await page.goto('/practice');
    await expect(page.getByRole('heading', { name: '今天練什麼' }).first()).toBeVisible();
    await expect(page.getByRole('button', { name: '隨機抽一個練習' })).toBeVisible();
  });

  test('can navigate to growth page', async ({ page }) => {
    await page.goto('/growth');
    await expect(page.getByRole('heading', { name: '成長故事' }).first()).toBeVisible();
  });
});

test.describe('Flower Detail Pages', () => {
  test('can view flower detail page', async ({ page }) => {
    await page.goto('/flowers');
    await page.getByRole('link', { name: /玫瑰/ }).first().click();
    await expect(page).toHaveURL('/flowers/rose');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('玫瑰');
    await expect(page.getByText('愛情、熱情、美麗')).toBeVisible();
  });

  test('flower search filters results', async ({ page }) => {
    await page.goto('/flowers');
    await page.getByPlaceholder('搜尋').fill('向日葵');
    await expect(page.getByText('向日葵').first()).toBeVisible();
    const cards = page.locator('a[href^="/flowers/"]');
    await expect(cards).toHaveCount(1);
  });

  test('flower category filter works', async ({ page }) => {
    await page.goto('/flowers');
    await page.getByRole('button', { name: '配花' }).click();
    await expect(page.getByText('滿天星').first()).toBeVisible();
  });
});

test.describe('Arrangement Detail Pages', () => {
  test('can view arrangement detail with steps', async ({ page }) => {
    await page.goto('/arrangements/round');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('圓形花型');
    await expect(page.getByText('準備花泥')).toBeVisible();
  });
});

test.describe('Structure Detail Pages', () => {
  test('can view structure topic', async ({ page }) => {
    await page.goto('/structure/gravity');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('重心怎麼抓');
  });
});

test.describe('Journal Pages', () => {
  test('can view blog post', async ({ page }) => {
    await page.goto('/journal');
    await page.getByRole('link', { name: /我的第一束花/ }).click();
    await expect(page.locator('header h1')).toContainText('我的第一束花');
  });

  test('tag filter works', async ({ page }) => {
    await page.goto('/journal');
    await page.getByRole('button', { name: '新手' }).click();
    await expect(page.getByText('我的第一束花').first()).toBeVisible();
  });
});

test.describe('Practice Page', () => {
  test('random picker shows a suggestion', async ({ page }) => {
    await page.goto('/practice');
    await page.getByRole('button', { name: '隨機抽一個練習' }).click();
    await expect(page.getByText('練習完了嗎？')).toBeVisible();
  });
});
