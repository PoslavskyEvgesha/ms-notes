import React, { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string | null
}

export const Input: React.FC<InputProps> = ({ label, error, ...resProps }) => {
  const _renderErrorText = () => {
    if (!error) {
      return
    }
    return <div className="input-error-text">{error}</div>
  }

  return (
    <div className="input-container">
      <label className="input-label">{label}</label>
      <input
        className={`input ${error ? 'input-error' : ''}`}
        maxLength={60}
        {...resProps}
      />
      {_renderErrorText()}
    </div>
  )
}
