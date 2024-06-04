import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import ansibleAutomation from '../public/images/contents/infrastructure-ansible-heasder-min-p-800.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={30} mb={4}>
        Popular Posts
      </Heading>

      { <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          {/* <GridItem
            title="Ansible: The Power of IT Automation"
            thumbnail={ansibleAutomation}
            href="https://medium.com/@yakir1992/exploring-ansible-the-power-of-it-automation-2235ab4bf017"
          /> */}
          {<GridItem
            title="Ansible The Power of IT Automation"
            thumbnail={ansibleAutomation}
            href="https://medium.com/@yakir1992/exploring-ansible-the-power-of-it-automation-2235ab4bf017"/> 
            }
        </SimpleGrid>
      </Section>}
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
