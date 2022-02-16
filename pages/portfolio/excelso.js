import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Excelso">
      <Container>
        <Title>
          Excelso <Badge>2021</Badge>
        </Title>
        <Paragraph></Paragraph>
        <List ml={4} my={4}>
          {/* <ListItem>
            <Meta>Website</Meta>
            <Link>
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem> */}
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, TypeScript, Styled-components, Node.js</span>
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/codestates/Excelso-client">
              https://github.com/codestates/Excelso-client
              <ExternalLinkIcon ml="4px" />
            </Link>
          </ListItem>
          {/* <ListItem>
            <Meta>Post</Meta>
            <Link></Link>
          </ListItem> */}
        </List>
        {/* <WorkImage /> */}
      </Container>
    </Layout>
  )
}

export default Work
