import React from 'react'
// import PropTypes from 'prop-types'

const Icon = ({ name, color, path }) => {
  return (
    <div>
      <svg
        className='px-3 py-1 w-6 h-6 z-50'
        role="img"
        viewBox="0 0 24 24"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>{`${name} icon`}</title>
        <path d={path} />
      </svg>
    </div>
  )
}

// Twitter.propTypes = {
//   color: PropTypes.string,
// }

// Twitter.defaultProps = {
//   color: '#1DA1F2',
// }

export default Icon
