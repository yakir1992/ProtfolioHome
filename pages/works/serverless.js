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

This project leverages Terraform to deploy a serverless API on AWS, utilizing a range of serverless services for efficient and scalable application development. The technology stack includes:

Terraform: Infrastructure as Code tool for automating the provisioning of AWS resources.
AWS API Gateway: Endpoint management to create, publish, maintain, monitor, and secure APIs at scale.
AWS Lambda: Serverless compute service for executing code without provisioning or managing servers.
DynamoDB: Fully managed NoSQL database for storing application data with seamless scalability.
Amazon Cognito: Provides authentication, authorization, and user management for your web and mobile apps.
CloudWatch: Monitoring and logging service for serverless applications, ensuring operational visibility.
This setup offers a serverless architecture that scales with demand, ensuring high availability, low operational overhead, and cost efficiency. Ideal for modern applications needing flexible, scalable backend services without managing infrastructure.
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
              href="https://github.com/yakir1992/DevSecops-Netflix"
              target="_blank"
            >
              <Badge mr={2}>Source Code</Badge>
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </UnorderedList>
        <WorkImage src="/images/works/DevSecOps.png" alt="Netflix" />
        <WorkImage src="/images/works/netflix_02.PNG" alt="Netflix" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  