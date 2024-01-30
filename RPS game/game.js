let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0}

        // if(!score){
        //     score ={
        //         wins: 0,
        //         losses: 0,                     //!score is similar to score === null consition
        //         ties: 0
        //     }
        // }

        updateScore();

        function playGame(playerMove){
            const computersMove = pickComputersMove();
            let results = '';
            if(playerMove === 'Rock'){
               
                if(computersMove === 'rock'){
                    results = 'both tie';
                }else if(computersMove === 'paper'){
                    results = 'you lose';
                }else if(computersMove === 'scissors'){
                    results = 'you win';
                }
            }else if(playerMove === 'Paper'){
                
                if(computersMove === 'rock'){
                    results = 'you win';
                }else if(computersMove === 'paper'){
                    results = 'both tie';
                }else if(computersMove === 'scissors'){
                    results = 'you lose';
                }
            }else if(playerMove === 'Scissors'){
                
                if(computersMove === 'rock'){
                    results = 'you lose';
                }else if(computersMove === 'paper'){
                    results = 'you win';
                }else if(computersMove === 'scissors'){
                    results = 'both tie';
                }
            }

            if(results === 'you win'){
                score.wins += 1;
            } else if(results === 'you lose'){
                score.losses += 1;
            } else if(results === 'both tie'){
                score.ties += 1;
            }

            //there is a consept called localstorage in js. usually all the variables will be ang reset when we load the page.to avoid that we will use local storage.
        //sytax
        localStorage.setItem('score',JSON.stringify(score));  // localstorage supports only strings.
        
        updateScore();
           
        
        document.querySelector('.js-result').innerHTML = `${results}`;
        document.querySelector('.js-moves').innerHTML = `you : <img class="image" src="images/${playerMove}-emoji.png">, computer : <img class="image" src="images/${computersMove}-emoji.png"> `;
           

        }

        function updateScore(){
            document.querySelector('.js-score').innerHTML = `Wins : ${score.wins}, Losses : ${score.losses}, Ties : ${score.ties}`;

        }
        function pickComputersMove(){
            let randomNumber = Math.random();
            let computersMove ='';
            
            if(randomNumber <= 1/3){
                computersMove = 'rock';
            } else if(randomNumber > 1/3 && randomNumber <= 2/3){
                computersMove = 'paper';
            } else if(randomNumber > 2/3){
                computersMove = 'scissors';
            }
            
            return computersMove;
        }
        