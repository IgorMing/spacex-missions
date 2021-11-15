import { Box, Flex, Image, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Button from "../Button";
import NoImage from "../NoImage";
import { Ship } from "../types";

interface CardProps {
  id: string;
  title: string;
  subtitle?: string;
  ships?: Ship[];
  launchSite?: string;
  article?: string;
  video?: string;
}

const Card: React.FC<CardProps> = (props) => {
  const [isMobile] = useMediaQuery("(max-width: 480px)");

  return (
    <Flex
      border="2px solid gray"
      marginBottom={5}
      flexDirection="column"
      width={isMobile ? "100%" : "400px"}
      background="gray.300"
      borderRadius={isMobile ? 0 : 10}
      marginLeft={2}
      marginRight={2}
    >
      {!props.ships?.length ? (
        <NoImage isMobile={isMobile} />
      ) : (
        <Carousel showArrows showThumbs={false} onChange={() => {}}>
          {props.ships.map((ship) => {
            if (!ship) return <></>;

            return (
              <div key={ship.id}>
                {!ship?.image ? (
                  <NoImage isMobile={isMobile} />
                ) : (
                  <Image
                    key={ship.id}
                    src={ship.image}
                    alt={ship.name}
                    borderTopLeftRadius={isMobile ? 0 : 10}
                    borderTopRightRadius={isMobile ? 0 : 10}
                    boxSize={isMobile ? "40vh" : "30vh"}
                    objectFit="cover"
                  />
                )}

                <Text
                  position="absolute"
                  left={0}
                  top={0}
                  color="black"
                  backgroundColor="gray.200"
                  padding={1.5}
                  borderRadius={5}
                >
                  {ship.name}
                </Text>
              </div>
            );
          })}
        </Carousel>
      )}
      <Box padding={5}>
        <Text fontSize="xl" fontWeight="bold" textOverflow="ellipsis">
          {props.title}
        </Text>
        {props.subtitle && (
          <Text fontSize="sm" color="gray">
            {props.subtitle}
          </Text>
        )}
        {props.launchSite && (
          <Flex
            alignItems="center"
            flex={1}
            flexDirection="column"
            borderRadius={20}
            border="1px solid gray"
            padding={2}
            marginTop={2}
          >
            <Text fontWeight="bold">Launch site</Text>
            <Text textAlign="center">{props.launchSite}</Text>
          </Flex>
        )}
        {(props.article || props.video) && (
          <Flex justifyContent="space-around" padding={4}>
            {props.article && (
              <Button urlToOpen={props.article}>Article</Button>
            )}
            {props.video && <Button urlToOpen={props.video}>Vídeo</Button>}
          </Flex>
        )}
      </Box>
    </Flex>
  );
};

export default Card;
