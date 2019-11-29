const puppeteer = require("puppeteer");

module.exports = async () => {
    const browser = await puppeteer.launch({
        args: [
            "--no-sandbox",
            "--disable-setuid-sandbox",
            "--window-size=1920,1080"
        ],
        defaultViewport: {
            width: 1920,
            height: 1080
        },
        headless: false
    });

    const page = await browser.newPage();

    return { browser, page };
};