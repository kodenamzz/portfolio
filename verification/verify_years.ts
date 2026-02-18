import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    // Navigate to the about section
    await page.goto('http://localhost:3000/#about');

    // Wait for the content to load
    await page.waitForSelector('text=I am a passionate Full-stack Developer');

    // Get the text content of the about me section
    const aboutMeText = await page.textContent('text=I am a passionate Full-stack Developer');
    console.log('About Me Text:', aboutMeText);

    // Take a screenshot
    await page.screenshot({ path: 'verification/verification.png', fullPage: true });
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await browser.close();
  }
})();
