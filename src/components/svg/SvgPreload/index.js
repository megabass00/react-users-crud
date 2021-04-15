import * as React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
function SvgPreload(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      display="block"
      width={props.width}
      height={props.height}
    >
      <title>Preload</title>
      <circle
        cx={50}
        cy={50}
        r={32}
        strokeWidth={8}
        stroke={props.theme.textColor}
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
  theme: PropTypes.object.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
}

SvgPreload.defaultProps = {
  fill: '#ffffff',
  width: 50,
  height: 50,
}

const mapStateToProps = (state) => ({
  theme: state.styles.theme,
})

const SvgPreloadConnected = connect(mapStateToProps, null)(SvgPreload)
export default SvgPreloadConnected
