export type EmailData = {
  first: string
  last: string
  email: string
  phone?: string
  subject: string
  message: string
}

// API Route handlers no longer supported app directory, soon will be mutations currently alpha

const sendEmail = async (data: EmailData) => {
  return fetch('/api/send-mail', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}

export default sendEmail
