var images = document.querySelector('img');

images.onclick = function(){

    var mySrc = this.getAttribute('src');
    if(mySrc === 'images/firefox.png'){
        images.setAttribute('src','images/ass.jpg');
    } else{
        images.setAttribute('src','images/firefox.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
    var myName = prompt('Введите Ваше имя');
    localStorage.getItem('name', myName);
    myHeading.textContent ='Приветствуем на нашем сайте '+ myName;
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Приветствуем на нашем сайте' + storedName;
}

myButton.onclick = function(){
    setUserName();
}