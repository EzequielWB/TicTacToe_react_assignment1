export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>Terminado!</h2>
      {winner && <p>{winner} ganó!</p>}
      {!winner && <p>Es un empate!</p>}
      <p>
        <button onClick={onRestart}>Revancha!</button>
      </p>
    </div>
  );
}
