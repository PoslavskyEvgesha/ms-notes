import { useState, useEffect, useCallback } from 'react'
import firebase from '../configs/firebaseInit'
//Local
import { useStore } from 'src/store'
import { FetchNoteDataType } from 'src/configs/types'

export const useFetchNotes = () => {
  const [notes, setNotes] = useState<FetchNoteDataType[]>(null)

  const { storeType, update } = useStore()

  useEffect(() => {
    if (storeType === 'firebase') {
      const notesRef = firebase.database().ref('notes')
      notesRef.on('value', (snapshot) => {
        const notes = snapshot.val()
        const noteList: FetchNoteDataType[] = []
        for (let id in notes) {
          noteList.push({ id, ...notes[id] })
        }
        setNotes(noteList)
      })
    }
  }, [storeType])

  useEffect(() => {
    const updateState = () => {
      const localNotes = localStorage.getItem('notes')
      if (localNotes) {
        const notes = JSON.parse(localNotes)
        const noteList: FetchNoteDataType[] = []
        for (let id in notes) {
          noteList.push({ id, ...notes[id] })
        }
        setNotes(noteList)
      }
    }
    if (storeType === 'local') {
      updateState()
    }
    if (update && storeType === 'local') {
      updateState()
    }
  }, [storeType, update])

  return notes
}
