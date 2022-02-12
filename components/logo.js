import Link from 'next/link'

import Image from 'next/image'

import { Text, useColorModeValue } from '@chakra-ui/react'

import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 20px;
  
 &:hover img {
   transform; rotate(20deg);
 }
`

const Logo = () => {
  const footPrintImg = `/assets/icon/${useColorModeValue('white', 'dark')}.svg`
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={footPrintImg} alt="footprint" width={20} height={20} />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily="M PLUS Rounded 1c"
            ml={3}
          >
            Edgardo Yoliani
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
