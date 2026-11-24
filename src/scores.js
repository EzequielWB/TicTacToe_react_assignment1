export function addResult(scores, winner) {
  if (winner) {
    return {
      ...scores,
      [winner]: { ...scores[winner], wins: scores[winner].wins + 1 }
    };
  }

  return {
    X: { ...scores.X, draws: scores.X.draws + 1 },
    O: { ...scores.O, draws: scores.O.draws + 1 }
  };
}
