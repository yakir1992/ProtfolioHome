import { Container, Heading, SimpleGrid, Box, Flex, Text, Badge, useColorModeValue } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { BlogItem } from '../components/blog-item'
import { IoHeartOutline, IoChatbubbleOutline } from 'react-icons/io5'

const Posts = () => {
  const bgBox = useColorModeValue('whiteAlpha.800', 'whiteAlpha.200')

  return (
    <Layout title="Blog Posts">
      <Container maxW="container.xl">
        <Heading as="h2" fontSize={32} mb={8} mt={4}>
          Blog Posts
        </Heading>

        <SimpleGrid columns={[1, 1, 2, 3]} spacing={8}>
          <Section delay={0.1}>
            <BlogItem
              title="working on becoming a indie maker besides my full time job"
              thumbnail="/images/posts/the-rise-of-indie-makers.jpg"
              href="/posts/the-rise-of-indie-makers"
              date="Mar 08, 2025"
              category="Development"
              excerpt="More individuals are choosing to build their own products and services, often while sharing their journey publicly."
            />
          </Section>



        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Posts
export { getStaticProps } from '../components/chakra'
