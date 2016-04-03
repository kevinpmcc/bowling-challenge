function Game () {
  this.rolls = [];
}

Game.prototype.rollBall = function(pins) {
  this.rolls.push(pins);
}

Game.prototype.score = function() {
  var score = 0; 
  for (var rollsIndex = 0; rollsIndex < 20; rollsIndex+=2) {
    if (this.rolls[rollsIndex] + this.rolls[rollsIndex + 1] === 10) {
      score += this.spareScore(rollsIndex) 
    } else if (this.rolls[rollsIndex] === 10) {
        this.rolls.splice(rollsIndex+1, 0, 0)
        score += this.strikeScore(rollsIndex) }
    else {
    score += this.rolls[rollsIndex] + this.rolls[rollsIndex + 1]
    }
  }
  return score
}

Game.prototype.spareScore = function(rollsIndex) {
 return  this.rolls[rollsIndex] + this.rolls[rollsIndex + 1] + this.rolls[rollsIndex + 2]
}

Game.prototype.strikeScore = function(rollsIndex) {
  return this.rolls[rollsIndex] + this.rolls[rollsIndex + 2] + this.rolls[rollsIndex + 3]
}


