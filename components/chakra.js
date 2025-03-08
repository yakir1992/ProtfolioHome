import { ChakraProvider } from '@chakra-ui/react'
import theme from '../lib/theme'

export function Chakra({ cookies, children }) {
  return (
    <ChakraProvider theme={theme}>
      {children}
    </ChakraProvider>
  )
}

export function getStaticProps() {
  return {
    props: {}
  }
}

export default Chakra