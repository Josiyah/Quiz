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
            var contestantCountRef = await database.ref('contestantCount').once("value");
            if(contestantCountRef.exists()){
                contestandtCount = contestantCountRef.val();
                contestant.getCount();
            }
            question = new Question();
            question.display();
        }
    }
}