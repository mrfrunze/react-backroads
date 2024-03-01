import React, { useRef } from 'react'
import PageLink from './PageLink'
import { pageLinks } from './data'

const PageLinks = ({paretnClass, itemClass, showLinks}) => {
 
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  // dynamic height 
  const linkStyles = {
    height: showLinks ? `${linksRef.current.getBoundingClientRect().height}px` : "0px"
  }  

  return (
    <div className='links-container'
      ref={linksContainerRef}
      style={linkStyles}
    >
      <ul className={paretnClass} ref={linksRef}>
          {
          pageLinks.map(link => {
              return (
                <PageLink key={link.id} {...link} itemClass={itemClass}/>
              )
          })
          }
      </ul>
    </div>
    
  )
}

export default PageLinks