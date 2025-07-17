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
                            become a indie maker 🤘🏻
                        </Heading>
                        <Text color="gray.500" mb={8}>March 8, 2025 • 5 min read</Text>
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
                        <Heading as="h2" size="lg" mb={4} mt={8} className="underline">
                            transform your passion into a profitable business
                        </Heading>

                        <Text mb={6}>
                            in the past i felt like i need to have a full time job to make money and support my family.
                            but now i feel like i can make money by doing what i love.
                            i'm not saying that you need to quit your job to become a indie maker.
                            but you need to find a way to make money while doing what you love.
                            so how to do that?
                            first, you need to find a problem that you want to solve.
                            second, you need to find a solution to that problem.
                            third, you need to build a product that solves that problem.
                            fourth, you need to market your product.
                            fifth, you need to sell your product.
                            sixth, you need to repeat the process.
                        </Text>

                        <Heading as="h2" size="lg" mb={4} mt={8}>
                            i did not liked to code in the past
                        </Heading>

                        <Text mb={6}>
                            now when i code meaningful applications that help people to make their life easier,
                            i feel like i'm doing what i love.
                            also my inner voice is quiet now and i'm more focused on my goals.
                            it's like a magic, you will feel like you're on the right path.
                            i'm not saying that it's easy, but it's worth it.
                            i also feel like i'm more productive now, i have more energy and i'm more motivated.
                            also the entrepreneur mindset is absolutely something that i'm interested in.
                            so indie maker is a perfect fit for me.
                        </Text>

                        <Heading as="h2" size="lg" mb={4} mt={8}>
                            the power of building in public
                        </Heading>

                        <Text mb={6}>
                            building in public allows you to get feedback from your audience.
                            you can get feedback on your product, your website, your business model, etc.
                            you meet new people and you can learn from them.
                            you can build a community around your brand.
                        </Text>

                        <Text mb={6}>
                            when you share your process openly, you:
                        </Text>

                        <Box pl={4} mb={6}>
                            <Text>• create authentic connections with your audience</Text>
                            <Text>• receive real-time feedback on your product</Text>
                            <Text>• build a community around your brand</Text>
                            <Text>• hold yourself accountable to your goals</Text>
                            <Text>• learn from other makers in the space</Text>
                        </Box>

                        <Text mb={6}>
                            if you're considering becoming an indie maker, remember that the journey
                            is just as important as the destination. embrace the challenges, learn
                            from your experiences, and don't hesitate to share your story with the
                            world.
                        </Text>
                        <Heading as="h2" size="lg" mb={4} mt={8}>
                            what's next?
                        </Heading>

                        <Text mb={6}>
                            right now working on my first product and i'm excited to share it with you.
                            the product is a tool that helps you to get focus and stay focused.
                            FocusFast is the name of the product.
                            right now creating features and working on the website.
                            i will keep you updated on my progress.<br />
                            best regards,<br />
                            yakir
                        </Text>
                    </Box>
                </Section>
            </Container>
        </Layout >
    )
}

export default IndieMakersPost
export { getStaticProps } from '../../components/chakra'
