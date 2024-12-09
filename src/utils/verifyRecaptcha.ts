'use server';
// Server Action: Verify ReCaptcha Token
async function verifyRecaptcha(token: string) {
  const verifyResult = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    },
    body: `secret=${process.env.INVIS_RECAP_SECRET}&response=${token}`,
  });
  return verifyResult.json();
}

export default verifyRecaptcha;
