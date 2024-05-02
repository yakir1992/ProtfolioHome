import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an DevOps Engineer based in Israel!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Yakir Ben Harush
          </Heading>
          <p>DevOps Engineer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/yakir.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
        With 8 years of experience as an IT Administrator and 2 years specializing in DevOps, I possess a diverse skill set encompassing a range of technologies essential for modern IT operations and software development. My expertise includes:

Operating Systems: Proficient in managing and administering various operating systems such as Windows Server, Linux (Ubuntu, CentOS), and Unix.
Networking: Skilled in network administration, including TCP/IP, DNS, DHCP, VPN, firewalls, and routing protocols.
Virtualization: Experienced in virtualization technologies such as VMware vSphere and Microsoft Hyper-V for efficient resource utilization and infrastructure scalability.
Cloud Services: Knowledgeable in cloud computing platforms like Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP), with hands-on experience in deploying and managing cloud-based infrastructure.
Containerization and Orchestration: Proficient in containerization technologies like Docker and container orchestration platforms such as Kubernetes for automating deployment, scaling, and management of containerized applications.
Configuration Management: Skilled in configuration management tools like Ansible and Puppet for automating the provisioning and configuration of servers and infrastructure.
Continuous Integration/Continuous Deployment (CI/CD): Experienced in implementing CI/CD pipelines using tools like Jenkins, GitLab CI/CD, and CircleCI to automate software delivery processes and ensure rapid, reliable releases.
Monitoring and Logging: Familiar with monitoring and logging tools such as Prometheus, Grafana, ELK Stack (Elasticsearch, Logstash, Kibana), and Splunk for real-time visibility into system performance and troubleshooting.
Scripting and Automation: Proficient in scripting languages like Bash, Python, and PowerShell for automating routine tasks, system administration, and deployment processes.
Version Control: Experienced in version control systems such as Git for managing code repositories and facilitating collaboration among development teams.
This summary highlights my extensive experience and proficiency in key technologies essential for modern IT administration, DevOps, and software development.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1992</BioYear>
          Born in Jerusalem, Israel.
        </BioSection>
        <BioSection>
          <BioYear>2016</BioYear>
          Completed PHP Web Expert Certification at JohnBryce HiTech College
        </BioSection>
        <BioSection>
          <BioYear>2016</BioYear>
          Working at MalamTeam as an IT Administartor 
        </BioSection>
        <BioSection>
          <BioYear>2016 to present</BioYear>
          Passionate Web Developer
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>Football, Machine Learning, Automation</Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/yakir1992" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @yakir1992
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/yakir1992" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @yakir1992
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/yakirbenharosh" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @yakirbenharosh
              </Button>
            </Link>
          </ListItem>
        </List>

        <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
