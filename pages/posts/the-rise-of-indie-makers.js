import { Container, Heading, Text } from '@chakra-ui/react';
import Layout from '../../components/layouts/article';
import NextLink from 'next/link'
import Image from 'next/image'
import { Box, LinkBox, LinkOverlay } from '@chakra-ui/react'

// Define the thumbnail path as a constant
const thumbRiseOfIndieMakers = '/images/posts/the-rise-of-indie-makers.jpg';

const IndieMakersPost = () => (
    <Layout title="The Rise of Indie Makers" thumbnail={thumbRiseOfIndieMakers}>
        <Container>
            <Heading as="h1" mb={4}>
                The Rise of Indie Makers: Building in Public
            </Heading>
            <Text fontSize="lg" mb={4}>
                In recent years, the indie maker movement has gained significant traction.
                More individuals are choosing to build their own products and services,
                often while sharing their journey publicly. This approach not only fosters
                community engagement but also provides valuable feedback and support.
            </Text>
            <Text mb={4}>
                Indie makers are typically characterized by their resourcefulness and
                creativity. They leverage various tools and platforms to bring their ideas
                to life, often with limited budgets. The rise of no-code tools and
                accessible online resources has made it easier than ever for anyone to
                start their own venture.
            </Text>
            <Text mb={4}>
                Building in public allows indie makers to document their progress, share
                insights, and connect with like-minded individuals. This transparency can
                lead to a loyal following and potential customers who are invested in the
                maker's journey.
            </Text>
            <Text mb={4}>
                If you're considering becoming an indie maker, remember that the journey
                is just as important as the destination. Embrace the challenges, learn
                from your experiences, and don't hesitate to share your story with the
                world.
            </Text>
        </Container>
    </Layout>
);

export default IndieMakersPost; 