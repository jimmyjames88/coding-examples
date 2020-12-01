let userDataJSON = `{
    "username": "Jimmy", 
    "birthdate": "01/01/2006", 
    "level": 3 
}`;
console.log(userDataJSON);
let userData = JSON.parse(userDataJSON);
console.log(userData);

// pt 2.
userData = {
    username: "Jimmy", 
    birthdate: "01/01/2006", 
    level: 3 
};
userDataJSON = JSON.stringify(userData);
console.log('stringified object -->', userDataJSON)

