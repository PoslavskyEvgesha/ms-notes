import React, { CSSProperties } from 'react'

interface ButtonProps {
  label: string
  type?: 'contained' | 'bordered'
  onClick?: () => void
  style?: CSSProperties
}

export const Button: React.FC<ButtonProps> = ({
  label,
  type = 'contained',
  onClick = () => {},
  style,
}) => {
  return (
    <div className={`button-${type}`} style={style} onClick={onClick}>
      <div className="button-label">{label}</div>
    </div>
  )
}
