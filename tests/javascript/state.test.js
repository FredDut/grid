import { describe, it, expect } from 'vitest';
import { State } from '../../assets/lib/grid/state.js';
describe('State', () => it('serializes', () => {
    let s = new State;
    s.page = 2;
    s.globalSearch = 'x';
    expect(s.payload()).toMatchObject({
        page: 2,
        globalSearch: 'x'
    })
}));
