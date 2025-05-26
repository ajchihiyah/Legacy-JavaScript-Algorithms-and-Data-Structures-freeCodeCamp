function runEncrypt(isDecrypt){
    var shift = document.getElementById("key").value;
    var plaintext = document.getElementById("plaintext").value;
    
    if(plaintext.length==0){
        alert("Plaintext/Ciphertext field cannot be empty!");
        return;
}
    var key = parseInt(shift, 10);
    if(key < 0 || key >= 26){
    alert("Shift is out of range(Range is from 0-26)");
    return;
}
    if(!/^-?\d+$/.test(shift)){
        alert("Key must be an Integer!");
        return;
}

if (isDecrypt)
    key = (26 - key) % 26;
    var plaintext = document.getElementById("plaintext");
    plaintext.value = caesarShift(plaintext.value, key);

}



function caesarShift(text, shift) {
    var ciphertext = "";
    
    for (var i = 0; i < text.length; i++){
        var ch = text.charCodeAt(i);
        
        if(65 <= ch && ch <=  90) {
            ciphertext += String.fromCharCode((ch - 65 + shift) % 26 + 65); 
        } 
        else if(97 <= ch && ch <= 122){
            ciphertext += String.fromCharCode((ch - 97 + shift) % 26 + 97);  
        }
        else{
            ciphertext += text.charAt(i);
        }
}
return ciphertext;
}  