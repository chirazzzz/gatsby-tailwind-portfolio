import React from 'react'
import Header from './Header'
// import PropTypes from 'prop-types'

const Layout = ({ children }) => {
  return (
    <div
      className="min-h-full grid text-slate-800"
      style={{
        gridTemplateRows: 'auto 1fr auto',
      }}
    >
      <Header></Header>
      <main>{children}</main>
      <footer className='h-20 bg-amber-300'>Footer</footer>
    </div>
  )
}

// Layout.PropTypes = {
//   children: PropTypes.any,
// }

export default Layout
