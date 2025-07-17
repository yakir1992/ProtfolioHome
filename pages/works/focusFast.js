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
    <Layout title="FocusFast">
        <Container>
            <Title>FocusFast - Productivity Application</Title>
            <P>
                Achieve deep focus in minutes, not hours. Drop into flow state on demand with FocusFast.
                No more wasted hours trying to concentrate. Start your focus journey now.
            </P>
            <P>
                A modern productivity application designed to help high-performing professionals
                achieve better focus and concentration through structured sessions and proven techniques.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Web</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>React, Next.js, TypeScript, Chakra UI, Node.js</span>
                </ListItem>
                <ListItem>
                    <Meta>Features</Meta>
                    <span>Focus Sessions, User Authentication, Progress Tracking, Responsive Design</span>
                </ListItem>
            </List>

            <Heading as="h4" fontSize={16} my={6}>
                <Center>Demo & Source Code</Center>
            </Heading>

            <UnorderedList my={4}>
                <ListItem>
                    <Link href="https://focusfa.st" target="_blank">
                        <Badge mr={2}>Live Demo</Badge>
                        <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>

                <ListItem>
                    <Link
                        href="https://github.com/yakir1992/focusfast"
                        target="_blank"
                    >
                        <Badge mr={2}>Source Code</Badge>
                        <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
            </UnorderedList>

            <WorkImage
                src="public/images/works/focusFast.png"
                alt="FocusFast"
            />
        </Container>
    </Layout>
)

export default Work
export { getStaticProps } from '../../components/chakra'
