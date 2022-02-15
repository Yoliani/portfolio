import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import thumbEcoride from '../public/assets/works/logoecoride.png'
import thumbNike from '../public/assets/works/nikeeco.png'
import thumbGabarra from '../public/assets/works/lagabarratransporte.png'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-items'
const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="ecoride" title="Ecoride" thumbnail={thumbEcoride} >
            Website for the sale of bicycles and tours
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="nike-ecommerce" title="Nike Ecommerce" thumbnail={thumbNike}>
            Nike requires a sales system for its products, in which users can see the products they offer, so that their customers can view, rate them and offer their opinion through a comment.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="la-gabarra" title="La Gabarra S.A.S" thumbnail={thumbGabarra}>
            Website of an ocean freight forwarder company           </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works
