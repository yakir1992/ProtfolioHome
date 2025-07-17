import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbNetflix from '../public/images/works/DevSecOps.png'
import thumbvideoConverter from '../public/images/works/videoConverter.png'
import thumbfaceDetection from '../public/images/works/thumbfaceDetection.png'
import thumbweatherApplicatoin from '../public/images/works/thumbweatherApplicatoin.png'
import thumbServerless from '../public/images/works/thumbServerless.png'
import thumbFocusFast from '../public/images/works/focusFast.png'


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
          <WorkGridItem id="focusFast" title="FocusFast - Productivity App" thumbnail={thumbFocusFast}>
            Achieve deep focus in minutes, not hours. Drop into flow state on demand.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="serverless" title="Serverless API" thumbnail={thumbServerless}>
            Serverless API with Infrastructure as Code using Terraform
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="videoConverter"
            title="Micro Services Video To Audio Converter"
            thumbnail={thumbvideoConverter}
          >
            Converting mp4 videos to mp3 in a microservices architecture
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
export { getStaticProps } from '../components/chakra'
