import * as React from "react";
import {
  Box,
  Spacer,
  Link,
  SimpleGrid,
  SimpleGridProps,
  Stack,
  StackDivider,
  useColorModeValue,
} from "@chakra-ui/react";

import { SocialMediaLinks, FooterHeading } from "./index";
import { Logo } from "../Logo";
import { Text, TextProps } from "@chakra-ui/layout";
import { BlurryBackground } from "../BlurryBackground";

import { links } from "./index";

export const BlurryFooter = ({ ...props }) => {
  const bgImageLight =
    "linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.30)), url('/images/catalinaLight.jpg')";
  const bgImageDark =
    "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.51)) , url('/images/catalinaDark.jpg')";
  const bgImage = useColorModeValue(bgImageLight, bgImageDark);

  //   const bgImage = useColorModeValue(bgImageLight, bgImageDark);

  const color = "white";

  return (
    // <Box position="relative">
    <BlurryBackground bgImage={bgImage} color={color} mx="auto">
      <FooterContent zIndex="1" links={links} />
    </BlurryBackground>
  );
};

export const FooterContent = ({ ...props }) => {
  return (
    <Stack
      align="center"
      spacing="10"
      divider={<StackDivider />}
      py="12"
      px={{ base: "4", md: "8" }}
      {...props}
    >
      <Stack
        d="flex"
        direction={{ base: "column", lg: "row" }}
        spacing={{ base: "10", lg: "28" }}
        justify="center"
      >
        <Box flex="1">
          <Logo />
          <Link href="mailto:capistranc@gmail.com">
            WestEndDesigns@gmail.com
          </Link>
          <Spacer />
          <Link href="tel:714-932-9998">(949) 735 - 5619</Link>
        </Box>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: "10", md: "20" }}
        >
          <LinkGrid spacing={{ base: "10", md: "20", lg: "28" }} flex="1" />
        </Stack>
      </Stack>
      <Stack
        direction={{ base: "column-reverse", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Copyright />
        <SocialMediaLinks color="white" />
      </Stack>
    </Stack>
  );
};

export const Copyright = (props: TextProps) => (
  <Text fontSize="sm" {...props}>
    &copy; {new Date().getFullYear()} West End Designs, Inc. All rights
    reserved.
  </Text>
);

export const LinkGrid = (props: SimpleGridProps) => (
  <SimpleGrid columns={2} {...props}>
    <Box minW="130px">
      <FooterHeading mb="4">Product</FooterHeading>
      <Stack>
        <Link>How it works</Link>
        <Link>Pricing</Link>
        <Link>Use Cases</Link>
      </Stack>
    </Box>
    <Box minW="130px">
      <FooterHeading mb="4">Legal</FooterHeading>
      <Stack>
        <Link>Privacy</Link>
        <Link>Terms</Link>
        <Link>License</Link>
      </Stack>
    </Box>
  </SimpleGrid>
);
