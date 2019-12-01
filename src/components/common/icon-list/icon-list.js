import React from 'react'
import './icon-list.scss'
import Icon from '../icon/icon'

const IconList = ({icons, size}) => {
  return (
    <div className="icon-list">
      {icons.map((icon, i) => <Icon key={i} size={size} icon={icon.svg} title={icon.title} />)}      
    </div>
  )
}
export default IconList
