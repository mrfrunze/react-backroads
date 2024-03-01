import React from 'react'

const PageLink = ({ href, text}) => {
  
  return (
    <li >
        <a href={href} 
        className="nav-link">{text}</a>
    </li>
  )
}

export default PageLink