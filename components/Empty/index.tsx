import { Box, Text } from "@chakra-ui/layout";
import React from "react";

const Empty: React.VFC = () => {
  return (
    <Box height="100vh">
      <Text color="white">Sorry, no missions were found.</Text>
    </Box>
  );
};

export default Empty;
