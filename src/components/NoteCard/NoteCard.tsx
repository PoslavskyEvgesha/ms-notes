import React from 'react'
import { useHistory } from 'react-router-dom'
// Local
import { Button } from 'src/components'
import { FetchNoteDataType } from 'src/configs/types'
import { useHandlerDataBase } from 'src/hooks'

type NoteCardProps = {
  data: FetchNoteDataType
}

export const NoteCard: React.FC<NoteCardProps> = ({ data }) => {
  const history = useHistory()
  const { handlerRemoveNote } = useHandlerDataBase()

  const _openDetail = () => {
    history.push(`/view/${data.id}`)
  }

  const _openEditor = () => {
    history.push(`/edit/${data.id}`)
  }

  const _removeNote = () => {
    handlerRemoveNote(data.id)
  }

  return (
    <div className="card-container">
      <div className="card-content" onClick={_openDetail}>
        <div className="card-title">{data.name}</div>
        <div className="card-short">{data.content.slice(0, 100)}</div>
      </div>
      <div className="card-button-container">
        <Button label="Edit" onClick={_openEditor} />
        <Button
          type="bordered"
          style={{
            marginLeft: 12,
            color: 'orangered',
            borderColor: 'orangered',
          }}
          label="Remove"
          onClick={_removeNote}
        />
      </div>
    </div>
  )
}
