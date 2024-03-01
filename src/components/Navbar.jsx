import React, { useState, useRef } from 'react'
import logo from "../images/logo.svg"
import PageLink from './PageLink'
import SocialLinks from './SocialLinks'
import { pageLinks } from './data'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  const toggleLinks = () => {
    console.log(linksRef.current.getBoundingClientRect().height);
    setShowLinks(!showLinks)
  }

  // dynamic height 
  const linkStyles = {
    height: showLinks ? `${linksRef.current.getBoundingClientRect().height}px` : "0px"
  }


  return (
    <nav className="navbar" >
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle" onClick={toggleLinks}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div className='links-container'
          ref={linksContainerRef}
          style={linkStyles}
        >
          <ul className="nav-links" ref={linksRef}>
            {
              pageLinks.map(link => {
                return (
                  <PageLink key={link.id} {...link} />
                )
              })
            }
          </ul>
        </div>
        <SocialLinks
          paretnClass="nav-icons"
          itemClass="nav-icon"
        />
      </div>
    </nav >
  )
}

export default Navbar