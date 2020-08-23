class Game
{
    constructor()
    {

    }
    
    start()
    {
        form = new Form();
        form.display();
    }

    play()
    {
        PC = createSprite(displayWidth/10, displayHeight/2+displayHeight/3);
        PC.addImage("playingCharacter", pc);
        PC.scale = 0.1;

        if(keyIsDown(RIGHT_ARROW))
        {
            PC.velocityX = 5;
        }

        if(keyIsDown(LEFT_ARROW))
        {
            PC.velocityX = -5;
        }

        if(keyIsDown(UP_ARROW))
        {
            PC.velocityY = -5;
        }

        //Gravity for the game
        PC.y = PC.y + 0.8;

        drawSprites();
    }


    end()
    {

    }
    
}
