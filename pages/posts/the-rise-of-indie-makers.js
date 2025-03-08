import { Container, Heading, Text, Box, Badge, Flex, Divider, useColorModeValue } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Image from 'next/image'
import Section from '../../components/section'

const IndieMakersPost = () => {
    const badgeBg = useColorModeValue('orange.100', 'orange.800')
    const badgeColor = useColorModeValue('orange.800', 'orange.100')

    return (
        <Layout title="The Rise of Indie Makers">
            <Container maxW="container.md">
                <Section delay={0.1}>
                    <Box mb={6}>
                        <Badge
                            bg={badgeBg}
                            color={badgeColor}
                            fontSize="sm"
                            fontWeight="medium"
                            px={3}
                            py={1}
                            borderRadius="full"
                            mb={4}
                            display="inline-block"
                        >
                            Development
                        </Badge>
                        <Heading as="h1" fontSize={["2xl", "3xl", "4xl"]} mb={4}>
                            The Rise of Indie Makers: Building in Public
                        </Heading>
                        <Text color="gray.500" mb={8}>October 12, 2023 • 6 min read</Text>
                    </Box>

                    <Box position="relative" h={["200px", "300px", "400px"]} w="100%" mb={8} borderRadius="lg" overflow="hidden">
                        <Image
                            src="/images/posts/the-rise-of-indie-makers.jpg"
                            alt="The Rise of Indie Makers"
                            layout="fill"
                            objectFit="cover"
                            unoptimized
                        />
                    </Box>

                    <Box fontSize={["md", "lg"]} lineHeight="tall">
                        <Text fontWeight="semibold" fontSize={["xl", "2xl"]} mb={4}>
                            In recent years, the indie maker movement has gained significant traction.
                        </Text>

                        <Text mb={6}>
                            More individuals are choosing to build their own products and services,
                            often while sharing their journey publicly. This approach not only fosters
                            community engagement but also provides valuable feedback and support.
                        </Text>

                        <Heading as="h2" size="lg" mb={4} mt={8}>
                            What Makes an Indie Maker?
                        </Heading>

                        <Text mb={6}>
                            Indie makers are typically characterized by their resourcefulness and
                            creativity. They leverage various tools and platforms to bring their ideas
                            to life, often with limited budgets. The rise of no-code tools and
                            accessible online resources has made it easier than ever for anyone to
                            start their own venture.
                        </Text>

                        <Heading as="h2" size="lg" mb={4} mt={8}>
                            The Power of Building in Public
                        </Heading>

                        <Text mb={6}>
                            Building in public allows indie makers to document their progress, share
                            insights, and connect with like-minded individuals. This transparency can
                            lead to a loyal following and potential customers who are invested in the
                            maker's journey.
                        </Text>

                        <Text mb={6}>
                            When you share your process openly, you:
                        </Text>

                        <Box pl={4} mb={6}>
                            <Text>• Create authentic connections with your audience</Text>
                            <Text>• Receive real-time feedback on your product</Text>
                            <Text>• Build a community around your brand</Text>
                            <Text>• Hold yourself accountable to your goals</Text>
                            <Text>• Learn from other makers in the space</Text>
                        </Box>

                        <Text mb={6}>
                            If you're considering becoming an indie maker, remember that the journey
                            is just as important as the destination. Embrace the challenges, learn
                            from your experiences, and don't hesitate to share your story with the
                            world.
                        </Text>
                    </Box>
                </Section>
            </Container>
        </Layout>
    )
}

export default IndieMakersPost
export { getStaticProps } from '../../components/chakra'
