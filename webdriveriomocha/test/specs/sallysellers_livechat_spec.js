// Test for Salesfloor - Verify live chat text color
// Author: Denis De O
// Github: https://github.com/denisdeo/salesfloor


describe('Salesfloor - Verify live chat text color according to test documentation', ()=> {

   it('should validate livechat text and color', async () => {
      //call the URL
      await browser.url("https://elguntors-stg.salesfloor.net/lol56eff3d6ed8b9");

      //Using Xpath to get the text element 
      const unavailable=$('//*[@id="AtChatStatus"]/span[1]');

      //Verify if the Live Chat button contain "Unavailable" text
      await expect(unavailable).toBeDisplayed('Unavailable');

      //Verify that the text colour is red
      const actualColor = await unavailable.getCSSProperty('color');
      const expectresult={"parsed": {"alpha": 1, "hex": "#ee0c0c", "rgba": "rgba(238,12,12,1)", "type": "color"}, "property": "color", "value": "rgba(238,12,12,1)"};
      await expect(actualColor).toEqual(expectresult);
            
      browser.closeWindow();
   });
}); 


