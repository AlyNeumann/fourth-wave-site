import { Box, Badge, VStack } from '@chakra-ui/react'
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default function LotteryBoxes(props) {

    let Element   = Scroll.Element;
    return (
        <Box maxW='lg' borderWidth='1px' borderRadius='lg' overflow='hidden' color='black' h='200'>
            <Box p='6' >
                <Box alignItems='center'>
                    <Badge borderRadius='full' px='2' colorScheme='teal' marginBottom="20px" whiteSpace='normal'>
                        {props.title}
                    </Badge>
                    
                    <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                        ml='2'
                        marginBottom="20px"
                    >
                        {props.text}
                    </Box>
                </Box>

                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}
                >
                </Box>
                <Element name="test7" className="element" id="containerElement" style={{
          position: 'relative',
          height: '200px',
          overflow: 'scroll',
          marginBottom: '100px'
        }}>
                <Box >
                <Element name="test7" className="element" id="containerElement" style={{
            position: 'relative',
            height: '100px',
            overflow: 'scroll',
            marginBottom: '10px'
          }}>

                    <VStack>

                        {props.data.map((data, i) => {
                            return (<Box as='span' ml='2' color='gray.600' fontSize='sm' key={i}>
                                {data}
                            </Box>)

                        })}
            
                    </VStack>
                    </Element>
                </Box>
                </Element>
            </Box>
        </Box>
    )
}