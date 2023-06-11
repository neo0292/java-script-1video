
let score = JSON.parse(localStorage.getItem('score'));
  if (score===null){
    score = {
      wins:0,
      losses:0,
      ties:0  
    };
  }
  // console.log(score);
  const scoreElement = document.querySelector('.js-score')
  
   let result;

function playGame(userMove){
  const compMove = pickCompMove();
    if(userMove === 'scissors'){
       if(compMove === 'rock'){
            result = 'You lose!'
       } else if(compMove === 'paper'){
          result = 'You win!';
       }else if(compMove === 'scissors'){
          result = 'tie';
       }
        
    }
    else if(userMove === 'paper'){
      if(compMove === 'rock'){
        result = 'You win!';
        } else if(compMove === 'paper'){
          result = 'tie';
        } else if(compMove === 'scissors'){
          result = 'You lose!';
        }
      
    }
   else if(userMove === 'rock'){ 
          if(compMove === 'rock'){
            result = 'tie';
          }else if(compMove === 'paper'){
            result = 'You lose!';
          }else if(compMove === 'scissors'){
            result = 'You win!';
          }         
    }
    
    if(result==='You win!'){
      score.wins++;
    } else if(result==='You lose!'){
      score.losses++;
    } else if(result==='tie'){
      score.ties++;
    }

    localStorage.setItem('score', JSON.stringify(score))// to save value of score localy
    
    document.querySelector('.js-result')
     .innerHTML = `Result is ${result}`;

     document.querySelector('.js-moveCompare')
      .innerHTML = `You pick ${userMove}  Vs  computer pick ${compMove}`;
      
     updateScore();
         
}




function updateScore(){
  let scoreElement = document.querySelector('.js-score');
  scoreElement.innerHTML = `wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
  console.log(scoreElement);
}
  function pickCompMove(){
    let randomNum = Math.random();
    
    if(randomNum >=0 && randomNum <1/3){
      compMove = 'rock';
      }
    else if(randomNum >=1/3 && randomNum < 2/3){
      compMove = 'paper';
      }
    else if(randomNum >=2/3 && randomNum < 1){
      compMove = 'scissors';
      }
    return compMove;
  }

