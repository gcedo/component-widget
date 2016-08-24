import 'babel-polyfill';
import Widget from '../src';
import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';
chai.use(chaiEnzyme()).should();
describe('Widget', () => {

  it('renders a React element', () => {
    React.isValidElement(<Widget />).should.equal(true);
  });

  describe('Rendering', () => {
    let rendered = null;
    let widget = null;
    beforeEach(() => {
      rendered = mount(<Widget />);
      widget = rendered.find('.widget');
    });

    it('renders a top level div.widget', () => {
      widget.should.have.tagName('div');
      widget.should.have.className('widget');
    });

    xit('renders <FILL THIS IN>', () => {
      widget.should.have.exactly(1).descendants('.the-descendent-class');
      widget.find('.the-descendent-class').should.have.tagName('TAG');
    });

  });

});
