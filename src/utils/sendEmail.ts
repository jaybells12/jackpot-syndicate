'use server'

export type EmailData = {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

export async function sendEmail(data: EmailData) {
  const result = await fetch(
    `https://formsubmit.co/ajax/${process.env.CONTACT_EMAIL}`,
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
