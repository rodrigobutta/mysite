import React from 'react'
import './me-member.scss'

const MeMember = ({person: {imgUrl, name, position}}) => {
  return (
    <div className="me-member">
      <img src={imgUrl} alt="" className="img-fluid"/>
      <div>
        <h3>{name}</h3>
        <span className="text-uppercase">{position}</span>
      </div>
    </div>
  )
}

export default MeMember
