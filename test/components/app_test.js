import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

describe('App', () => {
  let element;

  beforeEach(()=> {
    element = renderComponent(App);
  });

  it('shows a comment box', () => {
    expect(element.find('.comment-box')).to.exist;
  });

});
