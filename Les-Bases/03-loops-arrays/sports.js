var sportsOne = ["Golf", "Crickets", "Tennis", "Swimming"];
for (var i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}
console.log("**boucle simplifié**");
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var tempSport = sportsOne_1[_i];
    console.log(tempSport);
}
console.log("**Ajoutons les conditions**");
for (var _a = 0, sportsOne_2 = sportsOne; _a < sportsOne_2.length; _a++) {
    var tempSport = sportsOne_2[_a];
    if (tempSport == "Tennis") {
        console.log(tempSport + " << My favorite");
    }
    else {
        console.log(tempSport);
    }
}
