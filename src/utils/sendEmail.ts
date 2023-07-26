export type EmailData = {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

export const sendEmail = async (data: EmailData) => {
  const result = await fetch(
    `https://formsubmit.co/ajax/${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`,
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
