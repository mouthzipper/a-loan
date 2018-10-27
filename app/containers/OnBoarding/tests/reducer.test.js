import onBoardingReducer from '../reducer';

describe('onBoardingReducer', () => {
  it('returns the initial state', () => {
    expect(onBoardingReducer(undefined, {})).toEqual({});
  });
});
