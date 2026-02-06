
import { test, expect } from '@playwright/test';

test('marquee is moving', async ({ page }) => {
  await page.goto('http://localhost:8082');

  // Wait for marquee to be visible
  const marquee = page.locator('.animate-marquee');
  await marquee.waitFor();

  // Get initial position
  const box1 = await marquee.boundingBox();
  console.log('Initial box:', box1);

  // Wait 2 seconds
  await page.waitForTimeout(2000);

  // Get new position
  const box2 = await marquee.boundingBox();
  console.log('Final box:', box2);

  if (box1 && box2) {
    if (box1.x === box2.x) {
      console.log('FAIL: Marquee is static!');
    } else {
      console.log(`SUCCESS: Marquee moved from ${box1.x} to ${box2.x}`);
    }
  } else {
    console.log('FAIL: Could not get bounding box');
  }
});
