import React from 'react'
// Local
import { NoteForm } from 'src/components'
import { useHandlerDataBase } from 'src/hooks'

export const CreateNote: React.FC = () => {
  const { handlerAddNote } = useHandlerDataBase()
  return (
    <div className="row">
      <div className="col">
        <NoteForm handlerSave={handlerAddNote} />
      </div>
    </div>
  )
}
