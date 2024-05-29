import puppeteer from "puppeteer";

async function googleSearch(searchTerm) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://www.google.com/");

  await page.setViewport({ width: 1080, height: 1024 });

  await page.type(".gLFyf", searchTerm);
  await page.keyboard.press("Enter");

  await page.waitForSelector(".g h3", { timeout: 60000 });

  const searchResults = await page.evaluate(() => {
    const results = [];
    document.querySelectorAll("h3").forEach((link) => {
      const parent = link.closest("a");
      if (parent) {
        results.push({
          title: link.textContent,
          url: parent.href,
        });
      }
    });
    return results;
  });

  console.log("Search results:");
  searchResults.forEach((result, index) => {
    console.log(`${index + 1}. ${result.title}`);
    console.log(`  ${result.url}`);
  });

  await browser.close();
}

googleSearch("computer")
  .then(() => console.log("Search completed"))
  .catch((error) => console.error(error.message));
