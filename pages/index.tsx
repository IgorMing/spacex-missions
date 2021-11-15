import { gql } from "@apollo/client";
import { Flex, Text } from "@chakra-ui/react";
import type { GetStaticProps, NextPage } from "next";
import client from "../apollo-client";
import Card from "../components/Card";
import { LAUNCHES_QUERY } from "../queries";
import { HomeProps } from "./types";

const Home: NextPage<HomeProps> = ({ launches }) => {
  return (
    <>
      <Flex
        backgroundColor="lightgray"
        justifyContent="center"
        paddingTop="5vh"
      >
        <Text fontSize="2xl" fontWeight="bold" color="black" paddingBottom={10}>
          Space X Launches
        </Text>
      </Flex>
      <Flex
        width="100%"
        backgroundColor="lightgray"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
      >
        {launches.map((mission) => (
          <Card
            id={mission.id}
            key={mission.id}
            launchSite={mission.launch_site.site_name_long}
            title={mission.mission_name}
            ships={mission.ships}
            subtitle={mission.rocket.rocket_name}
            article={mission.links.article_link}
            video={mission.links.video_link}
          />
        ))}
      </Flex>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await client.query({
    query: gql`
      ${LAUNCHES_QUERY}
    `,
  });

  console.log(context);

  return {
    props: {
      launches: data.launchesPast,
    },
  };
};
