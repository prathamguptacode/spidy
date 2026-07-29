import "dotenv/config"
import puppeteer from "puppeteer-extra"
import stealth from "puppeteer-extra-plugin-stealth"
puppeteer.use(stealth())
import { art } from "./constants/art"
import { sc } from "./services/sc"

console.log(art)
console.log("Hello spidy pg")


const browser = await puppeteer.launch({
  headless: false,
  defaultViewport: null
})
const page = await browser.newPage()


const url = process.env.URL
if (url == undefined) {
  console.error("URL not found")
  process.exit(1)
}
const pass = process.env.PASS
if (pass == undefined) {
  console.error("URL not found")
  process.exit(1)
}

while (true) {
  const check = await sc({ url, pass, page })
  if (check == 1) {
    break
  }
  await new Promise(resolve => setTimeout(resolve, 1000 * 300));
  await page.goto("https://www.google.com/")
}
