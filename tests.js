import {expect} from 'chai';
import maxInc from './index.js';

describe('maxInc', function() {
  it('returns 16 when checking [45, 24, 35, 31, 40, 38, 11]', () => {
    expect(maxInc([45, 24, 35, 31, 40, 38, 11])).to.equal(16);
  });
  it('returns -1 when checking [45, 40, 38, 35, 31, 24, 11]', () => {
    expect(maxInc([45, 40, 38, 35, 31, 24, 11])).to.equal(-1);
  });
  it('returns -1 when checking [0, 0, 0, 0]', () => {
    expect(maxInc([0, 0, 0, 0])).to.equal(-1);
  });
  it('returns -1 when checking [1, 1, 1]', () => {
    expect(maxInc([1, 1, 1])).to.equal(-1);
  });
  it('returns 1 when checking [0, 1, 0]', () => {
    expect(maxInc([0, 1, 0])).to.equal(1);
  });
  it('returns 34 when checking [11, 40, 38, 35, 31, 24, 45]', () => {
    expect(maxInc([11, 40, 38, 35, 31, 24, 45])).to.equal(34);
  });
  it('returns 34 when checking [40, 11, 38, 35, 45, 31, 24]', () => {
    expect(maxInc([40, 11, 38, 35, 45, 31, 24])).to.equal(34);
  });
});
