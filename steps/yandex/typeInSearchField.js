module.exports = async (page, text) => {
    await page.focus("#text");
    await page.keyboard.type(text);
};