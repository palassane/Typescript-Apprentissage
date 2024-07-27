let sportsOne: string[] = ["Golf", "Crickets", "Tennis", "Swimming"];

for(let i = 0; i < sportsOne.length; i++){
  console.log(sportsOne[i]);
}


console.log("**boucle simplifié**");
for(let tempSport of sportsOne){
  console.log(tempSport);
}

console.log("**Ajoutons les conditions**");
for(let tempSport of sportsOne){
  if (tempSport == "Tennis"){
    console.log(tempSport + " << My favorite");
  }
  else{
    console.log(tempSport);
  }
}