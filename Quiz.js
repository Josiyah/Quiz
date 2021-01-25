class Quiz{
    constructor(){}

    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
        gameState = data.val();
    })
    }

    update(){
        database.ref('/').update()
    }

    async start(){
        if(gameState === 0){
            contestant = new Contestant();
            question = new Question();
        }
    }
}