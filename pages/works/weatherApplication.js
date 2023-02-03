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
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Weather Application">
    <Container>
      <Title>Weather Application</Title>
      <P>React JS Weather App - OpenWeatherMap API</P>
      <P>Weather forecast app, Display Humidity, Wind and feels like</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, JavaScript, React, API</span>
        </ListItem>
        <ListItem></ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Demo & Source Code</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://weather-app-react1.netlify.app/" target="_blank">
            <Badge mr={2}>Weather Application Demo</Badge>
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link
            href="https://github.com/yakir1992/weather-app-react"
            target="_blank"
          >
            <Badge mr={2}>Weather Application Code</Badge>
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>

      <WorkImage
        src="/images/works/weatherApplication01.png"
        alt="weatherApplication"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
