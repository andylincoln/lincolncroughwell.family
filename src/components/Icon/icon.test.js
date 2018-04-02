import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Icon from './index';

describe('Icon Component', function() {
  const default_icon = mount(<Icon />);
 
  // <Icon />
  it('should render nothing if name is not specified"', function() {
    expect(default_icon.find('svg').exists()).toBe(false);
    expect(default_icon.find('.icon').exists()).toBe(false);
  });
  
  // <Icon name="menu" />
  it('should have the .icon-menu" class', function() {
    const menu_icon = mount(<Icon name="menu"/>);
    expect(menu_icon.find(".icon").exists()).toBe(true);
    expect(menu_icon.find(".icon-menu").exists()).toBe(true);
  });

  // <Icon name="instagram" />
  it('should have the .icon-instagram" class', function() {
    const instagram_icon = mount(<Icon name="instagram"/>);
    expect(instagram_icon.find(".icon").exists()).toBe(true);
    expect(instagram_icon.find(".icon-instagram").exists()).toBe(true);
  });

  // <Icon name="brunch" />
  it('should have the .icon-brunch" class', function() {
    const brunch_icon = mount(<Icon name="brunch"/>);
    expect(brunch_icon.find(".icon").exists()).toBe(true);
    expect(brunch_icon.find(".icon-brunch").exists()).toBe(true);
  });

  // <Icon name="chat" />
  it('should have the .icon-chat" class', function() {
    const chat_icon = mount(<Icon name="chat"/>);
    expect(chat_icon.find(".icon").exists()).toBe(true);
    expect(chat_icon.find(".icon-chat").exists()).toBe(true);
  });

  // <Icon name="chat" />
  it('should have the .icon-clinking-glasses" class', function() {
    const clinking_icon = mount(<Icon name="clinking"/>);
    expect(clinking_icon.find(".icon").exists()).toBe(true);
    expect(clinking_icon.find(".icon-clinking-glasses").exists()).toBe(true);
  });

  // <Icon name="evergreen-buds" />
  it('should have the .icon-evergreen-buds" class', function() {
    const evergreen_buds_icon = mount(<Icon name="evergreen-buds"/>);
    expect(evergreen_buds_icon.find(".icon").exists()).toBe(true);
    expect(evergreen_buds_icon.find(".icon-evergreen-buds").exists()).toBe(true);
  });

  // <Icon name="facebook" />
  it('should have the .icon-facebook" class', function() {
    const facebook_icon = mount(<Icon name="facebook"/>);
    expect(facebook_icon.find(".icon").exists()).toBe(true);
    expect(facebook_icon.find(".icon-facebook").exists()).toBe(true);
  });

  // <Icon name="facebook-group" />
  it('should have the .icon-facebook-group" class', function() {
    const facebook_group_icon = mount(<Icon name="facebook-group"/>);
    expect(facebook_group_icon.find(".icon").exists()).toBe(true);
    expect(facebook_group_icon.find(".icon-facebook-group").exists()).toBe(true);
  });

  // <Icon name="fireworks" />
  it('should have the .icon-fireworks" class', function() {
    const fireworks_icon = mount(<Icon name="fireworks"/>);
    expect(fireworks_icon.find(".icon").exists()).toBe(true);
    expect(fireworks_icon.find(".icon-fireworks").exists()).toBe(true);
  });

  // <Icon name="location" />
  it('should have the .icon-location" class', function() {
    const location_icon = mount(<Icon name="location"/>);
    expect(location_icon.find(".icon").exists()).toBe(true);
    expect(location_icon.find(".icon-location").exists()).toBe(true);
  });


  // <Icon name="floral-buds" />
  it('should have the .icon-floral-buds" class', function() {
    const floral_buds_icon = mount(<Icon name="floral-buds"/>);
    expect(floral_buds_icon.find(".icon").exists()).toBe(true);
    expect(floral_buds_icon.find(".icon-floral-buds").exists()).toBe(true);
  });

  // <Icon name="flowers" />
  it('should have the .icon-floral-" class', function() {
    const flowers_icon = mount(<Icon name="flowers"/>);
    expect(flowers_icon.find(".icon").exists()).toBe(true);
    expect(flowers_icon.find(".icon-flowers").exists()).toBe(true);
  });

  // <Icon name="hotel" />
  it('should have the .icon-hotel" class', function() {
    const hotel_icon = mount(<Icon name="hotel"/>);
    expect(hotel_icon.find(".icon").exists()).toBe(true);
    expect(hotel_icon.find(".icon-hotel").exists()).toBe(true);
  });

  // <Icon name="map" />
  it('should have the .icon-map" class', function() {
    const map_icon = mount(<Icon name="map"/>);
    expect(map_icon.find(".icon").exists()).toBe(true);
    expect(map_icon.find(".icon-map").exists()).toBe(true);
  });

  // <Icon name="poppin-champagne" />
  it('should have the .icon-poppin-champagne" class', function() {
    const champagne_icon = mount(<Icon name="poppin-champagne"/>);
    expect(champagne_icon.find(".icon").exists()).toBe(true);
    expect(champagne_icon.find(".icon-poppin-champagne").exists()).toBe(true);
  });

  // <Icon name="question" />
  it('should have the .icon-question" class', function() {
    const question_icon = mount(<Icon name="question"/>);
    expect(question_icon.find(".icon").exists()).toBe(true);
    expect(question_icon.find(".icon-question").exists()).toBe(true);
  });

  // <Icon name="registry" />
  it('should have the .icon-registry" class', function() {
    const registry_icon = mount(<Icon name="registry"/>);
    expect(registry_icon.find(".icon").exists()).toBe(true);
    expect(registry_icon.find(".icon-registry").exists()).toBe(true);
  });

  // <Icon name="rings" />
  it('should have the .icon-rings" class', function() {
    const rings_icon = mount(<Icon name="rings"/>);
    expect(rings_icon.find(".icon").exists()).toBe(true);
    expect(rings_icon.find(".icon-rings").exists()).toBe(true);
  });

  // <Icon name="rsvp" />
  it('should have the .icon-rsvp" class', function() {
    const rsvp_icon = mount(<Icon name="rsvp"/>);
    expect(rsvp_icon.find(".icon").exists()).toBe(true);
    expect(rsvp_icon.find(".icon-rsvp").exists()).toBe(true);
  });

  // <Icon name="wedding-cake" />
  it('should have the .icon-wedding-cake" class', function() {
    const wedding_cake_icon = mount(<Icon name="wedding-cake"/>);
    expect(wedding_cake_icon.find(".icon").exists()).toBe(true);
    expect(wedding_cake_icon.find(".icon-wedding-cake").exists()).toBe(true);
  });

});