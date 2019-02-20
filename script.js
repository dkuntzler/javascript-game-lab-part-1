
 function startGame() { 
  const answer = prompt("Do You Want To Play?");
   if (answer === "yes")  {
    const username = prompt("What Is Your Character's Name?");
    startCombat(username);
}   else if (answer === "no") {
  const startCombat = alert("Too bad!");
 }
}
  
   function startCombat(username) { 
    let health = 40;
    let grant = 10;
    let wins = 0;
 
    function getDamage() { 
      health -= (Math.floor((Math.random() * 5) + 1));
      grant -=(Math.floor((Math.random() * 5) + 1)); 
    console.log(`${username} has ${health} health left`);
    }
      
      while (grant > 0 && health > 0 && wins < 3){
        const attack = prompt("Would you like to attack or quit?");
        if (attack === "attack"){

          console.log(`Dana chose to attack`);
          getDamage();
      console.log(`Grant the Mighty Chicken has ${grant} health left`);
        } else if (attack ==="quit") {
          console.clear();
         break;
        }
    
    if(grant <= 0) {
      wins++; grant=10;
      console.log(`${username} has won the game!`);
      //alert(`${username} has won the game!`);
     

    } else if (health <= 0) {
      console.log(`${username} has lost the game!`)
    }
  }
  }

 

  
  /*else (startGame === "no") {
    const startCombat = alert("Too bad!");
  }*/
