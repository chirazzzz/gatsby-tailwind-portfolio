import React from 'react'
import { Link } from 'gatsby'
import Icon from './icons/index'

import { siteShortTitle, socialMedia } from '../config'

const Footer = () => {
  return (
    <footer className="flex items-center justify-between bg-amber-300 px-12 py-6">
      <Link to="/" aria-label="home">
        <h3 className="text-amber-50 text-4xl font-black">{siteShortTitle}</h3>
      </Link>

      <nav className='flex items-center'>
        {socialMedia.map(({name, url, color, path}, key) => {
          return (
            <a
              key={key}
              href={url}
              alt={`${name} icon`}
            >
              <Icon name={name} color={color} path={path}></Icon>
            </a>
          )
        })}
      </nav>
    </footer>
  )
}

export default Footer
