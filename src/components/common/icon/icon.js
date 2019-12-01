import React from 'react'
import './icon.scss'

import {
  Tooltip,
} from 'react-tippy';

const Icon = ({icon, size, title}) => {
  return (
    <div className="icon">
      <Tooltip
        title={title}
        position="bottom"
        trigger="mouseenter"
      >
        
        <img src={"/assets/img/svgicons/" + icon + ".svg"} alt="" height={size} width={size} className="svg mb-4"/>

      </Tooltip>
     
    </div>
  )
}
export default Icon
