import React, { useContext } from 'react';
import { Context } from "../context/context";
import { Grid, GridItem, Button, Checkbox, Text } from '@chakra-ui/react'

export default function CandidateForm() {

    const { state, dispatch } = useContext(Context);

    return (
            <form action="/api/candidateForm" method="post" spellcheck="false" >
                <Text fontSize='3xl' color='teal.600'>Candidate Application</Text>
                <Grid h="550px" border='1px' borderColor='purple.100' borderRadius='15px' color='teal.700'>
                <GridItem rowSpan={2} colSpan={4} bg='purple.50' borderRadius='15px 15px 0 0'>
                <label htmlFor="first " >First Name: </label>
                <input type="text" id="nametext" name="first" required pattern="[a-zA-Z]{3,20}" />
                </GridItem>
                <GridItem rowSpan={2} colSpan={4} bg='purple.50'>
                <label htmlFor="last ">Last Name: </label>
                <input type="text" id="nametext" name="last" required pattern="[a-zA-Z]{3,35}" />
                </GridItem>
                <GridItem rowSpan={2} colSpan={4} bg='purple.50'>
                <label htmlFor="last ">Email Address: </label>
                <input type="email" id="nametext" name="email" required pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$" />
                </GridItem>
                <GridItem rowSpan={2} colSpan={4} bg='purple.50'>
                    <label htmlFor="last ">Link to your twitter: </label>
                    <input type="text" id="socialtext" name="twitter" />
                </GridItem>
                <GridItem rowSpan={2} colSpan={4} bg='purple.50'>
                    <label htmlFor="last ">Link to your facebook: </label>
                    <input type="text" id="socialtext" name="facebook" />
                </GridItem>
                <GridItem rowSpan={2} colSpan={4} bg='purple.50'>
                    <label htmlFor="last ">Other social medias: </label>
                    <input type="text" id="socialtext" name="socialother" />
                </GridItem>
                <GridItem rowSpan={2} colSpan={4} bg='purple.50'>
                <label htmlFor="last ">Reasons for applying: </label>
                <input type="text" id="reasonstext" name="reason" required />
                </GridItem>

                <GridItem rowSpan={2} colSpan={4} bg='purple.50'>
                    <Checkbox size='lg' colorScheme='purple' defaultChecked>
                        By checking this box, you are agreeing to be contacted by the Fourth Wave Team.
                    </Checkbox>
                </GridItem>
                {/* <GridItem rowSpan={2} colSpan={4} bg='purple.50' >
                    <label htmlFor="wallet" pointeEvents="none">User Wallet: </label>
                    <input type="text" id="wallet" name="wallet" value={state.user}/>
                </GridItem> */}
                <GridItem rowSpan={4} colSpan={4} p="2"bg='purple.50' borderRadius='0 0 15px 15px'>
                <Button type="submit">Submit</Button>
                </GridItem>

                </Grid>
            </form>
    )
}