import React from 'react';
import { shallow, mount, render } from 'enzyme';

import FrontPageNav from './index';

describe('FrontPageNav Component', function() {
  const nav = shallow(<FrontPageNav />);
  
  //  <nav> element
  it('should render without issue"', function() {
    expect(nav.exists()).toBe(true);
  });
  
  it('should be selectable by class ".main-navigation"', function() {
    expect(nav.is('.main-navigation')).toBe(true);
    expect(nav.is('.main-navigation--front-page')).toBe(true);
  });
});