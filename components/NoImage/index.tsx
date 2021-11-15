import { Image } from "@chakra-ui/react";
import React from "react";

interface NoImageProps {
  isMobile: boolean;
}

const NoImage: React.VFC<NoImageProps> = ({ isMobile }) => {
  return (
    <Image
      borderTopLeftRadius={isMobile ? 0 : 10}
      borderTopRightRadius={isMobile ? 0 : 10}
      src="https://via.placeholder.com/350X300"
      alt="No image found"
      objectFit="cover"
    />
  );
};

export default NoImage;
