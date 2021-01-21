import { useState, useEffect, useCallback } from 'react'
import firebase from '../configs/firebaseInit'
//Local
import { useStore } from 'src/store'
import { FetchNoteDataType } from 'src/configs/types'

export const useFetchDetailNote = (id: string) => {
  const [note, setNote] = useState<FetchNoteDataType>(null)

  const { storeType, update } = useStore()

  useEffect(() => {
    if (storeType === 'firebase') {
      const notesRef = firebase.database().ref(`notes/${id}`)
      notesRef.on('value', (snapshot) => {
        setNote(snapshot.val())
      })
    }
  }, [storeType])

  useEffect(() => {
    const updateState = () => {
      const localNotes = localStorage.getItem('notes')
      if (localNotes) {
        const notes = JSON.parse(localNotes)
        setNote(notes[id])
      }
    }
    if (storeType === 'local') {
      updateState()
    }
    if (update && storeType === 'local') {
      updateState()
    }
  }, [storeType, update])

  return note
}
