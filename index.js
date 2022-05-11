let trys = 4;
let score = 0;
let numberGenerated = 0;
let bestScore=8;

let ramdomNumber = (max = 20, min = 1) => {
document.querySelector('#bestScore').innerHTML=`O melhor score é : ${bestScore}`
  numberGenerated = Math.floor(Math.random() * (max - min) + min);
  console.log(numberGenerated);
  return numberGenerated;
};
ramdomNumber();

function addScore() {
  score >= 0 ? score=score : (score = 0);
  document.querySelector('#score').innerHTML=`Seu score atual ${score}`;
}

function numberOfTry() {
    
  document.querySelector("#trys").innerHTML = `Numero de tentativas  ${trys}`;
   
}

function getGuess() {
  let guess = document.querySelector("#valorChutado").value;
  let post = Math.floor(document.querySelector("#post").innerHTML = guess);
  console.log(typeof post);
  numberOfTry();
  if(trys>0){
  if(post === numberGenerated){
    ramdomNumber();
    score++
    addScore()
    document.querySelector('#mainMessage').innerHTML=`Numero correto`

    
    
  } else {
      trys--
      score--;
      addScore()
      document.querySelector('#mainMessage').innerHTML=`Numero errado`
      console.log(trys);
  }}
  else{
       document.querySelector('#mainMessage').innerHTML=`Numero de tentativas esgotada clique em jogar novamente`
      return
  }

  

  
}
