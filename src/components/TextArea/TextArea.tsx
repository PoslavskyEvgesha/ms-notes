import React, { TextareaHTMLAttributes } from 'react'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error?: string
}

export const TextArea: React.FC<TextAreaProps> = ({
  label,
  error,
  ...resProps
}) => {
  const _renderErrorText = () => {
    if (!error) {
      return
    }
    return <div className="input-error-text">{error}</div>
  }
  return (
    <div className="input-container">
      <label className="input-label">{label}</label>
      <textarea
        className={`input ${error ? 'input-error' : ''}`}
        maxLength={300}
        {...resProps}
      />
      {_renderErrorText()}
    </div>
  )
}
