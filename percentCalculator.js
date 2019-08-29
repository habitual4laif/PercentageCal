var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var resultField = document.getElementById('resultField');
var form = document.getElementById('xIsWhatPercentOfY');

form.addEventListener('submit', function(event) {  //the 'event' here makes it possible with 'event.preventDefault()' for the answer remain in the screen and not show for miniseconds
   
    if(!numField1.value || !numField2.value){
        alert("Please enter values in the fields");
    } else {
        var x = parseFloat(numField1.value);
        var y = parseFloat(numField2.value);
        
        var result = x / 100;
        var percent = result * y;
      
        resultField.innerText ="Answer: " + percent + " is " + x + "% of " +y;
        event.preventDefault();
    }
    

});

