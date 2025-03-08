import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import theme from '../lib/theme'

export function Chakra({ cookies, children }) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider
        options={{
          initialColorMode: 'light',
          useSystemColorMode: true
        }}
      >
        {children}
      </ColorModeProvider>
    </ChakraProvider>
  )
}

export function getStaticProps() {
  return {
    props: {}
  }
}
