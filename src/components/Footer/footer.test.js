import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Footer from './index';

describe('Footer Component', function() {

  it('should be selectable by class ".site-footer"', function() {
    expect(shallow(<Footer />).is('.site-footer')).toBe(true);
  });
});