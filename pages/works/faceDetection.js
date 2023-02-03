import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Face Detection">
    <Container>
      <Title>Face Detection</Title>
      <P>Real Time Face Detection With JavaScript!</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, JavaScript</span>
        </ListItem>
      </List>
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Demo & Source Code</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://face-detectionz.netlify.app/" target="_blank">
            <Badge mr={2}>Face Detction Demo</Badge>
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link
            href="https://github.com/yakir1992/Face-Detection"
            target="_blank"
          >
            <Badge mr={2}>Face Detection Code</Badge>
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>

      <WorkImage src="/images/works/thumbfaceDetection.PNG" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
