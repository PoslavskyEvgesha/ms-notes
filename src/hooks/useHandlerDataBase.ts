import firebase from '../configs/firebaseInit'
import { v4 as uuidv4 } from 'uuid'
//Local
import { NoteDataType, CommentDataType } from 'src/configs/types'
import { useStore } from 'src/store'

export const useHandlerDataBase = () => {
  const { storeType, setUpdate } = useStore()

  const _addNoteToLocal = (data: NoteDataType) => {
    const localNotes = localStorage.getItem('notes')
    if (!localNotes) {
      const newData = { [uuidv4()]: data }
      localStorage.setItem('notes', JSON.stringify(newData))
    } else {
      const newData = JSON.parse(localNotes)
      newData[uuidv4()] = data
      localStorage.setItem('notes', JSON.stringify(newData))
    }
  }

  const _addCommentToLocal = (key: string, data: CommentDataType) => {
    const localComments = localStorage.getItem('comments')
    if (!localComments) {
      const newData = {
        [key]: { [uuidv4()]: { ...data, create_at: new Date() } },
      }
      localStorage.setItem('comments', JSON.stringify(newData))
    } else {
      const newData = JSON.parse(localComments)
      newData[key][uuidv4()] = { ...data, create_at: new Date() }
      localStorage.setItem('comments', JSON.stringify(newData))
    }
    setUpdate(true)
  }

  const _updateNoteInLocal = (key: string, data: NoteDataType) => {
    const localNotes = localStorage.getItem('notes')
    const updateData = JSON.parse(localNotes)
    updateData[key] = data
    localStorage.setItem('notes', JSON.stringify(updateData))
  }

  const _removeNoteFromLocal = (key: string) => {
    const localNotes = localStorage.getItem('notes')
    const newData = JSON.parse(localNotes)
    delete newData[key]
    localStorage.setItem('notes', JSON.stringify(newData))
    setUpdate(true)
  }

  const handlerAddNote = (data: NoteDataType) => {
    switch (storeType) {
      case 'firebase':
        const notesRef = firebase.database().ref('notes')
        notesRef.push(data)
        break
      case 'local':
        _addNoteToLocal(data)
        break
      default:
        console.log('error store type')
    }
  }

  const handlerAddComment = (key: string, data: CommentDataType) => {
    switch (storeType) {
      case 'firebase':
        const comment = { ...data, create_at: new Date() }
        const notesRef = firebase.database().ref(`comments/${key}`)
        notesRef.push(comment)
        break
      case 'local':
        _addCommentToLocal(key, data)
        break
      default:
        console.log('error store type')
    }
  }

  const handlerUpdateNote = (key: string, data: NoteDataType) => {
    switch (storeType) {
      case 'firebase':
        const notesRef = firebase.database().ref(`notes/${key}`)
        notesRef.update(data)
        break
      case 'local':
        _updateNoteInLocal(key, data)
        break
      default:
        console.log('error store type')
    }
  }

  const handlerRemoveNote = (key: string) => {
    switch (storeType) {
      case 'firebase':
        const notesRef = firebase.database().ref(`notes/${key}`)
        notesRef.remove()
        break
      case 'local':
        _removeNoteFromLocal(key)
        break
      default:
        console.log('error store type')
    }
  }

  return {
    handlerAddNote,
    handlerAddComment,
    handlerUpdateNote,
    handlerRemoveNote,
  }
}
