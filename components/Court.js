import { useEffect } from 'react'
import styled from 'styled-components'

const Court = ({ fill, stroke }) => {
  useEffect(() => {
    const root = document.documentElement
    const biscuit = document.querySelector('.invisible-biscuit').getBoundingClientRect()
    root.style.setProperty('--biscuitSize', `${parseInt(biscuit.height)}px`)
  }, [])

  return (
    <CourtSvg
      x="0px"
      y="0px"
      viewBox="0 0 72 126"
      preserveAspectRatio="xMidYMin meet"
      fill={fill}
      stroke={stroke}
    >
      <circle cx="-50" cy="-50" r="3" className="invisible-biscuit" />
      <g>
        <polyline className="background" points="6,18 0,18 36,125 72,18 66,18 " />
        <polygon className="background" points="0,0 72,0 66,18 6,18 " />
        <polygon points="34.43,0 37.52,0 36,18 " className="kitchen-triangle" />
        <line x1="24" y1="90" x2="48" y2="90" />
        <line x1="24" y1="90" x2="47" y2="90" />
        <line x1="27" y1="90" x2="48" y2="90" />
        <line x1="36" y1="18" x2="36" y2="90" />
        <line x1="12" y1="54" x2="60" y2="54" />
      </g>
    </CourtSvg>
  )
}

export default Court

const CourtSvg = styled.svg`
  overflow: visible;
  height: 100%;

  * {
    fill: transparent;
    stroke: ${(props) => props.stroke};

    &.kitchen-triangle {
      fill: ${(props) => props.stroke};
    }
  }

  .background {
    fill: ${(props) => props.fill};
  }
`
