hooks = require('hooks');
booking_reference = "";
reservation_reference = "";

hooks.afterEach(function (transaction) {       
  var response_type = JSON.parse(transaction.real.body)['response_type'];    
  var data = JSON.parse(transaction.real.body)['data'];    
    /*if(response_type === 'booking')
    {      
      booking_reference = data['booking_reference'];       
    } 
    if(response_type === 'reserve')
    {   
      reservation_reference = data['reservation_reference'];       
    }*/
});

// Add the token to all HTTP transactions
hooks.beforeEach(function (transaction) {    
  
  transaction.request['headers']['TOKEN'] = 'SK1-MN2U-RS27-SWT';
  
  var requestBody = JSON.parse(transaction.request.body);  
   /*if(JSON.parse(transaction.request.body)['request_type'] === 'cancel_reserve')
    {             
      hooks.log('reservation_reference: ' + reservation_reference);      
      requestBody['data']['reservation_reference'] = reservation_reference;
      transaction.request.body = JSON.stringify(requestBody, null, 2);  
    }
    if(JSON.parse(transaction.request.body)['request_type'] === 'update_booking')
    {          
      hooks.log('booking_reference: ' + booking_reference);      
      requestBody['data']['booking_reference'] = booking_reference;
      transaction.request.body = JSON.stringify(requestBody, null, 2);  
    }
    if(JSON.parse(transaction.request.body)['request_type'] === 'cancel_booking')
    {              
      hooks.log('booking_reference: ' + booking_reference);      
      requestBody['data']['booking_reference'] = booking_reference;
      transaction.request.body = JSON.stringify(requestBody, null, 2);  
    }*/
});
