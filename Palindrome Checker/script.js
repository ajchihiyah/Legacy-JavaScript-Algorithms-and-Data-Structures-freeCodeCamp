var checkButton = document.getElementById("checkPalindrome");

function palindrome(str) {
  'use strict';
  
  str = str.replace(/[^a-z0-9]+/gi, "").toLowerCase();
  var reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}


checkButton.addEventListener("click", function() {
  'use strict';
  
  var value = document.getElementById("inputPalindrome").value;
  var notification = document.getElementById("notification");
  
  if(palindrome(value)) {
    notification.innerHTML = "Yes, this string is a palindrome.";
    notification.className = "alert alert-success";
  } else {
    notification.innerHTML = "No, this string is not a palindrome.";
    notification.className = "alert alert-danger";
  }
});
