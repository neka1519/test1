
var chef; 
var badFoods;
var goodFoods;
var score = 0
var prize;
var prizes;
var badBurger, badPie, badEyescream, badNachos, badPizza, badSandwich, badCheese;
var hotdog, pasta, pie, sandwich, taco, turkey, cake, extraLifeImg, poisionImg, protien, rawFood;
var chefImg, backgroundImg;
var cakeS;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var cakesGroup;
var gameOverImg, gameOverr;
var lives = 3;
var bf,gf;
function preload(){

    gameOverImg = loadImage("Assets/gameOver.png");

    badBurger = loadImage("Assets/badfood/badBurger.png")
    badPie =  loadImage("Assets/badfood/badPie.png")
    badEyescream =  loadImage("Assets/badfood/Eyescream.png")
    badNachos =  loadImage("Assets/badfood/grossNachos.png")
    badPizza =  loadImage("Assets/badfood/grossPizza.png")
    badSandwich =  loadImage("Assets/badfood/staleSandwich.png")
    badCheese =  loadImage("Assets/badfood/stinkyCheese.png")

    hotdog =  loadImage("Assets/goodfood/hotdog.png")
    pasta =  loadImage("Assets/goodfood/pasta.png")
    pie =  loadImage("Assets/goodfood/pie.png")
    sandwich =  loadImage("Assets/goodfood/sandwich.png")
    taco =  loadImage("Assets/goodfood/taco.png")
    turkey =  loadImage("Assets/goodfood/turkey.png")
    
    cake =   loadImage("Assets/specialFoods/cake.png")
   extraLifeImg =   loadImage("Assets/specialFoods/extralife.png")
   poisionImg =  loadImage("Assets/specialFoods/poison.png")
   protien  =   loadImage("Assets/specialFoods/protien.png")
   rawFood  =   loadImage("Assets/specialFoods/rawfood.png")
   chefImg   =   loadImage("Assets/chef.png")
   backgroundImg  =   loadImage("Assets/Kitchenbg2.png")
}

function setup() {
    createCanvas(900,800)

    badFoods = new Group();
    goodFoods = new Group();
    prizes = new Group();
    cakesGroup = new Group();

chef = createSprite(450,750,50,50)
//chef.addImage(chefImg)

gameOverr = createSprite(200,200)
gameOverr.addImage(gameOverImg);
gameOverr.visible = false;

}

function draw(){
    background("black");
   // image(backgroundImg,0,0,900,800);

    textSize(25);
    fill("white");

    text("Score: "+score,67,50);
    text("Lives: "+lives,740,50);
  
    //PUNCH

    // Chef better

    if(gameState === PLAY){

        if(keyIsDown(RIGHT_ARROW)){
            chef.x +=4;
        }
    
        if(keyIsDown(LEFT_ARROW)){
            chef.x -=4;
        }
    
        if(chef.isTouching(goodFoods)){
            score += 5;
        }

        badFood();
        goodFood();
        pize();
        specialCake();
        drawSprites();

        if(badFoods.isTouching(chef)){
          gameState = END;
        }

        

    }
    else if(gameState == END){
        gameOverr.visible = true;
    
    }

 



   
    
}


function badFood(){

    if(frameCount %100 === 0){
        var bf = createSprite(200,50)
        bf.x = Math.round(random(100,700));
        bf.velocityY = 6;
        var rand = Math.round(random(1,7))
        switch(rand){

            case 1: bf.addImage(badBurger)
            break;

            case 2: bf.addImage(badCheese)
            break;

            case 3: bf.addImage(badEyescream)
            break;

            case 4: bf.addImage(badNachos)
            break;

            case 5: bf.addImage(badPie)
            break;

            case 6: bf.addImage(badPizza)
            break;

            case 7: bf.addImage(badSandwich)
            break;

        }
        bf.scale = 0.4;
        bf.lifetime = 120
        bf.depth = chef.depth;
        chef.depth +=1
        badFoods.add(bf);
    }

    
}   

function goodFood(){

    if(frameCount %140 === 0){
        var gf = createSprite(200,50)
        gf.shapeColor = "blue";
        gf.x = Math.round(random(100,701));
        gf.velocityY = 6;
        var rand = Math.round(random(1,6))
        switch(rand){

            case 1: gf.addImage(hotdog)
            break;

            case 2: gf.addImage(pasta)
            break;

            case 3: gf.addImage(sandwich)
            break;

            case 4: gf.addImage(taco)
            break;

            case 5: gf.addImage(turkey)
            break;

            case 6: gf.addImage(pie)
            break;
        }
        gf.scale = 0.4
        gf.lifetime = 120
        gf.depth = chef.depth;
        chef.depth +=1
        goodFoods.add(gf);
    }
    
}   

function pize(){
 if(frameCount %200 ===0){
     prize = createSprite(Math.round(random(99,701)),50)
     prize.shapeColor = "green"
     prize.velocityY = 15;
     prize.lifetime = 120;
     prize.depth = chef.depth;
        chef.depth +=1
        prizes.add(prize);
    }
}

function specialCake(){
    if(frameCount %20 === 0){
        cakeS = createSprite(Math.round(random(99,701)),50)
        cakeS.addImage(cake);
        cakeS.scale = 0.27
        cakeS.velocityY = 10;
        cakeS.lifetime = 120;
        cakeS.depth = chef.depth;
        chef.depth +=1
        cakesGroup.add(cakeS)
        if(cakeS.isTouching(chef)){
            chef.scale = 0.7
            console.log("logggg");
        }
    }

}

