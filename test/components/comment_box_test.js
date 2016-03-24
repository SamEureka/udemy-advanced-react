import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {
  let element;

  beforeEach(() =>{
    element = renderComponent(CommentBox);
  });

  it('has a text area', () => {
    expect(element.find('textarea')).to.exist;
  });

  it('has the correct class', () => {
    expect(element).to.have.class('comment-box');
  });

  it('has a button', () => {
    expect(element.find('button')).to.exist;
  });

  describe('entering some text', () => {
    beforeEach(()=>{
      element.find('textarea').simulate('change', 'Dude! It works!');
    });

    it('shows text in the textarea', () => {
      expect(element.find('textarea').to.have.value('Dude! It works!'));
    })

    it('when submitted, clears the input', () => {
      expect(element.find('textarea').to.have.value(''));
    })


  });


});
