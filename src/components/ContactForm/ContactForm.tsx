import {
  Flex,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Text,
  FlexProps,
} from '@chakra-ui/react'
import {
  ChangeEvent,
  MouseEvent,
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
} from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { Link } from '@chakra-ui/next-js'
import verifyRecaptcha from 'src/utils/verifyRecaptcha'
import sendEmail from 'src/utils/sendEmail'

function reducer(state: FormErrorState, action: FormErrorAction) {
  switch (action.type) {
    case 'first':
      return {
        ...state,
        first: action.payload,
      }
    case 'last':
      return {
        ...state,
        last: action.payload,
      }
    case 'email':
      return {
        ...state,
        email: action.payload,
      }
    case 'phone':
      return {
        ...state,
        phone: action.payload,
      }
    case 'subject':
      return {
        ...state,
        subject: action.payload,
      }
    case 'message':
      return {
        ...state,
        message: action.payload,
      }
    default:
      throw Error('Unknown Form Action: ', action.type)
  }
}

export const ContactForm = (props: FlexProps) => {
  const [isError, dispatch] = useReducer(reducer, {
    first: false,
    last: false,
    email: false,
    phone: false,
    subject: false,
    message: false,
  })
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  // const [submitted, setSubmitted] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const recapchaValue = useRef<ReCAPTCHA>()

  // If an error property is true, then return false
  const isValid = useCallback(() => {
    return !(
      isError.first ||
      isError.last ||
      isError.email ||
      isError.subject ||
      isError.message
    )
  }, [isError])

  useEffect(() => {
    if (isDisabled) {
      // Check state for validity
      if (isValid()) {
        if (!recapchaValue.current) {
          // ReCaptcha is not loaded
          // Render Failure Modal
          setIsDisabled(false)
          return
        }
        // Submission logic continues at ReCaptcha OnChange handler
        recapchaValue.current.execute()
        return
      } else {
        // Form Field validation failed
        // Render Failure Modal ?
        setIsDisabled(false)
        return
      }
    }
  }, [isDisabled, isValid])

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const field = e.target.id
    const value = e.target.value

    switch (field) {
      case 'first':
        setFirst(value)
        if (value && isError.first) {
          dispatch({ type: 'first', payload: false })
        } else if (!value && !isError.first) {
          dispatch({ type: 'first', payload: true })
        }
        break
      case 'last':
        setLast(value)
        if (value && isError.last) {
          dispatch({ type: 'last', payload: false })
        } else if (!value && !isError.last) {
          dispatch({ type: 'last', payload: true })
        }
        break
      case 'email':
        setEmail(value)
        if (value && isError.email) {
          dispatch({ type: 'email', payload: false })
        } else if (!value && !isError.email) {
          dispatch({ type: 'email', payload: true })
        }
        break
      case 'phone':
        setPhone(value)
        break
      case 'subject':
        setSubject(value)
        if (value && isError.subject) {
          dispatch({ type: 'subject', payload: false })
        } else if (!value && !isError.subject) {
          dispatch({ type: 'subject', payload: true })
        }
        break
      case 'message':
        setMessage(value)
        if (value && isError.message) {
          dispatch({ type: 'message', payload: false })
        } else if (!value && !isError.message) {
          dispatch({ type: 'message', payload: true })
        }
        break
      default:
        console.log('This should never happen')
    }
  }

  const verifyRequiredFields = () => {
    first
      ? dispatch({ type: 'first', payload: false })
      : dispatch({ type: 'first', payload: true })
    last
      ? dispatch({ type: 'last', payload: false })
      : dispatch({ type: 'last', payload: true })
    email
      ? dispatch({ type: 'email', payload: false })
      : dispatch({ type: 'email', payload: true })
    subject
      ? dispatch({ type: 'subject', payload: false })
      : dispatch({ type: 'subject', payload: true })
    message
      ? dispatch({ type: 'message', payload: false })
      : dispatch({ type: 'message', payload: true })
  }

  const handleSubmit = (e: MouseEvent) => {
    e.preventDefault()
    // Validate Form Fields
    verifyRequiredFields()
    // When component rerenders, submission logic continues when isDisabled is true
    setIsDisabled(true)
  }

  const onChange = async (token: string | null) => {
    if (token) {
      const response = await verifyRecaptcha(token)
      console.log('Verify Response')
      console.log(response)
      if (Boolean(response.success)) {
        // Captcha Verified, Send Email
        const result = await sendEmail({
          name: `${first} ${last}`,
          email,
          phone,
          subject,
          message,
        })
        if (Boolean(result.success)) {
          // Submit Form Succeeded
          // Render Success Modal
          console.log('Form submitted successfully')
          console.log(result)
        } else {
          // Submit Form Failed
          // Render Failure / Retry modal
          setIsDisabled(false)
          console.log('Form submission failed')
          console.log(result)
        }
      } else {
        // Captcha Unverified
        // Render Failure Modal
        setIsDisabled(false)
        console.log('Verification failed')
      }
    }
  }

  return (
    <Flex
      direction={'column'}
      padding={['2.25em 1em', null, '2.25em 1.75em 2.25em 1em']}
      {...props}
    >
      <Flex
        gap={'1.5rem'}
        direction={['column', null, 'row']}
      >
        <FormControl
          as={'fieldset'}
          isRequired
          isInvalid={isError.first}
          id='first'
        >
          <FormLabel
            as={'legend'}
            requiredIndicator={<></>}
          >
            First Name
          </FormLabel>
          <Input
            value={first}
            onChange={handleInput}
          />
          <FormErrorMessage position={'absolute'}>
            First name is required.
          </FormErrorMessage>
        </FormControl>
        <FormControl
          as={'fieldset'}
          isRequired
          isInvalid={isError.last}
          id='last'
        >
          <FormLabel
            as={'legend'}
            requiredIndicator={<></>}
          >
            Last Name
          </FormLabel>
          <Input
            value={last}
            onChange={handleInput}
          />
          <FormErrorMessage position={'absolute'}>
            Last name is required.
          </FormErrorMessage>
        </FormControl>
      </Flex>
      <Flex
        gap={'1.5rem'}
        direction={['column', null, 'row']}
        marginTop={['1.5rem', null, '2rem']}
      >
        <FormControl
          as={'fieldset'}
          isRequired
          isInvalid={isError.email}
          id='email'
        >
          <FormLabel
            as={'legend'}
            requiredIndicator={<></>}
          >
            Email
          </FormLabel>
          <Input
            value={email}
            onChange={handleInput}
          />
          <FormErrorMessage position={'absolute'}>
            Email is required.
          </FormErrorMessage>
        </FormControl>
        <FormControl
          as={'fieldset'}
          isRequired
          isInvalid={isError.phone}
          id='phone'
        >
          <FormLabel
            as={'legend'}
            requiredIndicator={<></>}
          >
            Phone Number
          </FormLabel>
          <Input
            value={phone}
            onChange={handleInput}
          />
          <FormErrorMessage position={'absolute'}>
            Phone number is required.
          </FormErrorMessage>
        </FormControl>
      </Flex>
      <FormControl
        as={'fieldset'}
        isRequired
        isInvalid={isError.subject}
        id='subject'
        marginTop={['1.5rem', null, '2rem']}
      >
        <FormLabel
          as={'legend'}
          requiredIndicator={<></>}
        >
          Subject
        </FormLabel>
        <Input
          value={subject}
          onChange={handleInput}
        />
        <FormErrorMessage position={'absolute'}>
          Subject is required.
        </FormErrorMessage>
      </FormControl>
      <FormControl
        as={'fieldset'}
        isRequired
        isInvalid={isError.message}
        id='message'
        marginTop={['1.5rem', null, '2rem']}
      >
        <FormLabel
          as={'legend'}
          requiredIndicator={<></>}
        >
          Message
        </FormLabel>
        <Input
          value={message}
          onChange={handleInput}
        />
        <FormErrorMessage position={'absolute'}>
          Message is required.
        </FormErrorMessage>
      </FormControl>
      <Button
        isDisabled={isDisabled}
        _hover={isDisabled ? {} : undefined}
        variant={'contact'}
        alignSelf={'flex-end'}
        marginTop={'2rem'}
        onClick={handleSubmit}
      >
        Send Message
      </Button>
      <Text variant={'fineprint'}>
        This site is protected by reCAPTCHA and the Google
        <Link
          href='https://policies.google.com/privacy'
          color={'blue.500'}
        >
          {` Privacy Policy `}
        </Link>{' '}
        and
        <Link
          href='https://policies.google.com/terms'
          color={'blue.500'}
        >
          {` Terms of Service `}
        </Link>{' '}
        apply.
      </Text>
      <ReCAPTCHA
        //@ts-ignore Legacy Ref vs MutableRef
        ref={recapchaValue}
        size={'invisible'}
        sitekey={process.env.NEXT_PUBLIC_INVIS_RECAP_SITE as string}
        onChange={onChange}
      />
    </Flex>
  )
}
