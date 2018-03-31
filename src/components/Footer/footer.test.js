import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Footer from './index';

describe('Footer Component', function() {
  const footer = shallow(<Footer />);
  
  //  <footer> element
  it('should render without issue"', function() {
    expect(footer.exists()).toBe(true);
  });
  it('should be selectable by class ".site-footer"', function() {
    expect(footer.is('.site-footer')).toBe(true);
  });


  it('should have a ".contact-form" ', function() {
    expect(footer.find('.contact-form').exists()).toBe(true);
  });


  it('should have a ".social-media" ', function() {
    expect(footer.find('.social-media').exists()).toBe(true);
  });

  // <div class="footer-bottom" exists, and there is one of them
  it('should have a ".footer-bottom"', function() {
    expect(footer.find('.footer-bottom').exists()).toBe(true);
  });
  it('should have ".footer-bottom" text be "Created by Sarah and Andy with love"', function() {
    expect(footer.find('.footer-bottom').text()).toBe("Created by Sarah and Andy with love");
  });
});