import React from 'react'
// Local
import { FetchCommentDataType } from 'src/configs/types'

type ICommentProps = {
  data: FetchCommentDataType[]
}

export const Comments: React.FC<ICommentProps> = ({ data }) => {
  return (
    <div className="comments-container">
      <div className="comments-header">
        <div className="comments-title">{`Comments ${data.length + 1}`}</div>
      </div>
      <div className="comments-list">
        {data.map((item) => (
          <div key={item.id} className="comments-card">
            <div className="comments-author">{item.author}</div>
            <div className="comments-content">{item.content}</div>
            <div className="comments-created">{item.create_at}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
