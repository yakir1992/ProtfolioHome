import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const Skills = () => (
  <Layout title="Skills">
    <Container>
      <Heading as="h3" fontSize={30} mb={4}>
        Skills
      </Heading>
      <SimpleGrid>JavaScript, CSS, HTML</SimpleGrid>
    </Container>
  </Layout>
)

export default Skills
export { getServerSideProps } from '../components/chakra'
