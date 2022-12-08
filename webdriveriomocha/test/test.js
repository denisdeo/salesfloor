// Test for Salesfloor - Testing Appointment Request
// Author: Denis De O
// Github: https://github.com/denisdeo/salesfloor

const { btnSubmit } = require("../../login.page");

describe('Salesfloor - Verify Appointment Request', ()=> {

    it('should validate appointment request according to test documentation', async () => {

      //call the URL
      await browser.url("https://elguntors-stg.salesfloor.net/lol56eff3d6ed8b9");
 
       //Using Xpath to get the text element 
       //const appointrequest=$('//*[@id="AtAppointmentLink"]/h2');

       //Click on Appointment request
       //await (await appointrequest).click();

       //Set values
       
 
       //Verify that the text colour is red

             
       browser.closeWindow()
    });
 }); 