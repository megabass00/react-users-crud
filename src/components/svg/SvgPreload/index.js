import * as React from 'react'
import PropTypes from 'prop-types'

function SvgPreload(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      display="block"
      {...props}
    >
      <circle
        cx={50}
        cy={50}
        r={32}
        strokeWidth={8}
        stroke={props.fill}
        strokeDasharray="50.26548245743669 50.26548245743669"
        fill="none"
        strokeLinecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          keyTimes="0;1"
          values="0 50 50;360 50 50"
        />
      </circle>
    </svg>
  )
}

SvgPreload.propTypes = {
  fill: PropTypes.string,
}
SvgPreload.defaultProps = {
  fill: '#ffffff',
}

export default SvgPreload
