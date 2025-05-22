import { useState } from "react";
import "./App.css";
import Board from "./Board";
import Square from "./Square";

function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  console.log("squares ", history);
  const [xIsNext, setXIsNext] = useState(true);
  // 이동 기록
  const [currentMove, setCurrentMove] = useState(0);

  const currentSquares = history[currentMove];

  const handlePlay = (nextSquare) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquare];
    setXIsNext(!xIsNext);
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 == 0);
  };

  const moves = history.map((squares, order) => {
    let desc;
    if (order > 0) {
      desc = "Go to movie #" + order;
    } else {
      desc = "Go to game start";
    }
    return (
      <li key={order}>
        <button onClick={() => jumpTo(order)}>{desc}</button>
      </li>
    );
  });

  return (
    <>
      <div>
        <div className="mt-5">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
        <div>
          <ul>{moves}</ul>
        </div>
      </div>
    </>
  );
}

export default App;
