import { Page } from "puppeteer"
import mailer from "./mailer"

export async function sc({ url, pass, page }: { url: string, pass: string, page: Page }) {
  try {
    await page.goto(url, { waitUntil: "networkidle0" })
    const check = await page.evaluate(() => {
      const errDiv = document.querySelector("#super-container > div > div > div.sc-qnax51-2.dunqpj > div > div > div > span.sc-1kna9y7-2.jnaqH") as HTMLElement | null
      return errDiv
    })
    if (check == null || check.innerText != "Sorry! Something is not right.") {
      //message about ticket
      mailer({ pass, msg: "Spiderman tickets may be available!!!!!! (server stoped)" })
      return 1
    }
    // no ticket
  } catch (error) {
    //message sos
    console.log(error)
    mailer({ pass, msg: "Something went wrong in server" })
  }
}

