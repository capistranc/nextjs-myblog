import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  Flex,
  useColorMode,
  Stack,
  Link,
  useMediaQuery,
  useBreakpointValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { bgColor, fgColor } from "../../theme/colors";
import { StickyNavHeader } from "../../components/Header";
import { FooterContent } from "../../components/Footer";

export * from "./section1";
export * from "./section2";
export * from "./section3";
export * from "./section4";
export * from "./section5";
import { ContactForm } from "../../components/Forms/ContactForm";

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.8,
};

export const Parallax5 = ({ sections, bgImages }) => {
  const ParallaxBox = ({ children, ...props }) => {
    function renderChild() {
      if (props.bgImage) {
        //If bgImage, render diagonal lines overlay
        return (
          // <Box
          // backgroundImage="url('/images/diagonalLine.png')"
          // >
          <Flex h="100%" w="100%">
            {children}
          </Flex>
          // </Box>
        );
      } else {
        return <>{children}</>;
      }
    }
    return (
      <Flex
        className="parallaxSection"
        // position="relative"
        // display="flex"
        backgroundAttachment="fixed"
        backgroundPosition="center"
        background-repeat="no-repeat"
        backgroundSize="cover"
        height="100%"
        width="100%"
        align="center"
        justify="center"
        // height="calc(var(--vh, 1vh))"
        // width="calc(var(--vw, 1vw))"
        {...props}
      >
        {renderChild()}
      </Flex>
    );
  };

  let mobileHeight = 0;

  useEffect(() => {
    mobileHeight =
      window.outerHeight > mobileHeight ? window.outerHeight : mobileHeight;
  });

  const { colorMode } = useColorMode();

  return (
    <>
      <StickyNavHeader
        id="sticky-nav-bar"
        position="fixed"
        color={fgColor[colorMode]}
      />
      <Flex
        top="0"
        as="main"
        direction="column"
        align="center"
        height="100%"
        width="100%"
      >
        <ParallaxBox
          bgImage={bgImages[0]}
          minHeight={{
            base: mobileHeight > 0 ? mobileHeight : "100vh",
            md: "100vh",
          }}
          id="section1"
        >
          {sections[0]}
        </ParallaxBox>
        <ParallaxBox position="relative" data-header="What We Do" id="section2">
          {sections[1]}
        </ParallaxBox>
        <ParallaxBox
          bgImage={bgImages[1]}
          data-header="Who we work with"
          id="section3"
        >
          {sections[2]}
        </ParallaxBox>
        <ParallaxBox
          position="relative"
          data-header="How we do it"
          id="section4"
        >
          {sections[3]}
        </ParallaxBox>
        <ParallaxBox bgImage={bgImages[2]} data-header="Pricing " id="section5">
          {sections[4]}
        </ParallaxBox>

        <ParallaxBox bgColor="#1E1E1E">
          <ContactForm />
        </ParallaxBox>
        <FooterContent bgColor="black" width="100%" color="white" />
      </Flex>
    </>
  );
};
