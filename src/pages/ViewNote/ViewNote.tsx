import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
// Local
import { CommentForm, Comments } from 'src/components'
import { CommentDataType } from 'src/configs/types'
import {
  useHandlerDataBase,
  useFetchDetailNote,
  useFetchComments,
} from 'src/hooks'

type ViewNoteType = {
  id: string
}

export const ViewNote: React.FC<RouteComponentProps<ViewNoteType>> = ({
  match,
}) => {
  const { handlerAddComment } = useHandlerDataBase()
  const note = useFetchDetailNote(match.params.id)
  const comments = useFetchComments(match.params.id)

  console.log(comments)

  const _submitAddComment = (data: CommentDataType) => {
    handlerAddComment(match.params.id, data)
  }

  const _renderContent = () => {
    return (
      <div className="detail-container">
        <div className="detail-title">{note.name}</div>
        <div className="detail-content">{note.content}</div>
      </div>
    )
  }

  const _renderComments = () => {
    if (note && comments) {
      return <Comments data={comments} />
    }
  }

  return (
    <div className="row">
      <div className="col">
        {note ? (
          <>
            {_renderContent()}
            <CommentForm handlerSave={_submitAddComment} />
          </>
        ) : (
          'loading'
        )}
        {_renderComments()}
      </div>
    </div>
  )
}
