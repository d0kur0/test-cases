module.exports = async (page, elementNumber) => {
    const subTitlesSelector = ".organic__subtitle b";

    await page.mainFrame().waitForSelector(subTitlesSelector);

    const elements = await page.evaluate(selector => {
        return [...document.querySelectorAll(selector)].map(element => element.textContent)
    }, subTitlesSelector);

    return elements;
};