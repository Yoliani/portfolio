import NextLink from 'next/link'

import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button,
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        textAlign="center"
      >
        Hello, I&apos;m a developer based in Colombia!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Edgardo Yoliani
          </Heading>
          <p>Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="140px"
            display="inline-block"
            borderRadius="full"
            src="/assets/profile/profile-circle.png"
            alt="profile image"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          I am a systems engineering student, and a coffee adventurer. I like
          challenges, and I like to continually learn different tools and
          languages. I love solving real-life problems because of the
          interaction they can have with different people.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section tittle">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2002</BioYear>
          Born in Barranquilla, Colombia.
        </BioSection>
        <BioSection>
          <BioYear>2019 to present</BioYear>I started studying systems
          engineering and industrial engineering.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Hobbies ❤️
        </Heading>
        <Paragraph>
          Music, Read novels and comics, Write poems and stories.
        </Paragraph>
      </Section>
    </Container>
  )
}
export default Page
