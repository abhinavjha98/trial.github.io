var database = [
{
	username: "Abhi",
	password: "1234"
},
{
	username: "Dhruv",
	password: "007"
},
{
	username: "Abhinav",
	password: "123456"
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
function userValid(username,password){
	for (var i = 0; i < database.length; i++) {
		if(database[i].username===username && database[i].password===password){
			return true;
		}
	}return false;
}

var userNamePrompt =prompt("What is your username");
var passwordPrompt= prompt("What is your password");

function signIn(user,pass){
	if(userValid(user,pass)){
		console.log("Hello"+user);
	}
	else{
		alert("Please check your ussername and password");
	}
} 
signIn(userNamePrompt,passwordPrompt);