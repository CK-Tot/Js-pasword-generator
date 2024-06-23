const passwordBox  = document.getElementById('password');

const length = 18;


const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

const allChars = upperCase + lowerCase + numbers + symbols
const createPassword = () =>{
	let passowrd = "";

	passowrd += upperCase[Math.floor(Math.random() * upperCase.length)];
	passowrd += lowerCase[Math.floor(Math.random() * lowerCase.length)];
	passowrd += numbers[Math.floor(Math.random() * numbers.length)];
	passowrd += symbols[Math.floor(Math.random() * symbols.length)];

	while(length > passowrd.length){
		passowrd += allChars[Math.floor(Math.random() * allChars.length)];
	}


	passwordBox.value = passowrd;
}


const copyPassword = () =>{
	passwordBox.select();
	document.execCommand("copy")
}