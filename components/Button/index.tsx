import { LinkIcon } from "@chakra-ui/icons";
import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";
import React from "react";

interface CustomButtonProps extends ButtonProps {
  urlToOpen: string;
}

const Button: React.FC<CustomButtonProps> = (props) => {
  const { children, urlToOpen, ...buttonProps } = props;

  return (
    <a href={urlToOpen} target="_blank" rel="noopener noreferrer">
      <ChakraButton
        colorScheme="blue"
        rightIcon={<LinkIcon />}
        {...buttonProps}
      >
        {children}
      </ChakraButton>
    </a>
  );
};

export default Button;
