const timeout = 5000;
let page = global.page;

describe(
    '/ (Product Page)',
    () => {
        it('Renders only first 20 results', async () => {
            await page.goto('http://localhost:4000');
            await page.waitForTimeout(4000);
            const count =  await page.$$eval('.product', ele => ele.length);

            expect(count).toBe(20);
        });

        it('Opens a product details page when clicking on a product', async () => {
            const firstProductSelector = '[class="container"] > :first-child';
            await page.goto('http://localhost:4000');
            await page.waitForTimeout(4000);

            await page.click(firstProductSelector);

            const productDetailTitle = await page.$eval(".product-details-title", el => el.textContent);
            expect(productDetailTitle).toEqual('Bosch Serie 4 SMV46JX01G Fully Integrated Dishwasher');
        });

        it('Contains correct product id in url when clicking on a product', async () => {
            const firstProductSelector = '[class="container"] > :first-child';
            await page.goto('http://localhost:4000');
            await page.waitForTimeout(4000);

            await page.click(firstProductSelector);

            expect(page.url()).toContain('4215447');
        });

        it('Contains correct title for product page', async () => {
            await page.goto('http://localhost:4000');
            await page.waitForTimeout(4000);

            const productDetailTitle = await page.$eval("title", el => el.textContent);
            expect(productDetailTitle).toEqual('Dishwashers');
        });
    },
    timeout,
);
