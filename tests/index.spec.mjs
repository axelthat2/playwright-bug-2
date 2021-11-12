import { test, expect } from "@playwright/test"

test("basic test", async ({ page }) => {
  await page.goto("http://127.0.0.1:4444")
  await page.waitForSelector(
    "input.form-control:right-of(div.invalid-feedback)"
  )
  expect(true).toBe(true)
})
