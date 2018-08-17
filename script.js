var database = [
{
	username: "Abhi",
	password: "1234"
}
];
var newsFeed = [{
	username:"Dhruv",
	timeLine:"Good morning"
},{
	username:"ANBC",
	timeLine:"Helloe"
}
];
var userNamePrompt =prompt("What is your username");
var passwordPrompt= prompt("What is your password");

function signIn(user,pass){
	if(user===database[0].username && pass===database[0].password){
		console.log("Hello"+user);
	}
	else{
		alert("Please check your ussername and password");
	}
} 
signIn(userNamePrompt,passwordPrompt);