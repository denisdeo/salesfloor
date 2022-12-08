// Test for Salesfloor - Testing Appointment Request
// Author: Denis De O
// Github: https://github.com/denisdeo/salesfloor


describe('Salesfloor - Verify live chat text color according to test documentation', ()=> {

    it('should validate appointment request according to test documentation', async () => {
       //call the URL
       await browser.url("https://elguntors-stg.salesfloor.net/lol56eff3d6ed8b9");
 
       //Using Xpath to get button elements 
       const appointrequest=$('//*[@id="AtAppointmentLink"]/h2');
       const phonebutton =$('//*/li[2]/label/span');
       //*[@for='phoneService']/span[@class='global-services__label__text']
       //Click on Appointment request
       await (await appointrequest).click();

       //Click on Phone button 
       await (await phonebutton).click();
       
       browser.closeWindow();
    });
 }); 

 //    //*/div[1]/div[1]/div/div[2]/div/form/fieldset/div/div[2]/div/ul/li[2]/label


 //*/fieldset/div/div[2]/div/ul/li[2]/label
 
 
 