import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Icon
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import { BioSection, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-items'
import { IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="8"
          bg={useColorModeValue('whiteAlpha.500', 'purple.200')}
          p={5}
          mb={6}
          mt={5}
          align="center"
        >
          Hello, I&apos;m a developer based in Seoul
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Ahrim Ahn
            </Heading>
            <p style={{ fontSize: '20px' }}>Developer | Product Manager</p>
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
              boxSize="110px"
              display="inline-block"
              borderRadius="full"
              src="/images/lemon.png"
              alt="Profile Image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            I'm a Front-end Developer in Seoul. I have an interest in both
            Computer Engineering and Product Managing, and a great passion in
            building my own service. I love deep-diving into code, and also have
            a willingness to review others' codes. Plus, I love to solve
            problems related to our real life.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/portfolio">
              <Button rightIcon={<ChevronRightIcon />} bgColor="violet">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1996</BioYear>
            Born in Seoul, South Korea
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Graduate Sogang University, Economics
          </BioSection>
        </Section>

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            About me
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/ahnella04" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="purple.200"
                  leftIcon={<Icon as={IoLogoGithub} />}
                  style={{ outline: 'none' }}
                >
                  @ahnella04
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.instagram.com/ahnella_04" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="purple.200"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @ahnella_04
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
