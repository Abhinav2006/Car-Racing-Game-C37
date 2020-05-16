var ball, database;
var allPlayers;
var car1, car2;
var car3, car4;
var cars;

var gameState = 0, playerCount, form, player, game

function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
    database = firebase.database();
    game = new Game()
    game.getState();
    game.start();
}

function draw(){
    if(playerCount === 4){
        game.update(1);
    }
    if (gameState === 1){
        clear();
        game.play();
    }
}
