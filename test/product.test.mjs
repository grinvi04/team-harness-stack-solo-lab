import test from 'node:test';
import assert from 'node:assert/strict';
import {normalizeTitle, health} from '../src/product.mjs';
test('valid title', () => assert.equal(normalizeTitle('  Synthetic task  '), 'Synthetic task'));
test('invalid inputs rejected', () => {
  for (const x of [null, 42, {}, '', ' ', 'x'.repeat(81)]) assert.throws(() => normalizeTitle(x), /invalid title/);
});
test('80 characters accepted', () => assert.equal(normalizeTitle('x'.repeat(80)).length, 80));
test('health', () => assert.deepEqual(health(), {status:'ok', product:'synthetic-only'}));
