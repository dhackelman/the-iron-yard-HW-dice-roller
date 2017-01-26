const dropDice = {
  diceDate: new Date,
  dateLocation: document.querySelector('.current-date-time'),
  rollerBtn: document.querySelector('.roller'),
  dice1: document.querySelector('.dice-one'),
  dice1Image: null,
  dice2: document.querySelector('.dice-two'),
  dice2Image: null,
  dice1Array: [
    "images/dice-1.svg",
    "images/dice-2.svg",
    "images/dice-3.svg",
    "images/dice-4.svg",
    "images/dice-5.svg",
    "images/dice-6.svg"
  ],
  dice2Array: [
    "images/dice-1-copy.svg",
    "images/dice-2-copy.svg",
    "images/dice-3-copy.svg",
    "images/dice-4-copy.svg",
    "images/dice-5-copy.svg",
    "images/dice-6-copy.svg"
  ],
  i: 0,
  userScore: 0,
  gameOutcome: document.querySelector('.round-stats'),
  rollCounter: document.querySelector('.roll-stats'),
  logWins: document.querySelector('.win-total'),
  logLosses: document.querySelector('.loss-total'),
  winTotal: 1,
  lossTotal: 1,
  rollNumber: 1,

  rounds: [
      //store information about round 1 (outcome: win or loss)
      //store "round" + i + "outcome=" win or lose? + diceDate

  ],

  winnerFunction() {
    this.gameOutcome.innerHTML = `Winner! It took you ${this.i} tries!`;
    this.rollCounter.innerHTML = ``;
    this.logWins.innerHTML = this.winTotal++;
    this.rollNumber = 1;
  },

  loserFunction() {
    this.gameOutcome.innerHTML = `Roll Again!`;
    this.rollCounter.innerHTML = `This is roll # ${this.rollNumber++}.`;
    this.logLosses.innerHTML = this.lossTotal++;
  },

  gameLength() {},


  //run randomArray generator for dice 1 and assign it to array index
  rollDice() {
    //I can't just use the rand# for my array, I need to store those values each time to make comparisons/calculations
    let rand1 = Math.floor(Math.random()*6)+0;
    let rand2 = Math.floor(Math.random()*6)+0;
    this.userScore= rand1 + rand2;
    this.dice1Image = this.dice1Array[rand1];
    this.dice2Image = this.dice2Array[rand2];
    this.i++;
  },

  winOrLose() {
    //I need to calculate totals of images (i.e. I need to store their value, not just use it)
    //don't forget to add rand #s +2 because rand #s were zero-indexed to fit array
    //how do I get winOrLose to reset on every click event?
    console.log(this.userScore + 2);

    if (this.userScore+2 === 7) {
      this.winnerFunction();
      this.rounds.push(this.i + "," + "winner, " + this.diceDate);
      console.log(this.rounds);
      //run function to push results/round# to our rounds array
      this.i=0;
      return; //why do I want this return to happen?

    } else if (this.userScore+2 === 11) {
      this.winnerFunction();
      this.rounds.push(this.i + "," + "winner, " + this.diceDate);
      console.log(this.rounds);
      this.i=0;
      return;

    } else {
      this.loserFunction();
      this.rounds.push(this.i + "," + "loser, " + this.diceDate);
      console.log(this.rounds);
      return;
    }
  },

  updateDiceImages() {
    this.dice1.innerHTML = "<img src=" + this.dice1Image + ">";
    this.dice2.innerHTML = "<img src=" + this.dice2Image + ">";
  },

  init() {
    //set Date on page load
    this.dateLocation.innerHTML = this.diceDate;
    //run eventListener
    this.rollerBtn.addEventListener('click', () => {
      event.preventDefault();

      this.dateLocation.innerHTML = this.diceDate;
      this.rollDice();
      this.updateDiceImages();
      this.winOrLose();


    })
  }
}

dropDice.init();
