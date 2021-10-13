import { MotionBox, MotionButton, MotionFlex } from "../../components/Motion";
import { Box, useColorMode, Flex, Text, Heading, Icon } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { DashedLine, Line } from "../../components/svg/DashedLine";
import { Dot } from "../../components/svg/Dot";
import NextImage from "next/image";
import { theme } from "../../theme";
import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaCode,
  FaInstagram,
} from "react-icons/fa";
type ResumeItem = {
  name: string;
  title: string;
  location: string;
  description: string;
  image: string;
};

const data = [
  {
    name: "UCLA",
    startDate: "2014",
    endDate: "2017",
    image: "/images/ucla.png",
  },
  {
    name: "Mint Mobile",
    startDate: "2017",
    endDate: "2019",
    image: "/images/MintMobileLogo.png",
  },
  {
    name: "Silverwind Solutions",
    startDate: "2019",
    endDate: "2020",
  },
  {
    name: "West End Designs",
    startDate: "2021",
    endDate: "current",
  },
];
const switchVariant = {
  rest: { x: 0, y: 0 },
  hover: (direction) => {
    const variant = {
      left: {
        x: "-100%",
      },
      right: {
        x: "100%",
      },
      bottom: {
        y: "-100%",
      },
      top: {
        y: "100%",
      },
    };

    return {
      ...variant[direction],
      transition: {
        type: "linear",
      },
    };
  },
};

const colorVariant = {
  rest: {
    y: 0,
    // backgroundColor: "rgba(0.9,0.9,0.9,0.9)",
    backgroundColor: "rgba(0,0,0,0)",
  },
  hover: {
    // y: 100,
    backgroundColor: "rgba(0.2,0.2,0.2,0.4)",
    transition: {
      type: "linear",
    },
  },
};

const flipVariant = {
  rest: {
    y: 0,
  },
  hover: (percent) => ({
    y: percent,
    color: "#FFFFFF",
    transition: { type: "linear" },
  }),
};

const showVariant = {
  rest: {
    y: -200,
    opacity: 0,
  },
  hover: (bgColor) => ({
    y: 0,
    opacity: 1,
    backgroundColor: bgColor,
    transition: { type: "linear" },
  }),
};

export const ResumeMap = ({ ...props }) => {
  const { colorMode } = useColorMode();
  const [isFocused, setFocus] = useState(false);

  return (
    <>
      <Flex direction="column" alignItems="center" justify="center">
        <AnimatePresence>
          <MotionBox
            position="relative"
            initial="rest"
            animate={isFocused ? "hover" : "rest"}
            onFocus={() => setFocus(true)}
            onMouseEnter={() => setFocus(true)}
            onMouseLeave={() => setFocus(false)}
            onBlur={() => setFocus(false)}
          >
            <MotionBox
              variants={showVariant}
              width="100%"
              height="50%"
              position="absolute"
              bottom="5%"
              boxShadow="lg"
              custom={theme.bg2[colorMode]}
            >
              <Flex h="100%" justify="space-evenly" align="flex-end" pb="8">
                <Icon as={FaGithub} />
                <Icon as={FaLinkedin} />
                <Icon as={FaInstagram} />
                <Icon as={FaCode} />
              </Flex>
            </MotionBox>

            <Box position="relative">
              <NextImage
                src="/images/chrisCropped.png"
                height="400"
                width="300"
              />
              <MotionBox
                position="absolute"
                variants={colorVariant}
                custom="bottom"
                top="0"
                h="100%"
                w="100%"
                sx={
                  {
                    // "mix-blend-mode": "color",
                  }
                }
              />
            </Box>
            <MotionBox
              position="relative"
              variants={flipVariant}
              custom="-120%"
            >
              <Line />
            </MotionBox>
            <MotionBox
              position="relative"
              variants={flipVariant}
              custom="-200%"
              className="Text"
            >
              <Heading mb="2"> Chris Capistran</Heading>
              <Text>Founder / Lead Developer</Text>
            </MotionBox>
          </MotionBox>
        </AnimatePresence>
      </Flex>
    </>
  );
};
