import adminReducer from '../reducer';

describe('adminReducer', () => {
  it('returns the initial state', () => {
    expect(adminReducer(undefined, {})).toEqual({});
  });
});
