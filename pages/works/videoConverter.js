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
    <Layout title="Microservices Video Converter">
      <Container>
        <Title>Convert mp4 videos to mp3 in a microservices architecture</Title>
        <P>
        Deploying a Python-based Microservice Application on AWS EKS
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>AWS, EKS, Kubernetes, PostgreSQL, MongoDB, Helm, RabbitMQ</span>
          </ListItem>
        </List>
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Source Code</Center>
        </Heading>
        <UnorderedList my={4}>
          <ListItem>
            <Link
              href="https://github.com/yakir1992/Microservices_Video_To_Audio_Converter_DevOps"
              target="_blank"
            >
              <Badge mr={2}>Source Code</Badge>
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </UnorderedList>
        <WorkImage src="/images/works/videoConverter.png" alt="videoConverter" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getStaticProps } from '../../components/chakra'
  