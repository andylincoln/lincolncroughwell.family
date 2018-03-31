import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Nav from './index';

describe('Nav Component', function() {
  const nav = shallow(<Nav />);
  
  //  <nav> element
  it('should render without issue"', function() {
    expect(nav.exists()).toBe(true);
  });
  
  it('should be selectable by class ".main-navigation"', function() {
    expect(nav.is('.main-navigation')).toBe(true);
  });
});