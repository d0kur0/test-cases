module.exports = async (page) => {
    await page.click("body > table > tbody > tr.b-table__row.layout__search > td > form > div.search2__button > button");
};