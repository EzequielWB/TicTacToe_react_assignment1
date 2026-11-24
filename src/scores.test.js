import assert from 'node:assert/strict';
import test from 'node:test';

import { addResult } from './scores.js';

const initialScores = {
  X: { wins: 0, draws: 0 },
  O: { wins: 0, draws: 0 }
};

test('a win increments only the winner', () => {
  assert.deepEqual(addResult(initialScores, 'X'), {
    X: { wins: 1, draws: 0 },
    O: { wins: 0, draws: 0 }
  });
});

test('a draw increments both players', () => {
  assert.deepEqual(addResult(initialScores), {
    X: { wins: 0, draws: 1 },
    O: { wins: 0, draws: 1 }
  });
});
