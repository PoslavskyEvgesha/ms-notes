import { useState, useEffect } from 'react'
import firebase from '../configs/firebaseInit'
//Local
import { useStore } from 'src/store'
import { FetchCommentDataType } from 'src/configs/types'

export const useFetchComments = (id: string) => {
  const [comments, setComments] = useState<FetchCommentDataType[]>(null)

  const { storeType, update } = useStore()

  useEffect(() => {
    if (storeType === 'firebase') {
      const notesRef = firebase.database().ref(`comments/${id}`)
      notesRef.on('value', (snapshot) => {
        const notes = snapshot.val()
        const noteList: FetchCommentDataType[] = []
        for (let id in notes) {
          noteList.push({ id, ...notes[id] })
        }
        setComments(noteList)
      })
    }
  }, [storeType])

  useEffect(() => {
    const updateState = () => {
      const localComments = localStorage.getItem('comments')
      if (localComments) {
        const comments = JSON.parse(localComments)[id]
        const commentList: FetchCommentDataType[] = []
        for (let id in comments) {
          commentList.push({ id, ...comments[id] })
        }
        setComments(commentList)
      }
    }
    if (storeType === 'local') {
      updateState()
    }
    if (update && storeType === 'local') {
      updateState()
    }
  }, [storeType, update])

  return comments
}
