import { Container, Box, Heading, Text, Button, Code } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const TodoApp = () => {
    const [iframeStatus, setIframeStatus] = useState('Loading...')
    const [showTodoApp, setShowTodoApp] = useState(true)

    useEffect(() => {
        // This will handle properly loading your Todo app
        const iframe = document.getElementById('todo-app-iframe')
        if (iframe) {
            iframe.onload = () => {
                setIframeStatus('Loaded successfully')
            }

            iframe.onerror = () => {
                setIframeStatus('Failed to load Todo app')
            }
        }
    }, [])

    return (
        <Layout title="Todo App">
            <Container maxW="container.xl" p={0}>
                <Box
                    borderRadius="lg"
                    mb={6}
                    p={3}
                    textAlign="center"
                    bg="whiteAlpha.200"
                    css={{ backdropFilter: 'blur(10px)' }}
                >
                    <Heading as="h2" size="lg">
                        My Todo Application
                    </Heading>
                </Box>

                <Section delay={0.1}>
                    {/* Status information */}
                    <Box mb={4} p={4} bg="whiteAlpha.100" borderRadius="md">
                        <Text>Status: {iframeStatus}</Text>
                        <Text mt={2}>Looking for content at: <Code>/todo/index.html</Code></Text>
                        <Button
                            mt={2}
                            size="sm"
                            colorScheme="teal"
                            onClick={() => setShowTodoApp(!showTodoApp)}
                        >
                            {showTodoApp ? 'Hide iframe' : 'Show iframe'}
                        </Button>
                    </Box>

                    {showTodoApp && (
                        <Box
                            borderRadius="lg"
                            overflow="hidden"
                            width="100%"
                            height="800px"
                            border="1px solid"
                            borderColor="whiteAlpha.300"
                        >
                            <iframe
                                id="todo-app-iframe"
                                src="/todo/index.html"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                title="Todo Application"
                            />
                        </Box>
                    )}
                </Section>
            </Container>
        </Layout>
    )
}

export default TodoApp
export { getStaticProps } from '../components/chakra'