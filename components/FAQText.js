import styles from '../styles/Home.module.css'
import { Box } from '@chakra-ui/react';

export default function WhitePaperText() {

    return (
        <Box color='teal.700' pt="10px">
            <p className={styles.whitepapertitle}>
                What is Fourth Wave DAO?
            </p>
            <p className={styles.whitepapertext}>
                Fourth Wave is a decentralized finance protocol that helps women in need connect with people who can help them, while offering a ROI for investors in the project.
            </p>
            <p className={styles.whitepapertitle}>
            Who is Fourth Wave DAO for?
            </p>
            <p className={styles.whitepapertext}>
            Fourth Wave DAO is for anyone who wants to help women, either financialy or through our support network.
            </p>
            <p className={styles.whitepapertitle}>
            Why is the Fourth Wave Governance model an innovation?
            </p>
            <p className={styles.whitepapertext}>
            Current governance models are cumbersome and outdated. We offer a new modularized solution that we hope will spark a governance revolution.
            </p>
            <p className={styles.whitepapertitle}>
            Who is the team behind Fourth Wave?
            </p>
            <p className={styles.whitepapertext}>
            Our team is made up of feminists and political activists who view the blockchain ecosystem as a tool for political and social change.
            </p>
            <p className={styles.whitepapertitle}>
            How can I help?
            </p>
            <p className={styles.whitepapertext}>
            Support the project by joining our community, applying to be an Auntie or a Candidate, playing the lottery game, or donating.
            </p>
        </Box>
    )
}