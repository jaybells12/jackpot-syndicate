import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  SpaceProps,
} from '@chakra-ui/react'
import { ChangeEvent } from 'react'

export type ContactFormFieldProps = Partial<SpaceProps> & {
  isRequired: boolean
  isDisabled: boolean
  isInvalid: boolean
  id: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const ContactFormField = ({
  isRequired = false,
  isDisabled,
  isInvalid,
  id,
  value,
  onChange,
  ...spaceProps
}: ContactFormFieldProps) => {
  const name = id.charAt(0).toUpperCase() + id.slice(1)
  return (
    <FormControl
      as={'fieldset'}
      isRequired={isRequired}
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      id={id}
      {...spaceProps}
    >
      <FormLabel
        as={'legend'}
        requiredIndicator={<>*</>}
      >
        {id === 'first' || id === 'last' ? `${name} Name` : name}
      </FormLabel>
      <Input
        value={value}
        onChange={onChange}
      />
      <FormErrorMessage
        position={'absolute'}
        marginTop={0}
      >
        {`${
          id === 'first' || id === 'last' ? `${name} name` : name
        } is required.`}
      </FormErrorMessage>
    </FormControl>
  )
}
