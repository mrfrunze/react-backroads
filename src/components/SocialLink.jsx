import React from 'react'

const SocialLink = ({icon, href, itemClass}) => {
  return (
    <li>
      <a 
        href={href} 
        target="_blank" 
        className={itemClass}
      >
        <i className={icon}></i>
      </a>
    </li>
  )
}

export default SocialLink