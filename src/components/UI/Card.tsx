import React, { FC } from 'react'
import './Card.css'

interface Props {
    children: any;
    className: string;
}

const Card:FC<Props> = ({children, className}) => {
  const classes = 'card ' + className
  return (
    <div className={classes}>{children}</div>
  )
}

export default Card