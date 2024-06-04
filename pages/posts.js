import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import ansibleAutomation from '../public/images/contents/ansible.png'
import thumbHowToUseInkdrop from '../public/images/contents/youtube-how-to-use-inkdrop.jpg'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={30} mb={4}>
        Popular Posts
      </Heading>

      { <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Ansible: The Power of IT Automation"
            thumbnail={ansibleAutomation}
            href="https://medium.com/@yakir1992/exploring-ansible-the-power-of-it-automation-2235ab4bf017"
          />
          {/* <GridItem
            title="How to take notes in Markdown efficiently with Inkdrop"
            thumbnail={thumbHowToUseInkdrop}
            href="https://www.youtube.com/watch?v=-qBavwqc_mY"
          /> */}
        </SimpleGrid>
      </Section>}
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
