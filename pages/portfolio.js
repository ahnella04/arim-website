import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-items'

import thumbExcelso from '../public/images/portfolio/excelso.png'

const Portfolio = () => {
  return (
    <Container>
      <Heading as="h3" fontSize="20" mb="4">
        Portfolio
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.2}>
          <WorkGridItem
            id="excelso"
            title="Excelso"
            thumbnail={thumbExcelso}
            style={{ width: '80px' }}
          >
            A Franchise Coffee Recommendation Site with +4 Famous Cafe. You can
            see Supplements such as Calorie, Sugar, Fat... which in a cup of
            Coffee.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Portfolio
