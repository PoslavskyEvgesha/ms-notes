import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
// Local
import { Input, TextArea, Button } from 'src/components'
import { CommentDataType } from 'src/configs/types'
// Local Dir
import { schema, values } from './helper'

interface CommentFormProps {
  defaultValues?: CommentDataType
  handlerSave?: (data: CommentDataType) => void
}

export const CommentForm: React.FC<CommentFormProps> = ({
  defaultValues = values,
  handlerSave,
}) => {
  const { handleSubmit, control, errors, setValue } = useForm<CommentDataType>({
    resolver: yupResolver(schema),
    defaultValues,
  })

  const _handlerSubmit = (data: CommentDataType) => {
    setValue('author', '')
    setValue('content', '')
    handlerSave(data)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="comment-form-title">Add comment:</div>
      <Controller
        control={control}
        name="author"
        render={({ onChange, value }) => {
          const error = errors.hasOwnProperty('author')
            ? errors.author.message
            : null
          return (
            <Input
              label="Full author name"
              placeholder="Pleaser enter your full name"
              onChange={onChange}
              value={value}
              error={error}
            />
          )
        }}
      />
      <Controller
        control={control}
        name="content"
        render={({ onChange, value }) => {
          const error = errors.hasOwnProperty('content')
            ? errors.content.message
            : null
          return (
            <TextArea
              label="Comment"
              placeholder="Pleaser enter your comment"
              onChange={onChange}
              value={value}
              error={error}
            />
          )
        }}
      />
      <Button
        style={{ marginTop: 18 }}
        label="Save"
        onClick={handleSubmit(_handlerSubmit)}
      />
    </div>
  )
}
