import {
  Flex,
  Button,
  Heading,
  Spacer,
  BoxProps,
  Box,
  Image,
  Text,
  Stack,
  Slide,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { useOnScreen } from "../../lib/hooks";

import { ClientCard } from "../../components/Cards/ClientCard";

const companies = [
  {
    name: "G&J Flower Distributors",
    location: "Los Angeles, CA",
    imageSource: `url('/images/catalinaLight.jpg')`,
    description: `G&J Flower Distributors is the largest privately held construction
  supply company in Seattle, WA for over 35 years`,
  },
  {
    name: "New Veganings",
    location: "Los Angeles, CA",
    imageSource: `url('/images/catalinaLight.jpg')`,
    description: `New Vegnaings is the largest privately held construction
  supply company in Seattle, WA for over 35 years`,
  },
  {
    name: "Jupiter Yoga",
    location: "Aliso Viejo, CA",
    imageSource: `url('/images/catalinaLight.jpg')`,
    description: `Jupiter Yoga is the largest privately held construction
  supply company in Seattle, WA for over 35 years`,
  },
];

const TransitionCard = ({ slideFrom, children }) => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  let direction = slideFrom;

  if (typeof slideFrom === "object") {
    direction = useBreakpointValue(slideFrom);
  }

  return (
    <Flex ref={ref} alignSelf="stretch" justifySelf="stretch">
      <Slide
        direction={direction}
        style={{
          flex: "1",
          position: "static",
          display: "flex",
          alignSelf: "stretch",
          justifySelf: "stretch",
        }}
        in={isVisible}
      >
        {children}
      </Slide>
    </Flex>
  );
};

const ContactCards = () => {
  const slideFrom2 = {
    base: "right",
    md: "bottom",
  };

  const transitionVariant = useBreakpointValue(slideFrom2);

  return (
    <Flex
      // width="100%"
      // height="100%"
      flexDirection={["column", "column", "row", "row"]}
      justify="center"
      align="center"
      p="8"
      m="8"
    >
      <TransitionCard slideFrom="left">
        <ClientCard {...companies[0]} />
      </TransitionCard>

      <TransitionCard slideFrom={transitionVariant}>
        <ClientCard {...companies[1]} />
      </TransitionCard>

      <TransitionCard slideFrom={{ base: "left", lg: "right" }}>
        <ClientCard {...companies[2]} />
      </TransitionCard>
    </Flex>
  );
};

export const section3 = () => {
  return (
    <Flex
      minHeight="100vh"
      minWidth="100vw"
      h="100%"
      w="100%"
      flexDir="column"
      color="white"
    >
      <Flex
        p="4"
        direction="row"
        justify="flex-start"
        align="flex-start"
        className="stickyHeader"
      >
        <Heading variant="h2" fontWeight="light" color="white">
          Who we work with
        </Heading>
      </Flex>
      <Flex direction="column" justify="center" align="center" width="100%">
        <Heading as="h1" my="1.25em" variant="banner-with-border-md">
          Our Clients
        </Heading>

        {ContactCards()}
      </Flex>
    </Flex>
  );
};
