var name = prompt("Enter your name: ");
var age = parseInt(prompt("Enter your age: "));
var gender = prompt("Enter your gender: ");
var bloodgroup = prompt("Enter you blood group: ");
var occupation = prompt("Enter your occupation: ");

document.getElementById('welcome-text').innerHTML = "Hi " + name + "!" +"</br>" + "Welcome to my website";


document.getElementById('user-info').innerHTML ="</br>" + "</br>" +"Users Information" + "</br>" + "Name: "+ name +"</br>" + "Age: "+ age +"</br>" +
"Gender: "+ gender +"</br>" + "Bloodgroup: "+ bloodgroup +"</br>" + "Occupation: "+ occupation +"</br>";

function hideInfo(){
    x=document.getElementById('user-info');
    x.style.display="none";
}

function showInfo(){
    x=document.getElementById('user-info');
    x.style.display="block";
}
