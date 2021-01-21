import * as yup from 'yup'

export const schema = yup.object().shape({
  name: yup.string().required('This field is required'),
  content: yup.string().required('This field is required'),
})

export const values = {
  name: '',
  content: '',
}
