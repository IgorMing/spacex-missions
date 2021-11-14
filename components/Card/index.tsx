import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Ship } from "../../pages/types";

interface CardProps {
  id: string;
  title: string;
  subtitle?: string;
  ships?: Ship[];
}

const PADDING = 5;

const Card: React.FC<CardProps> = (props) => {
  return (
    <Flex
      border="1px solid gray"
      marginBottom="5"
      flexDirection="column"
      width="100vh"
      background="#eeeeee"
    >
      {!props.ships?.length ? (
        <Image
          src="https://via.placeholder.com/350X250"
          alt="No image found"
          objectFit="cover"
          marginBottom={10}
        />
      ) : (
        <Carousel showArrows showThumbs onChange={(i) => console.log(i)}>
          {props.ships.map((ship) => (
            <>
              <Image
                key={ship.id}
                src={ship.image}
                alt={ship.name}
                boxSize="50vh"
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
            </>
          ))}
        </Carousel>
      )}
      <Box paddingLeft={PADDING} paddingRight={PADDING} paddingBottom={PADDING}>
        <Text fontSize="xl" fontWeight="bold" textOverflow="ellipsis">
          {props.title}
        </Text>
        {props.subtitle && (
          <Text fontSize="sm" color="gray">
            {props.subtitle}
          </Text>
        )}
      </Box>
    </Flex>
  );
};

export default Card;
