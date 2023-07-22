export type EmailData = {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

const sendEmail = async (data: EmailData) => {
  const result = await fetch(
    'https://formsubmit.co/ajax/jay.bells12@gmail.com',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    }
  )
  return result.json()
}

export default sendEmail
