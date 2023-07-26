import { Box, Button, Heading, ScaleFade, Text } from '@chakra-ui/react'
import { ElementSize } from '@zag-js/element-size'

export type ContactFormResultsProps = {
  size: ElementSize | undefined
  when: boolean
  result: boolean
  tryAgain: () => void
  duration?: number
}

export const ContactFormResults = ({
  size,
  when,
  result,
  tryAgain,
  duration = 0.5,
}: ContactFormResultsProps) => {
  const message = {
    heading: result ? 'Thank you!' : 'Oops!',
    body: result
      ? 'Your message has been successfully sent.\nWe will contact you very soon!'
      : 'Something went wrong.',
  }
  return (
    <Box
      position={'absolute'}
      height={'100%'}
      width={'100%'}
      zIndex={2}
      pointerEvents={'none'}
    >
      <ScaleFade
        in={when}
        initialScale={0}
        transition={{ enter: { duration }, exit: { duration } }}
      >
        <Box
          width={size?.width}
          height={size?.height}
          borderRadius={'10px'}
          bg={'form.primary'}
          position={'relative'}
          pointerEvents={'all'}
        >
          <Box
            borderRadius={'10px'}
            border={'2px solid'}
            borderColor={'form.trim'}
            position={'absolute'}
            inset={0}
            margin={'auto'}
            padding={'0.75rem'}
            width={'fit-content'}
            height={'fit-content'}
            whiteSpace={'pre-line'}
          >
            <Heading
              as={'h5'}
              size={'lg'}
              lineHeight={1}
            >
              {message.heading}
            </Heading>
            <Text mt={'0.5rem'}>{message.body}</Text>
            {!result && (
              <Button
                variant={'contact'}
                mt={'0.5rem'}
                onClick={tryAgain}
              >
                Try Again?
              </Button>
            )}
          </Box>
        </Box>
      </ScaleFade>
    </Box>
  )
}
