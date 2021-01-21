import * as yup from 'yup'

export const schema = yup.object().shape({
  author: yup
    .string()
    .required('This field is required')
    .matches(
      /([A-Z][a-z]+\s+[A-Z][a-z]+)ç/g,
      'This field must contain full name'
    ),
  content: yup.string().required('This field is required'),
})

export const values = {
  author: '',
  content: '',
}
