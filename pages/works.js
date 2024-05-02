import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbNetflix from '../public/images/works/DevSecOps.png'
import thumbvideoConverter from '../public/images/works/videoConverter.png'
import thumbfaceDetection from '../public/images/works/thumbfaceDetection.png'
import thumbweatherApplicatoin from '../public/images/works/thumbweatherApplicatoin.png'


const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={30} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="netflix" title="DevSecOps Flow Netflix Clone" thumbnail={thumbNetflix}>
          Deployed Netflix Clone on Cloud using Jenkins - DevSecOps Project
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="videoConverter"
            title="Micro Services Video To Audio Converter"
            thumbnail={thumbvideoConverter}
          >
            Real Time Face Detection With JavaScript
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
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
