import { Link, Tooltip, Flex, Box, Spacer, Button, ButtonGroup } from '@chakra-ui/react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Nav() {

  return (
    <Flex minWidth='max-content' alignItems='center' gap='2'>
      <Box p='2' mt='2'>
        <Tooltip label="Home" aria-label='A tooltip' w='100%' alignItems='left' >
          <Link href="/">
            <Image src="/images/FourthWaveNavLogo_Transparent.png" alt="Fourth Wave Logo" width="100%" height='50%'/>
          </Link>
        </Tooltip>
      </Box>
      <Spacer />
      <ButtonGroup gap='2'>
      <Link href="/about">
        <Button colorScheme='teal'>About</Button>
        </Link>
        {/* <Link href="/lottery">
        <Button colorScheme='teal'>Lottery</Button>
        </Link> */}
      </ButtonGroup>
    </Flex>
  )
}

