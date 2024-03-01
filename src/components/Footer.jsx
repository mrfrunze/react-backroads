import React from 'react'
import PageLinks from './PageLinks'
import SocialLink from './SocialLinks'

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks paretnClass="footer-links" itemClass="footer-link"/>
      <SocialLink paretnClass="footer-icons" itemClass="footer-icon"/>

      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer