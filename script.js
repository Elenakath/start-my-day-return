var startMyDay = function () {
    return "Time for coffee and a shower!";
};

console.log(startMyDay());

var favoriteCookie = function (cookie) {
    return `My favorite cookie is ${cookie}`;
};

console.log(favoriteCookie("chocolate chip"));
alert(favoriteCookie("Chocolate cookie"));

var introduce = function (name, occupation) {
    return `I'm a ${occupation} and my name is ${name} :)`;
};

console.log(introduce("Elena", "Front-End Developer"));
alert(introduce("Hunter", "Bussiness man"));
introduce("Elena", "Living the dream");

var hydrationFeedback = function () {
    var numGlasses = Number(
        prompt("How many glasses of waater did you have today?"));
        if (numGlasses >= 8) {
            console.log("Congrats on getting enough water!");
        } else if (numGlasses < 8) {
            console.log("Not bad, Not bad");
        }
};

hydrationFeedback();