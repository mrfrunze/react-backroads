import React from 'react'
import { socialLink } from './data'
import SocialLink from './SocialLink'

const SocialLinks = ({paretnClass, itemClass}) => {
  return (
    <ul className={paretnClass}>
        {
          socialLink.map(link => {
            return (
              <SocialLink 
                key={link.id} 
                {...link} 
                itemClass={itemClass} />
            )
          })
        }
    </ul>
  )
}

export default SocialLinks