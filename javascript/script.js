var database = [
  {
    username: "joshualing",
    password: "123"
  },
  {
    username: "sally",
    password: "456"
  },
  {
    username: "ingram",
    password: "777"
  },
];

var newsfeed = [
  {
    username: "test1",
    timeline: "test1"
  },
  {
    username: "test2",
    timeline: "test2"
  },
  {
    username: "test3",
    timeline: "test3"
  },
]

var usernamePrompt = prompt("What's your username?");
var usernamePassword = prompt("What's your password?");

function isUserValid(username, password) {
  for (var i=0; i <database.length; i++) {
    if (username === database[i].username && password === database[i].password) {
      return true;
    } 
    // else {
    //   alert("Sorry, wrong username or password!");
    // }
  }
  return false;
}

function signIn(user, pass) {
  if(isUserValid(user, pass)) {
    console.log(newsfeed);
  } else {
    alert("Sorry, wrong username or password!");
  }
  // console.log(isUserValid(user, pass));

  // if (user === database[0].username && pass === database[0].password) {
  //   console.log(newsfeed);
  // } else {
  //   alert("Sorry, wrong username or password!");
  // }
}

signIn(usernamePrompt, usernamePassword);