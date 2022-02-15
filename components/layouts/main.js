import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import Navbar from '../navbar'
import Footer from '../footer'
const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
       <meta name="description" content="Edgardo's homepage" />
        <meta name="author" content="Edgardo Yoliani" />
        <meta name="author" content="Edgardo Yoliani" />
        <link rel="shortcut icon" href="/assets/icon/catunicorn.png" type="image/x-icon" />
        <title>Edgardo Yoliani - Homepage</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
