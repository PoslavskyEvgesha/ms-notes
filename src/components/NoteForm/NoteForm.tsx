import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
// Local
import { Input, TextArea, Button } from 'src/components'
import { NoteDataType } from 'src/configs/types'
// Local Dir
import { schema, values } from './helper'

interface NoteFormProps {
  defaultValues?: NoteDataType
  handlerSave?: (data: NoteDataType) => void
  type?: 'save' | 'update'
}

export const NoteForm: React.FC<NoteFormProps> = ({
  defaultValues = values,
  handlerSave,
  type = 'save',
}) => {
  const { handleSubmit, control, errors, setValue } = useForm<NoteDataType>({
    resolver: yupResolver(schema),
    defaultValues,
  })

  const _handlerSubmit = (data: NoteDataType) => {
    if (type === 'save') {
      setValue('name', '')
      setValue('content', '')
    }
    handlerSave(data)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Controller
        control={control}
        name="name"
        render={({ onChange, value }) => {
          const error = errors.hasOwnProperty('name')
            ? errors.name.message
            : null
          return (
            <Input
              label="Note name"
              placeholder="Pleaser enter note name"
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
              label="Note content"
              placeholder="Pleaser enter note content"
              onChange={onChange}
              value={value}
              error={error}
            />
          )
        }}
      />
      <Button
        style={{ marginTop: 18 }}
        label={type === 'save' ? 'Save' : 'Update'}
        onClick={handleSubmit(_handlerSubmit)}
      />
    </div>
  )
}
