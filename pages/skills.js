import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const Skills = () => (
  <Layout title="Skills">
    <Container>
      <Heading as="h3" fontSize={30} mb={4}>
        Tech Skills
      </Heading>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        HTML, CSS, JavaScript, PHP, React, TypeScript, Firebase
      </Box>
    </Container>
  </Layout>
)

export default Skills
export { getServerSideProps } from '../components/chakra'
