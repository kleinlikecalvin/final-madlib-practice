//Get the button and add event
var btn = document.getElementById("story-btn");
btn.addEventListener('click', testInput);

//prevent default form actions
const form = document.forms["form"];
form.addEventListener('submit', event => event.preventDefault());

//Get and test input
function testInput() {
    if (form.checkValidity()) {
        dazzle();
    }
}

//Generate story
var name1 = document.getElementById("name");
var verb = document.getElementById("verb");
var number = document.getElementById("number");

function dazzle() {
    var title = document.getElementById("title");
    var story = document.getElementById("story");
    title.innerText = "The Final Countdown";
    story.innerText = "It was the night of the big kaboom. About " + number.value + " or so days ago... I remember " + name1.value + " had been planning a trip down to the lake in the morning, we had no idea how much our lives wee about to change. We were widdlin' on the porch staring out into the distance. \"The sky is puttin on a show tonight, alright.\"" + name1.value + " said to me. There were huge stars speeding across the sky . One of them stars, or so we thought, was coming straight at us. It got bigger and bigger so obviously we hopped in the truck and drove as fast as we could. Needless to say, half our crop was destroyed along with the lake. Man, I am " + verb.value + " myself for not being a superhero.";
}