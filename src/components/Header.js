import React from 'react'
import { Link } from 'gatsby'

import { navLinks, siteShortTitle } from '../config'

const Header = () => {
  const { menu } = navLinks
  return (
    <header className="flex items-center justify-between px-12 py-6 border-t-4 border-amber-500">
      <Link to="/" aria-label="home">
        <h3 className="text-4xl font-black">
          {siteShortTitle}
          <span className="text-amber-500 font-medium">.</span>
        </h3>
      </Link>
      <nav className="flex items-center">
        {menu.map(({ name, url }, key) => {
          return (
            
            <Link
              className="text-lg font-bold px-3 py-1 rounded-lg hover:bg-amber-200 hover:text-slate-800 focus:text- duration-200 ease-in-out"
              key={key}
              to={url}
            >
              {name}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}

export default Header
