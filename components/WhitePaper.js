import { Box } from '@chakra-ui/react'

export default function WhitePaper() {

    return (
      <Box color='teal.700' pt="30px">
         <h1 className={styles.title}>
          Fourth Wave DAO - The White Paper
        </h1>
      <p className={styles.whitepapertitle}>
          Introduction
      </p>
      <p className={styles.whitepapertext}>
      Fourth Wave DAO is a DeFi fundraising protocol aiming to grow a treasury of assets that can be used to support women desperately in need of access to safe abortion procedures. The Fourth Wave protocol will develop a much needed decentralized network of people who can help women across North America, teach women how to stay safe and anonymous online (while providing tools to do so), all while being catered towards investors who want to see their investment performing societal good in addition to receiving a steady Return On Investment.
      </p>
      <p className={styles.whitepapertitle}>
      The DAO will consist of three types of members:
      </p>
      <p className={styles.whitepapertext}>
      1. Aunties are a type of Fourth Wave member who has been chosen by the vetting team which is comprised of political and social activists. Aunties will hold an NFT that denotes their role, and they can request funding on a case by case basis when they are connected with a woman who needs their help. The Aunties will be anonymous, only the vetting team will know their identity. In this way, we can keep our participants safe. We will only store the approximate location of each Auntie in the network, which is needed in order to connect the woman in need with the Auntie closest to them.
      </p>
      <p className={styles.whitepapertext}>
      2. Candidates are members of Fourth Wave who wish to take the lead on making decisions for highly ranked proposals. Candidates will be chosen by our vetting team, and will be voted into temporary positions of power during each voting session. A Candidate holds an NFT to denote their role, but can be voted out of their Candidate position at any time by the regular members of the DAO.
      </p>
      <p className={styles.whitepapertext}>
      3. Regular Fourth Wave members can vote on lower ranked proposals and vote for the Candidates they want to represent their interests for higher ranked proposals.
      </p>
      <p className={styles.whitepapertext}>
      By assigning these roles to members of the DAO who wish to take them on, and modularizing voting sessions, the most qualified and passionate members of our organization will be steering it forward with the best interests of all of our members in mind.
      </p>
      <p className={styles.whitepapertitle}>
      The problem with current governance models:
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