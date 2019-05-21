


    
    //   <!-- <div class="container"> -->
    //     <form>
    //       <select name="X Value">
    //         <option value="75">A</option>
    //         <option value="125">B</option>
    //         <option value="175">C</option>
    //         <option value="225">D</option>
    //         <option value="275">E</option>
    //         <option value="325">F</option>
    //         <option value="375">G</option>
    //         <option value="425">H</option>
    //       </select>
    //       <select name="Y Value">
    //         <option value="75">1</option>
    //         <option value="125">2</option>
    //         <option value="175">3</option>
    //         <option value="225">4</option>
    //         <option value="275">5</option>
    //         <option value="325">6</option>
    //         <option value="375">7</option>
    //         <option value="425">8</option>
    //       </select>
    //       <button id="#sendTargetedMissile">Enter Coordinates and Send Missle</button>
    //     </form>
      
   

  //game board 
    const canvas = document.getElementById('battleGameCanvas');
    const ctx = canvas.getContext('2d');
    ctx.lineWidth = 4;
    ctx.font = '32px serif';

    // Draw grid
    ctx.strokeStyle = '#09f';
    ctx.beginPath();
    ctx.moveTo(0, 50);
    ctx.lineTo(450, 50);
    ctx.moveTo(0, 100);
    ctx.lineTo(450, 100);
    ctx.moveTo(0, 150);
    ctx.lineTo(450, 150);
    ctx.moveTo(0, 200);
    ctx.lineTo(450, 200);
    ctx.moveTo(0, 250);
    ctx.lineTo(450, 250);
    ctx.moveTo(0, 300);
    ctx.lineTo(450, 300);
    ctx.moveTo(0, 350);
    ctx.lineTo(450, 350);
    ctx.moveTo(0, 400);
    ctx.lineTo(450, 400);
    //vertical lines
    ctx.moveTo(50, 0);
    ctx.lineTo(50, 450);
    ctx.moveTo(100, 0);
    ctx.lineTo(100, 450);
    ctx.moveTo(150, 0);
    ctx.lineTo(150, 450);
    ctx.moveTo(200, 0);
    ctx.lineTo(200, 450);
    ctx.moveTo(250, 0);
    ctx.lineTo(250, 450);
    ctx.moveTo(300, 0);
    ctx.lineTo(300, 450);
    ctx.moveTo(350, 0);
    ctx.lineTo(350, 450);
    ctx.moveTo(400, 0);
    ctx.lineTo(400, 450);
    ctx.stroke();
    //create grid labels
    ctx.fillText('A', 60, 30);
    ctx.fillText('B', 115, 30);
    ctx.fillText('C', 160, 30);
    ctx.fillText('D', 215, 30);
    ctx.fillText('E', 270, 30);
    ctx.fillText('F', 315, 30);
    ctx.fillText('G', 360, 30);
    ctx.fillText('H', 420, 30);
    ctx.fillText('1', 15, 80);
    ctx.fillText('2', 15, 130);
    ctx.fillText('3', 15, 185);
    ctx.fillText('4', 15, 235);
    ctx.fillText('5', 15, 280);
    ctx.fillText('6', 15, 330);
    ctx.fillText('7', 15, 380);
    ctx.fillText('8', 15, 435);
//create game functionality
    document.getElementById("#beginGame").on("click", function placeShips() {
      alert("the enemy is now hiding ");
      //set line width
      ctx.lineWidth = 3;
      // ctx.globalAlpha = 0.0;
      //draw ships
      //TODO--need to randomize this still--for horiz we will only make x factor a variable, for vert ships onlyy factor a varaiable  and only possible places will not interfere with ithers
     //tugboat x possibilities is same for both as they cannot be in rowA or start past row G
      let tugboatXPossibilities = ["110","160","210","260","310","360"];
      var randTug1 = tugboatXPossibilities[Math.floor(Math.random() * tugboatXPossibilities.length)];
      var randTug2 =tugboatXPossibilities[Math.floor(Math.random() * tugboatXPossibilities.length)];
      let tanker1YPossibilities = ["60","110","160"];
      var randTanker1 = tanker1YPossibilities[Math.floor(Math.random() * tanker1YPossibilities.length)];
      let tanker2XPossibilities = ["60","110","160","210"];
      var randTanker2 = tanker2XPossibilities[Math.floor(Math.random() * tanker2XPossibilities.length)];
      let carrierYPossibilities = ["60","110","160","210","280"];
      var randCarrier = carrierYPossibilities[Math.floor(Math.random() * carrierYPossibilities.length)];
      ctx.fillRect(210, 210, 80, 20);//tugboat 2 -horiz
      ctx.fillRect(160, 110, 75, 20);//tugboat 1-horiz
      ctx.fillRect(55, 360, 130, 25);//tanker 2-horiz
      ctx.fillRect(360, 280, 25, 150);//carrier 1 -vert
      ctx.fillRect(60, 60, 25, 130);//tanker 1 - vert
    });
    var count = 0;
    var hit=0;
    document.getElementById(".sendMissile").on("click", function sendMissle() {
      ctx.globalAlpha = 1.0;
      var clicks = count++
      document.getElementById("#missileClicks").html(" ");
      document.getElementById("#missileClicks").append(clicks);
      console.log(count);
      console.log("hello");
      let xtargets = ["75", "125", "175", "225", "275", "325", "375", "425"];
      var randomXTargets = xtargets[Math.floor(Math.random() * xtargets.length)];
      let ytargets = ["75", "125", "175", "225", "275", "325", "375", "425"];
      var randomYTargets = ytargets[Math.floor(Math.random() * ytargets.length)];
      console.log("X" + randomXTargets);
      console.log("Y" + randomYTargets);
      if ((randomXTargets === "75" && randomYTargets === "75") || (randomXTargets === "75" && randomYTargets === "125")
        || (randomXTargets === "75" && randomYTargets === "175") || (randomXTargets === "175" && randomYTargets === "125") ||
        (randomXTargets === "225" && randomYTargets === "225") || (randomXTargets === "275" && randomYTargets === "225") ||
        (randomXTargets === "75" && randomYTargets === "375") || (randomXTargets === "125" && randomYTargets === "375") ||
        (randomXTargets === "175" && randomYTargets === "375") || (randomXTargets === "375" && randomYTargets === "275") ||
        (randomXTargets === "375" && randomYTargets === "325") || (randomXTargets === "375" && randomYTargets === "375") ||
        (randomXTargets === "375" && randomYTargets === "425") || (randomXTargets === "175" && randomYTargets === "125") ||
        (randomXTargets === "225" && randomYTargets === "125")) {
        console.log("hit target");
        ctx.fillStyle = "red"
        ctx.fillRect(randomXTargets, randomYTargets, 20, 20);
       var hits=++hit
       document.getElementById("#hits").html(" ");
       document.getElementById("#hits").append(hits);

      } else {
        console.log("splash");
        ctx.beginPath();
        ctx.arc(randomXTargets, randomYTargets, 15, 0, 2 * Math.PI);
        ctx.stroke();
      }

      // function sinkShip () {

      // }



    });




  