import React from 'react'
import Link from 'gatsby-link'

const Footer = () => (
  <footer>
    <div className="footer-col">
      <h3>Any Questions?</h3>
      <form className="contact-form">
        <fieldset>
          <label className="hide-robot">
            <input name="firstname" type="text" id="firstname" />
          </label>
          <label>
            <span>Name</span>
            <input type="text" className="email" name="name" value="" required />
          </label>
          <label>
            <span>Email</span>
            <input type="email" className="email" name="" value="" required />
          </label>
          <label>
            <span>Message</span>
            <textarea className="message" required></textarea>
          </label>
        </fieldset>
        <fieldset>
          <button type="submit">
          Send
          </button>
        </fieldset>
      </form>
    </div>
    <div className="footer-col">
      <h3>Find us Online</h3>
      <div className="wrap">
        <div className="social-media-andy">
          <h6>Connect with Andy</h6>
          <ul>
            <li>
              <span className="icon">
              </span>
              <a href="https://www.instagram.com/andy_lincoln" target="_blank" rel="noreferrer noopener">
                @andy_lincoln
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/andylincoln11" target="_blank" rel="noreferrer noopener">
                facebook.com/andylincoln11
              </a>
            </li>
          </ul>
        </div>
        <div className="social-media-sarah">
          <h6>Connect with Sarah</h6>
          <ul>
            <li>
              <span className="icon">
              
              </span>
              <a href="https://www.instagram.com/sarahcroughwell" target="_blank" rel="noreferrer noopener">
                @sarahcroughwell
              </a>
            </li>
            <li>
              <span className="icon">
              
              </span>
              <a href="https://www.facebook.com/sarah.croughwell" target="_blank" rel="noreferrer noopener">
                facebook.com/sarah.croughwell
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <span>Created by Sarah and Andy with Love</span>
    </div>
  </footer>
);

export default Footer
