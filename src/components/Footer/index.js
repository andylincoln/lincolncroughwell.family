import React from 'react'
import Link from 'gatsby-link'

const Footer = () => (
  <footer>
    <div class="footer-col">
      <h3>Any Questions?</h3>
      <label>
        <span>Name</span>
        <input name="name" type="text"/>
      </label>
      <label>
        <span>Email</span>
        <input name="email" type="email"/>
      </label>
      <label>
        <span>Message</span>
        <textarea name=""></textarea>
      </label>
      <button type="submit">Send</button>
    </div>
    <div class="footer-col">
      <h3>Find us Online</h3>
      <ul className="social andy">
          <li><a href="/"></a></li>
          <li><a href="/"></a></li>
      </ul>
      <ul className="social sarah">
          <li><a href="/"></a></li>
          <li><a href="/"></a></li>
      </ul>
    </div>
    <div className="footer-bottom">
      <span>Created by Sarah and Andy with Love</span>
    </div>
  </footer>
);

export default Footer
