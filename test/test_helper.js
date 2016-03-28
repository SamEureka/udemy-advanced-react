import jsdom from 'jsdom';
import _$ from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import chaiJquery from 'chai-jquery';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';

// Setup the testing environ to run like a browser in the terminal
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
const $ = _$(global.window);


// Build 'renderComponent' helper
const renderComponent = (ComponentClass, props, state) => {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
);

  return $(ReactDOM.findDOMNode(componentInstance)); //produces HTML
}



// Build helper for simulating events
$.fn.simulate = function(eventName, value) {
  if (value){
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
}


// Setup chai-jquery
chaiJquery(chai, chai.util, $);

export { renderComponent, expect };
