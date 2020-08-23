class Form
{
    constructor()
    {
        this.start = createButton('START');
        this.tutorial = createButton('HOW TO PLAY');
        this.back = createButton('⬅BACK');
       // this.story = createSprite(displayWidth/2, displayHeight/2 - 200);
       //this.story.addImage("story", storyLine);
    }

    hide()
    {
        this.start.hide();
        this.tutorial.hide();
        this.story.hide();
    }

    display()
    {
        this.start.position(displayWidth/2, displayHeight/2+displayHeight/4);
        this.tutorial.position(displayWidth/2-25, displayHeight/2+displayHeight/4+50);
        this.back.position(25, 20);
        this.start.mousePressed(() =>
        {
            this.start.hide();
            this.tutorial.hide();
            this.back.hide();
            gameState = 1;
            game.play();
        })
        
        this.tutorial.mousePressed(() => 
        {
            this.start.hide();
            this.tutorial.hide();
            gameState = 3;
        })
        
        this.back.mousePressed(() => 
        {
            form = new Form();
            form.display();
            gameState = 0;
        })
    }
}