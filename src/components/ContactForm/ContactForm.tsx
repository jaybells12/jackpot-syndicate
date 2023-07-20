import {
  Flex,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  FlexProps,
} from '@chakra-ui/react'

import { ChangeEvent, useReducer, useState, ReactElement } from 'react'

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
        break
      case 'last':
        setLast(value)
        break
      case 'email':
        setEmail(value)
        break
      case 'phone':
        setPhone(value)
        break
      case 'subject':
        setSubject(value)
        break
      case 'message':
        setMessage(value)
        break
      default:
        console.log('This should never happen')
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
          <FormErrorMessage>First name is required.</FormErrorMessage>
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
          <FormErrorMessage>Last name is required.</FormErrorMessage>
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
          <FormErrorMessage>Email is required.</FormErrorMessage>
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
          <FormErrorMessage>Phone number is required.</FormErrorMessage>
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
        <FormErrorMessage>Subject is required.</FormErrorMessage>
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
        <FormErrorMessage>Message is required.</FormErrorMessage>
      </FormControl>
      <Button
        variant={'contact'}
        alignSelf={'flex-end'}
        marginTop={'2rem'}
      >
        Send Message
      </Button>
    </Flex>
  )
}
