/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var togepi = document.querySelector('img');
var feedTogepi = document.querySelector('#feedTogepi');
var dancingTogepi = document.querySelector('#dancingTogepi');
var loveTogepi = document.querySelector('#loveTogepi');
var friendsTogepi = ['img/0.gif', 'img/1.gif', 'img/2.gif', 'img/3.gif', 'img/4.gif'];
var friendsbtn = document.querySelector('#friendsTogepi');
var btn = document.querySelector('#allGifs');

/* • https://www.youtube.com/watch?v=lecJ3ecLty8
• https://www.phphulp.nl/php/forum/topic/aftellen-vanaf-59-seconden/78764/ */
var food = 100;
var happy = 100;
var love = 100;

function teller() {
    document.querySelector('#food').innerHTML = food-- + '%';
    document.querySelector('#happy').innerHTML = happy-- + '%';
    document.querySelector('#love').innerHTML = love-- + '%';

    var total = food + happy + love;

    if (food <= 0 || happy <= 0 || love <= 0) {
        document.querySelector('#awakeTogepi').src = 'img/togepiDead.gif';
        document.querySelector('#h1').innerHTML = 'Breng ' + document.querySelector('input').value + ' weer tot leven!!!!'
    }
}

function Start() {
    var aftellen = setInterval(teller, 800);
}

Start();

/* • lamp opdracht
• https://www.youtube.com/watch?v=lecJ3ecLty8 */

function feedbtn() {
    togepi.src = 'img/togepiEat.gif';
    food = 100;
}

feedTogepi.addEventListener('click', feedbtn);

function dancebtn() {
    togepi.src = 'img/togepiDance.gif';
    happy = 100;
}

dancingTogepi.addEventListener('click', dancebtn);

function lovebtn() {
    togepi.src = 'img/togepiLove.gif';
    love = 100;
}

loveTogepi.addEventListener('click', lovebtn);


/* Student Marieke en docent Janno */

function gifs() {
    document.querySelector("#allGifs").innerText = null;
    for (var i = 0; i < friendsTogepi.length; i++) {
        var image = document.createElement("img");
        image.setAttribute("src", "img/" + i + ".gif");
        document.querySelector("#allGifs").appendChild(image);
    }
}

friendsbtn.addEventListener('click', gifs);

/* opdracht hello world */
function togepiForm(){
    event.preventDefault();
    document.querySelector('h1').textContent = "Hi " + document.querySelector('input').value;
    document.querySelector('form').classList.add("hidden");
}

document.querySelector('form').addEventListener('submit', togepiForm);

