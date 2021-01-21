export interface NoteDataType {
  name: string
  content: string
}

export interface FetchNoteDataType extends NoteDataType {
  id: string
}

export interface CommentDataType {
  author: string
  content: string
}

export interface FetchCommentDataType extends CommentDataType {
  id: string
  create_at: string
}
