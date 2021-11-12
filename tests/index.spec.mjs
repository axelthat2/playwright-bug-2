import { test, expect } from "@playwright/test"

test("basic test", async ({ page }) => {
  await page.goto("http://127.0.0.1:4444")
  const text = await page.innerText(
    "input.form-control:near(div.invalid-feedback)"
  )
  expect(text.includes("Error message")).toBeTruthy()
})
