var PC, spikes, enemy, TUTORIAL;
var game, form, HP;
var jewel;
var gameState = 0;
//0=Start 1=play 2=end

function preload()
{
  //GFX FOR THE GAME...
  pc = loadImage("sprites/megaman.png");
  spikes = loadImage("sprites/spikes.png");
  storyLine = loadImage("sprites/Storyline.png");
  TUTORIAL = loadImage("sprites/Tutorial.png");
  backgroundNight = loadImage("sprites/night background.jpg");
  backgroundDay = loadImage("sprites/forest day.png");
  
  //SOUNDS FXs FOR GAME...
  formSound = loadSound("sprites/Background Game(Horror).mp3");
  backgroundSong = loadSound("sprites/Background Game.mp3");
  buttonClick = loadSound("sprites/Button Click.mp3");
  walking = loadSound("sprites/Walking.mp3");

}
function setup() {
  createCanvas(displayWidth, displayHeight);
  game = new Game();
  game.start();
}

function draw() {
  background(backgroundDay);
 
 if(gameState == 1)
  {
    clear();
    background(backgroundNight);
    game.play();
  }
  else if(gameState == 0)
  {
    image(storyLine, displayWidth/6 - 25, displayHeight/6 - 50, 800, 400);
  }
  else if(gameState == 3)
  {
    image(TUTORIAL, displayWidth/6, displayHeight/5, 800, 400);
  }
  else if(gameState == 2)
  {
    game.end();
  }
}

