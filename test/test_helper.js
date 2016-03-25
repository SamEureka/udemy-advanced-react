import jsdom from 'jsdom';
import _$ from 'jquery';
import Testicles from 'react-addons-test-utils';
import ReactDOM from 'react-dom';

// Setup the testing environ to run like a browser in the terminal
global.document = jsdom.jsdom('
  <!doctype html>
  <html><body>
  </body></html>');
global.window = global.document.defaultView;
const $ = _$(global.window);


// Build 'renderComponent' helper
const renderComponent = (ComponentClass) => {
  const componentInstance = Testicles.renderIntoDocument(<ComponentClass />);

  ReactDOM.findDOMNode(componentInstance); //produces HTML
}



// Build helper for simulating events



// Setup chai-jquery
