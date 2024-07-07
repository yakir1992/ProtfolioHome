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
    <Layout title="Serverless-API">
      <Container>
        <Title>Serverless API</Title>
        <P>

        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Terraform, AWS API Gateway, AWS Lambda, DynamoDB, Amazon Cognito, CloudWatch</span>
          </ListItem>
        </List>
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Source Code</Center>
        </Heading>
        <UnorderedList my={4}>
          <ListItem>
            <Link
              href="https://github.com/yakir1992/Serverless-API-Terraform"
              target="_blank"
            >
              <Badge mr={2}>Source Code</Badge>
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </UnorderedList>
        <WorkImage src="/images/works/serverless-api-architecture.png" alt="ServerlessAPI" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  