//https://aaravshah1902pokemon.github.io/c-105-/

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else {
        console.log(results);
        randomNumberR = Math.floor(Math.random()*255)+1;
        randomNumberG = Math.floor(Math.random()*255)+1;
        randomNumberB = Math.floor(Math.random()*255)+1;
    }
}