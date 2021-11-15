import { Box, Flex, Image, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Ship } from "../../pages/types";
import Button from "../Button";

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
      width={isMobile ? "100%" : "300px"}
      background="#eeeeee"
      marginLeft={isMobile ? 0 : 5}
    >
      {!props.ships?.length ? (
        <Image
          src="https://via.placeholder.com/350X250"
          alt="No image found"
          objectFit="cover"
        />
      ) : (
        <Carousel
          showArrows
          showThumbs={false}
          onChange={(i) => console.log(i)}
        >
          {props.ships.map((ship) => (
            <div key={ship.id}>
              <Image
                key={ship.id}
                src={ship.image}
                alt={ship.name}
                boxSize={isMobile ? "40vh" : "30vh"}
                objectFit="cover"
              />
              <Text
                position="absolute"
                left={0}
                top={0}
                color="black"
                backgroundColor="lightgray"
                padding={1}
                borderRadius={5}
              >
                {ship.name}
              </Text>
            </div>
          ))}
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
            <Text>{props.launchSite}</Text>
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
