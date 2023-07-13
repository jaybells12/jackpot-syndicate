import {
  Flex,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  FlexProps,
} from '@chakra-ui/react'
import sendEmail from 'src/utils/sendEmail'
import { ChangeEvent, MouseEvent, useReducer, useState } from 'react'

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

// Use reducer to dispatch form field errors. Currently no validation exists.
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

  // If an error property is true, then return false
  const isValid = () => {
    return !(
      isError.first ||
      isError.last ||
      isError.email ||
      isError.subject ||
      isError.message
    )
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
    verifyRequiredFields()
    const validated = isValid()
    if (validated) {
      sendEmail({ first, last, email, phone, subject, message })
      //At this point, need to do something to hide the form and render a thank you message
    }
    //if this point is reached, attempt is invalid, render a modal explaining issue?
  }

  return (
    <Flex
      direction={'column'}
      paddingTop={'5rem'}
      paddingRight={'2rem'}
      paddingBottom={'2.25rem'}
      {...props}
    >
      <Flex gap={'1.5rem'}>
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
        marginTop={'2rem'}
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
        marginTop={'2rem'}
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
        marginTop={'2rem'}
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
        variant={'contact'}
        alignSelf={'flex-end'}
        marginTop={'2rem'}
        onClick={handleSubmit}
      >
        Send Message
      </Button>
    </Flex>
  )
}
