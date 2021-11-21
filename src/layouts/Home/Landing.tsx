import {
  Flex,
  Heading,
  Spacer,
  Link,
  Box,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import NextLink from "next/link";

import { AnimatePresence } from "framer-motion";
import { MotionFlex, MotionText, MotionButton } from "../../components/Motion";
import { slideFrom } from "../../components/Motion/variants";
import { DashedLine } from "../../components/svg/DashedLine";
import { useHasRendered } from "../../lib/hooks";

const AnimatedBanner = ({ text, ...props }) => {
  const texts = ["CONNECT", "INSPIRE", "CREATE"];

  const [bannerText, setBannerText] = useState(texts[0]);
  const [count, setCount] = useState(0);
  const [inTransition, setTransition] = useState(false);

  return (
    <Heading variant="banner-with-border" as="h5">
      {bannerText}
    </Heading>
  );
};

const containerVariants = {
  hidden: {
    y: "100vh",
    opacity: 0,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      stiffness: 500,

      when: "beforeChildren",
    },
  },
};

const growVariants = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const Landing = ({ ...props }) => {
  return (
    <Box position="relative" align="center" className="header-sentinel">
      <AnimatePresence>
        <MotionFlex
          variants={containerVariants}
          initial="hidden"
          animate="show"
          mt="8"
          mb="8"
          h="100vh"
          w="100vw"
          flexDir="column"
          align="center"
          justify="center"
          color="white"
          zIndex="2"
          position="relative"
          {...props}
        >
          <Heading
            fontFamily="Raleway"
            fontWeight="900"
            as="h3"
            fontSize="3xl"
            py="10"
          >
            We help businesses
          </Heading>

          <MotionFlex variants={growVariants}>
            <AnimatedBanner text="CONNECT" />
          </MotionFlex>
          <MotionText
            textStyle="h2"
            fontSize="3xl"
            py="5"
            variants={slideFrom("bottom")}
          >
            with clients
          </MotionText>
          <Flex flexDirection={["column", "column", "row", "row"]} my="2">
            <MotionButton
              variants={slideFrom("left", { duration: 0.2 })}
              width="9em"
              variant="solid"
              bg="white"
              color="black"
            >
              <NextLink href="#intro" passHref>
                <Link>LEARN MORE</Link>
              </NextLink>
            </MotionButton>
            <Spacer mx="4" my="2" />
            <MotionButton
              variants={slideFrom("right", { duration: 0.2 })}
              width="9em"
              variant="solid"
              bg="black"
              color="white"
            >
              <NextLink href="/contact" passHref>
                <Link>CONNECT NOW</Link>
              </NextLink>
            </MotionButton>
          </Flex>
        </MotionFlex>
      </AnimatePresence>
    </Box>
  );
};
