import { gql } from "@apollo/client";
import { Flex, Text } from "@chakra-ui/react";
import type { GetStaticProps, NextPage } from "next";
import client from "../apollo-client";
import Card from "../components/Card";
import { LAUNCHES_QUERY } from "../queries";
import { HomeProps } from "./types";

const Home: NextPage<HomeProps> = ({ launches }) => {
  return (
    <Flex
      paddingTop="5vh"
      flexWrap="wrap"
      backgroundColor="lightgray"
      justifyContent="center"
    >
      <Text fontSize="2xl" color="black" paddingBottom={10}>
        Space X Launches
      </Text>
      {launches.map((mission) => (
        <Card
          id={mission.id}
          key={mission.id}
          title={mission.mission_name}
          ships={mission.ships}
          subtitle={mission.rocket.rocket_name}
        />
      ))}
    </Flex>
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
