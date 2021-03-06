import { gql } from "@apollo/client";
import { SearchIcon } from "@chakra-ui/icons";
import { Button, Flex, Heading, Input } from "@chakra-ui/react";
import type { GetStaticProps, NextPage } from "next";
import { useState } from "react";
import client from "../apollo-client";
import Card from "../components/Card";
import Empty from "../components/Empty";
import { HomeProps } from "../components/types";
import { getQuery } from "../queries";
import Head from "next/head";

const Home: NextPage<HomeProps> = ({ launches }) => {
  const [data, setData] = useState(launches);
  const [filter, setFilter] = useState("");

  async function searchData() {
    const response = await client.query({
      query: gql`
        ${getQuery(filter)}
      `,
    });

    setData(response.data.launchesPast);
  }

  function renderData() {
    if (!data.length) {
      return <Empty />;
    }

    return data.map((mission) => (
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
    ));
  }

  return (
    <>
      <Head>
        <title>SpaceX Missions</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Flex
        backgroundColor="gray.500"
        alignItems="center"
        paddingTop="5vh"
        paddingBottom="5vh"
        flexDirection="column"
      >
        <Heading size="xl" paddingBottom={2} color="blue.100">
          Space X Launches
        </Heading>

        <Flex width="80%">
          <Input
            placeholder="Search by mission name"
            colorScheme="blue"
            color="blue.100"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            borderTopRightRadius={0}
            borderBottomRightRadius={0}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                searchData();
              }
            }}
          />
          <Button
            borderTopLeftRadius={0}
            borderBottomLeftRadius={0}
            rightIcon={<SearchIcon />}
            onClick={searchData}
          >
            Search
          </Button>
        </Flex>
      </Flex>
      <Flex
        width="100%"
        backgroundColor="gray.500"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        paddingBottom="40vh"
      >
        {renderData()}
      </Flex>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      ${getQuery()}
    `,
  });

  return {
    props: {
      launches: data.launchesPast,
    },
  };
};
