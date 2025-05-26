var total = 0;

function addvalue() {
 
  var entryElement = document.getElementById("newEntry"),
    entriesElement = document.getElementById("entries"),
    totalElement = document.getElementById("total");

 

  var entry = entryElement.value;
  entry = parseFloat(entry);
  var currency = currencyFormat(entry);

  

  var entriesHTML = entriesElement.innerHTML;
 
  entriesHTML = entriesHTML + "<div>" + currency + "</div>";
 
  entriesElement.innerHTML = entriesHTML;

  total = total + entry;

  totalElement.innerHTML = currencyFormat(total);

  entryElement.value = "";
}

function currencyFormat(number) {
  var currency = parseFloat(number); //Force as number
  currency = currency.toFixed(2); //Force as number with 2 decimal places
  currency = "$" + currency;
  return currency;
}


document.getElementById("entryBtn").onclick = addvalue;


