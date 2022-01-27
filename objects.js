// hmm.....
const playerName = "sangwon";
const playerPoints = 10;
const playerHandsome = true;
const playerFat = "normal";

// better!
const player = {
  name: "sangwon",
  points: 10,
  handsome: true,
  fat: "normal",
};
player["more"] = "what?";
player.something = "beautiful";
console.log(player);
console.log(player.name, player.handsome);
console.log(player["points"]);
