// @ts-check
const { test, expect } = require('@playwright/test');

let context;
let page;
test.beforeAll("first test", async({browser}) =>{
  context = await browser.newContex();

  await context.tracing.start(
    {
      snapshots:true, 
      screenshots: true
    });
    page = await context.newPgae();

})

    test.afterAll(async () =>
      {
      await context.tracing.stop({path: 'test2_trace.zip'})
  });
    