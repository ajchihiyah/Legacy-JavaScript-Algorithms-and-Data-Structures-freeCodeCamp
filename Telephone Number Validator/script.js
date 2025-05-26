
var input = document.querySelector( 'input' ),
	button = document.querySelector( 'button' ),
	feedback = document.querySelector( '#feedback' );


button.addEventListener( 'click', function() {
	checkInput( input.value );
});

input.addEventListener( 'keypress', function(event) {
	if( event.key === 'Enter' ) {
		checkInput( this.value );
	}
});


function checkInput( str ) {
	var check = telephoneCheck( str );
	if( check ) {
		feedback.textContent = "Your telephone number is valid!"
	} else {
		feedback.textContent = "Your telephone number is not valid!"
	}
}

function telephoneCheck(str) {
	
	let regexStr ='^(1[ -]?)?' + '(\\((?=\\d{3}\\)))?\\d{3}((?<=\\(\\d{3})\\))?' + '[ -]?\\d{3}[ -]?\\d{4}$';
	let regex = new RegExp(regexStr);

	return regex.test(str);
}