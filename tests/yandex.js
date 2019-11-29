const typeInSearchField = require("../steps/yandex/typeInSearchField");
const triggerSearch = require("../steps/yandex/triggerSearch");
const countElementsInSearchResult = require("../steps/yandex/countElementsInSearchResult");
const getSubTitleOnFirstSite = require("../steps/yandex/getSubTitleOfElementInSearchResult");

describe("Тестирование Яндекса", () => {
    let page;
    let browser;

    beforeAll(async () => {
        const instance = await require("../functions/getPage")("https://ya.ru");

        browser = instance.browser;
        page = instance.page;
    });

    afterAll(async () => {
        await browser.close();
    });

    it("Количество элементов в выдаче поиска по запросу 'test' больше или равно 10", async () => {
        await page.goto("https://ya.ru");
        await typeInSearchField(page, "test");
        await triggerSearch(page);

        const count = await countElementsInSearchResult(page);
        expect(count >= 10).toBe(true);
    });

    it("Первый элемент выдачи в поиске это сайт: 'speedtest.net'", async () => {
        await page.goto("https://ya.ru");
        await typeInSearchField(page, "test");
        await triggerSearch(page);

        const subTitles = await getSubTitleOnFirstSite(page, 1);
        expect(subTitles.length > 0).toBe(true);

        const firstSubTitle = subTitles[0];
        expect(firstSubTitle).toBe("speedtest.net");
    })
});