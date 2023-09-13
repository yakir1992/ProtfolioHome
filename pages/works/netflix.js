import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center,
  UnorderedList
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Netflix">
    <Container>
      <Title>Netflix Clone</Title>
      <P>
        Netflix UI clone built on React, mongoDB and NodeJS. Boilerplate
        configured using Webpack and Babel.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://beat-netflix-clone.vercel.app/">
            https://beat-netflix-clone.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, NodeJS, Express, Bootstrap, Sass, MongoDB</span>
        </ListItem>
      </List>
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Demo & Source Code</Center>
      </Heading>
      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://beat-netflix-clone.vercel.app/" target="_blank">
            <Badge mr={2}>Live Demo</Badge>
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://github.com/yakir1992/Netflix-UIUX"
            target="_blank"
          >
            <Badge mr={2}>Source Code</Badge>
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>
      <WorkImage src="/images/works/netflix_01.png" alt="Netflix" />
      <WorkImage src="/images/works/netflix_02.PNG" alt="Netflix" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
