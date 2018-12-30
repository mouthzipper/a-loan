import { processing } from '../actions';
import { PROCESSING } from '../constants';

describe('Admin actions', () => {
  describe('Default Action', () => {
    it('has a type of PROCESSING', () => {
      const expected = {
        type: PROCESSING,
      };
      expect(processing()).toEqual(expected);
    });
  });
});
