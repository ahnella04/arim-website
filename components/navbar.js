import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button.js'

const LinkItem = ({ href, path, children }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={active ? 'glassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justifyContent="flex-end"
      >
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          justifyContent="flex-end"
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          <LinkItem href="/portfolio">PORTFOLIO</LinkItem>
          <LinkItem href="/posts">POST</LinkItem>
          <LinkItem href="https://velog.io/@ahnella04">BLOG</LinkItem>
        </Stack>

        <ThemeToggleButton />
        <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<HamburgerIcon />}
              variant="outline"
              aria-label="Options"
            />
            <MenuList>
              <NextLink href="/" passHref>
                <MenuItem as={Link}>About</MenuItem>
              </NextLink>
              <NextLink href="/portfolio" passHref>
                <MenuItem as={Link}>PORTFOLIO</MenuItem>
              </NextLink>
              <NextLink href="/post" passHref>
                <MenuItem as={Link}>POST</MenuItem>
              </NextLink>
              <MenuItem
                as={Link}
                href="https://velog.io/@ahnella04"
                target="_blank"
              >
                BLOG
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
