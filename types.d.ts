type FormErrorState = {
  first: boolean
  last: boolean
  email: boolean
  phone: boolean
  subject: boolean
  message: boolean
  // address: boolean
}

type FormErrorAction = {
  type: 'first' | 'last' | 'email' | 'phone' | 'subject' | 'message' // | 'address'
  payload: boolean
}
