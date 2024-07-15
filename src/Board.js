import Dice from "./Dice";
import "./Board.css";

function Board({ name, color, gameHistory }) {
  // gameHistory 배열에서 마지막으로 나온(length뒤에 - 1) 주사위 숫자를 가져온다.
  // 만약 gameHistory가 비어 있다면(주사위를 아직 던지지 않았다면), 기본값으로 1을 사용.
  const num = gameHistory[gameHistory.length - 1] || 1;
  // gameHistory 배열의 모든 숫자를 더해서 총점을 계산한다.
  // 배열이 비어 있으면, 총점은 0이다.
  const sum = gameHistory.reduce((a, b) => a + b, 0);
  return (
    <div className="game-border">
      <h1>{name}</h1>
      <Dice color={color} num={num} />
      <h2>총점</h2>
      <p>{sum}</p>
      <h2>기록</h2>
      <p>{gameHistory.join(", ")}</p>
    </div>
  );
}

export default Board;
