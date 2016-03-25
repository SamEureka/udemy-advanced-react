import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Comments Reducer', () => {
  it('unknown type', () => {
    expect(commentReducer(undefined, {})).to.eql([]);
  });
  it('type SAVE_COMMENT', () => {
    const action = { type: SAVE_COMMENT, payload: 'Dude, it works!'};
    expect(commentReducer([], action)).to.eql(['Dude, it works!']);
  });

});
