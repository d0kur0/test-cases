module.exports = async (page) => {
    const resultItemSelector = "body > div.main.serp.i-bem.main_js_inited.serp_js_inited > div.main__center > div.main__content > div.content.i-bem.content_js_inited > div.content__left > ul > li";

    await page.mainFrame().waitForSelector(resultItemSelector);
    const countElements = await page.evaluate(selector => document.querySelectorAll(selector).length, resultItemSelector);

    return countElements;
};