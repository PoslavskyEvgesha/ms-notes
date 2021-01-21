import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
// Local
import { NoteForm } from 'src/components'
import type { NoteDataType } from 'src/configs/types'
import { useHandlerDataBase, useFetchDetailNote } from 'src/hooks'

type EditNoteType = { id: string }

export const EditNote: React.FC<RouteComponentProps<EditNoteType>> = ({
  match,
}) => {
  const { handlerUpdateNote } = useHandlerDataBase()
  const note = useFetchDetailNote(match.params.id)

  const _handlerUpdate = (data: NoteDataType) => {
    handlerUpdateNote(match.params.id, data)
  }

  return (
    <div className="row">
      <div className="col">
        {note ? (
          <NoteForm
            handlerSave={_handlerUpdate}
            defaultValues={note}
            type="update"
          />
        ) : (
          'Loading...'
        )}
      </div>
    </div>
  )
}
