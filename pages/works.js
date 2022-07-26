import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbNetflix from '../public/images/works/netflix_01.png'
import thumbfaceDetection from '../public/images/works/thumbfaceDetection.png'
import thumbweatherApplicatoin from '../public/images/works/thumbweatherApplicatoin.png'
import thumbMargelo from '../public/images/works/margelo_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={30} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="netflix" title="Netflix" thumbnail={thumbNetflix}>
            A Fully Responsive clone of Netflix website built using React with
            Firebase and more
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="faceDetection"
            title="Face Detection"
            thumbnail={thumbfaceDetection}
          >
            Real Time Face Detection With JavaScript
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="weatherApplication"
            title="Weather Application"
            thumbnail={thumbweatherApplicatoin}
          >
            React JS Weather App - OpenWeatherMap API
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="margelo" thumbnail={thumbMargelo} title="Margelo">
            A website of the elite app development and contracting agency based
            in Austria
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
