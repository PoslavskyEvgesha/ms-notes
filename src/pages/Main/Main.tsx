import React from 'react'
// Local
import { NoteCard } from 'src/components'
import { useFetchNotes } from 'src/hooks'

export const Main: React.FC = () => {
  const notes = useFetchNotes()

  return (
    <div className="row">
      <div className="col">
        <h1>List of notes</h1>
        <div className="notes-list-container">
          {notes && notes.map((item) => <NoteCard key={item.id} data={item} />)}
        </div>
      </div>
    </div>
  )
}

export default Main
