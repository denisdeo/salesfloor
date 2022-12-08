# Salesfloor
# Salesfloor Project Test

<h2> Instructions: </h2>

- Use a javascript based test automation framework such as WebDriverIO version 7 and Mocha framework for the test cases below and create the test scripts by using javascript
- Push the code to GitHub and share the project with us to review
- The maximum time allowed to finish is two days, from the day you receive the test
- Please include clear execution steps in read.me file 

<h2> Test cases to be implemented are: </h2>

<ol>
  <li> As a customer, I can access Storefront [Shop with Sally Sellers - El Guntors](https://elguntors-stg.salesfloor.net/lol56eff3d6ed8b9/) </li>

  a. As a customer, I see the “LIVE CHAT” status as “Unavailable” 
  
  b. Verify that the text colour is red

  <li> As a customer, I can submit an appointment request. </li>

   a. Click on “APPOINTMENT REQUEST”, in the above URL
  
   b. Choose “Phone” for “Selection Appointment Type”
  
   c. Choose a day one week from now and time as 10 AM
   
   d. Enter data for all fields (name, email, phone, comments, checkbox)
   
   e. Click on “SEND REQUEST”
  
  
  <h2> Notes </h2>
  
  |  Code    |    Description  |
  |------|------|
  | sallysellers_title_spec.js    | Verify if the title od the page is correct     |
  | sallysellers_livechat_spec.js | Verify if the text "Unavailable" is displaying |
  |                               | Verify if the color of the text is red         |
  | sallysellers_appointreq_spec.js | I got stuck on Xpath and the code is NOT done.  I am going to describe how I would test this  manualy.  Please check the link below: |
  |                                 |                                                                                                                 |
 
 ![Alternate image text](https://github.com/denisdeo/salesfloor/blob/main/appointmenttype.png)
  
   
   <h2> References
     
      -Install webdriverio https://webdriver.io/docs/gettingstarted/
