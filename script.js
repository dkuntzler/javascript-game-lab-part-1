const answer = prompt("Do You Want To Play?");
  if (answer === "yes") {
    const name = prompt("What Is Your Character's Name?");
    
    let health = 40;
    let grant = 10;
    let wins = 0;

    while (grant > 0 && wins < 3) {
        health -= (Math.floor((Math.random() * 2) + 1));
        grant -=(Math.floor((Math.random() * 2) + 1));
      console.log(`${name} has ${health} health left`);
      console.log(`Grant the Mighty Chicken has ${grant} health left`);
    }
    if(grant <= 0) {
      wins++; grant=10;
      console.log(`${name} has won the game!`)
    }
  



  }
  else if (answer === "no") {
    const name = alert("Too bad!");
  }
