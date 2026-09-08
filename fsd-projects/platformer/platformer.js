$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform (200, 700, 80, 20, "lime");
    createPlatform (400, 620, 10, 20, "lime");
    createPlatform (480, 620, 10, 20, "lime");
    createPlatform (600, 580, 10, 20, "lime");
    createPlatform (720, 300, 10, 300, "white");
    createPlatform (710, 540, 10, 20, "lime");
    createPlatform (710, 410, 10, 20, "lime");
    createPlatform (710, 300, 30, 20, "lime");
    createPlatform (730, 410, 40, 20, "lime");
    createPlatform (730, 540, 40, 20, "lime");
    createPlatform (790, 620, 10, 20, "lime");
    createPlatform (1000, 620, 10, 20, "lime");
    createPlatform (1200, 620, 10, 20, "lime");
    createPlatform (550, 200, 10, 20, "lime");
    createPlatform (350, 200, 10, 20, "lime");
    createPlatform (250, 250, 60, 20, "lime");

    // TODO 3 - Create Collectables
    createCollectable("fwog", 370, 400, 0.1, 1);
    createCollectable("reedling", 200, 500);
    createCollectable ("pummel", 300, 200);
    createCollectable("pango", 700, 380, 0.1, 1);
    createCollectable("potbelly", 1200, 380, 0.1, 1);

    // TODO 4 - Create Cannons

    createCannon("top", 200, 100, 10);
    createCannon("right", 710, 2);
    createCannon("right", 440, 1900);
    
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
