// Test for Salesfloor - Verify Title
// Author: Denis De O
// Github: https://github.com/denisdeo/salesfloor

describe('Salesfloor -  validate page title testing according to test documentation', ()=> {

   it('should validate page title', async () => {
      //call the URL
      await browser.url("https://elguntors-stg.salesfloor.net/lol56eff3d6ed8b9");
      //Verify if the Title is correct
      await expect(browser).toHaveTitle('Shop with Sally Sellers - El Guntors');
      browser.closeWindow();
   });
}); 


