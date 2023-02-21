import './App.css';
import {useState, useEffect} from 'react'

// IMPORT COMPONENTS
import Square from './components/Square';
import { Patterns } from './Patterns';

function App() {

  // ! useState
  // BOARD
  const [board, setBoard] = useState(["","","","","","","","","","",])
  // PLAYER 
  const [player, setPlayer] = useState('O');
  // RESULTS
  const [result, setResult] = useState({winner: "none", state: "none"});

  // ! useEffect
    useEffect( () => {
      checkWin();
      checkIfTie();

      if (player == "X") {
        setPlayer("O");
      } else {
        setPlayer("X");
      }
    }, [board]);

    useEffect(() => {
      // IF STATEMENT IS NEEDED IN ORDER FOR THE ALERT TO ONLY SHOW WHEN SOMEONE WINS
      if (result.state != "none") {
        alert(`GAME IS FINISHED! WINNING PLAYER: ${result.winner} ` )
        restartGame()
      }
    }, [result]);

// ! FUNCTIONS
  // FUNCTION TO CHOOOSE WHICH SQUARE IS UPDATED - CALLED WHENEVER A SQUARE IS CLICKED
  const chooseSquare = (square) => {
    setBoard(board.map((val,idx) => {
    if (idx == square & val == '') {
      return player
    }

      return val;
    })
  );
    }

  // FUNCTION TO CHECK WINNER
  const checkWin = () => {
    Patterns.forEach((currPattern) => {
      const firstPlayer = board[currPattern[0]];
      if (firstPlayer == "") return;
      let foundWinningPattern = true;
      currPattern.forEach((idx) => {
        if (board[idx] != firstPlayer) {
          foundWinningPattern = false;
        }
      });
      // FOUND THE WINNER
      if (foundWinningPattern) {
        setResult({ winner: player, state: "YOU HAVE WON"});
      }
  });
  }

  // IF TIED
  const checkIfTie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square == "") {
        filled = false;
      }
  });

  if (filled) {
    setResult({ winner: "No Winner", state: "Tie"});
  }
};

// RESTART GAME WITHOUT REFRESHING
const restartGame = () => {
  setBoard(["","","","","","","","","","",])
  // SET "O" TO START WITH "X" AS FIRST PLAYER DUE TO useEffect rendering immediattely
  setPlayer("O")
}

// RETURN/RENDER JSX
  return (
    <div className="App">
      
      {/* ROW 1 START */}
      <div className='board'>
        <h1 className='h1'> TIK-TAK TOE</h1>

        <div className='row'>

          <Square 
            val={board[0]} 
            chooseSquare={ () => {
            chooseSquare(0);
            }} 
          />

          <Square 
            val={board[1]} 
            chooseSquare={ () => {
            chooseSquare(1);
            }} 
          />

          <Square 
            val={board[2]} 
            chooseSquare={ () => {
            chooseSquare(2);
            }} 
          />
        {/* ROW 1 ENDS */}
        </div>
        
        {/* ROW 2 START */}
        <div className='row'>

          <Square 
              val={board[3]} 
              chooseSquare={ () => {
              chooseSquare(3);
              }} 
            />

          <Square 
              val={board[4]} 
              chooseSquare={ () => {
              chooseSquare(4);
              }} 
            />

            <Square 
              val={board[5]} 
              chooseSquare={ () => {
              chooseSquare(5);
              }} 
            />
         {/* ROW 2 ENDS */} 
        </div>

        {/* ROW 3 STARTS */}
        <div className='row'>

          <Square 
              val={board[6]} 
              chooseSquare={ () => {
              chooseSquare(6);
              }} 
            />

          <Square 
              val={board[7]} 
              chooseSquare={ () => {
              chooseSquare(7);
              }} 
            />
            
          <Square 
            val={board[8]} 
            chooseSquare={ () => {
            chooseSquare(8);
            }} 
          />
        {/* ROW 3 ENDS */}
        </div>
        

      </div>
    
    </div>
  );
}

export default App;
