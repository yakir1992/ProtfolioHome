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
      <Title>DevSecOps - Netflix Clone1</Title>
      <P>
      Deploy Netflix-like project on AWS using Jenkins for DevSecOps: Phase 1: Initial setup - Launch EC2 with Ubuntu 22.04, clone code, install Docker, and run app. Phase 2: Security - Install SonarQube and Trivy. Phase 3: CI/CD - Install Jenkins, set up pipeline. Phase 4: Monitoring - Install Prometheus and Grafana. Phase 5: Notification - Implement email alerts. Phase 6: Kubernetes - Set up cluster and monitor with Prometheus. Phase 7: Cleanup - Terminate unnecessary EC2 instances.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>AWS, Docker, Kubernetes, Jenkins, Trivy, SonarQube, Grafana, Prometheus</span>
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
