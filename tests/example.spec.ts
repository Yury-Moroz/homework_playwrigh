import { test, expect } from '@playwright/test';

test('authorization on the-interne website', async ({ page }) => {
  await page.goto("https://bizon.by/admin/");
  await page.locator('[type="text"]').fill("mishkaAdmishka");
  await page.locator('[type="password"]').fill("142Tp543");
  await page.locator('[type="submit"]').click();
  const check = page.locator('[class="alert alert-danger alert-dismissible"]');
  console.log(await check.textContent())
  await page.screenshot({path: 'img/bizon.jpg'});
});



test('checking the registration of the onliner website', async ({ page }) => {
  await page.goto('https://onliner.by/');
  await page.click('[class= "auth-bar__item auth-bar__item--text"]');
  await page.locator('[placeholder="Ник или e-mail"]').fill("ffff@gmail.com");
  await page.locator('[placeholder="Пароль"]').fill("5832329638ZZZZ329");
  await page.locator('[type="submit"]').click;
  expect(page.locator('[class= "auth-bar__item auth-bar__item--text"]')).toBeVisible;
  await page.screenshot({path: 'img/login.jpg'});
});

test('looking for a Christmas tree', async ({ page }) => {
  await page.goto("https://catalog.onliner.by/tree");
  const check = page.locator(".js-schema-header_title");
  await expect(check).toHaveText("Новогодние елки");
  await page.screenshot({path: 'img/сhristmas_tree.jpg'});
});

test('authorization on the-interne website', async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/login");
  await page.locator('[type="text"]').fill("ffff@gmail.com");
  await page.locator('[type="password"]').fill("5832329638ZZZZ329");
  await page.locator('[type="submit"]').click();
  const check = page.locator('[class="flash error"]');
  await expect(check).toHaveText(/Your username is invalid!/);
  await page.screenshot({path: 'img/the-interne.jpg'});
});

test('checking the work of the catalog sport-nutrition.by', async ({ page }) => {
  await page.goto("https://sport-nutrition.by/");
  await page.click('[href="/energetiki"]');
  const check = page.locator('[class="h2"]');
  console.log(await check.textContent())
  //await expect(check).toHaveText("Энергетики");
  await page.screenshot({path: 'img/sport_nutr1.jpg'});
  await page.click('[href="/l-karnitin-1"]');
  const check2 = page.locator('[class="h2"]');
  await expect(check2).toHaveText("L-Карнитин");
  await page.screenshot({path: 'img/sport_nutr2.jpg'});
});