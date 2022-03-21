import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Twitter from './icons'
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
      <Footer></Footer>
      {/* <footer className='h-20 bg-amber-300'>Footer</footer> */}
    </div>
  )
}

// Layout.PropTypes = {
//   children: PropTypes.any,
// }

export default Layout
