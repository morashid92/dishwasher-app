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
    },
    timeout,
);
