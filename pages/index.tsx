import { gql } from "@apollo/client";
import { Box, Flex, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import client from "../apollo-client";
import { LAUNCHES_QUERY } from "../queries";
import { HomeProps } from "./types";

const Home: NextPage<HomeProps> = ({ launches }) => {
  console.log(launches);

  return (
    <Flex paddingTop="5vh" flexWrap="wrap">
      {launches.map((mission) => (
        <Flex
          key={mission.id}
          border="1px solid gray"
          flexDirection="column"
          width="100%"
        >
          <Box bg="gray" height="15vh" w="100%"></Box>
          <Box height="20vh" marginTop="0" padding={5}>
            <Text fontSize="md" fontWeight="bold" textOverflow="ellipsis">
              {mission.mission_name}
            </Text>
            <Text fontSize="sm">
              Details about the mission sdo ksodk sodk odk s
            </Text>
          </Box>
        </Flex>
      ))}
    </Flex>
  );
};

export default Home;

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      ${LAUNCHES_QUERY}
    `,
  });

  return {
    props: {
      launches: data.launchesPast,
    },
  };
}
