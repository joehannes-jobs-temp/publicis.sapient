import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import JSDOMEnvironment from 'jest-environment-jsdom';
import 'jest-enzyme';

export default class EnzymeEnvironment extends JSDOMEnvironment {
  constructor(config: any) {
    super(config);
    const testEnvironmentOptions = config.testEnvironmentOptions || {};
    this.global.enzymeAdapterDescriptor = testEnvironmentOptions.enzymeAdapter;
    this.global.bootstrapEnzymeEnvironment = true;
  }
}

configure({ adapter: new Adapter() });

global.shallow = shallow;
global.mount = mount;
global.render = render;
global.React = React;
