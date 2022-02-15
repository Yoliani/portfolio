import { Box, Container } from '@chakra-ui/react'
import Image from 'next/image'
import footerCat from '../public/assets/footer/footer.svg'
const Footer = () => {
  return (
    <Container align="center" alignItems="center">
      <Image src={footerCat} alt="footer" width="400px" />
      <Box align="center" alignItems="center" opacity={1} fontSize="sm">
        &copy; {new Date().getFullYear()} Edgardo Yoliani. All Rights Reserved.
      </Box>
    </Container>
  )
}

export default Footer
