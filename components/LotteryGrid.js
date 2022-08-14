import React, { useContext} from "react";
import { Grid, GridItem } from '@chakra-ui/react'
import { Context } from "../context/context";
import LotteryBoxes from './LotteryBoxes'

export default function LotteryGrid(props) {

    const { state, dispatch } = useContext(Context);
    let currentPot = (state.pot.toString()) / 1000000000000000000;
    let currentLotteryPot = currentPot / 2;

    return (
        <Grid templateColumns='repeat(5, 1fr)' gap={4} pt="30px">
            <GridItem colSpan={2} h='250' bg='purple.100' w={[150, 300, 500]} >
                <LotteryBoxes title="Lottery Pot" text="The current lottery pot total: " data={[currentLotteryPot]} />
            </GridItem>
            <GridItem colStart={4} colEnd={6} h='250' bg='purple.100' w={[150, 300, 500]}>
                <LotteryBoxes title="Treasury Pot" text="The current treasury total: " data={[currentPot]} />
            </GridItem>
            <GridItem colSpan={2} h='250' bg='purple.100' w={[150, 300, 500]}>
                <LotteryBoxes title="Current Players" text="List of current lottery players: " data={state.players} />
            </GridItem>
            <GridItem colStart={4} colEnd={6} h='250' w={[150, 300, 500]} bg='purple.100'>
                <LotteryBoxes title="Past Winners" text="List of the previous lottery winners: " data={state.winners} />
            </GridItem>
        </Grid>
    )
}