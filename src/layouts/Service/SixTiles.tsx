import { Flex, Box, SimpleGrid, useColorMode } from "@chakra-ui/react";
import { ExpandColorIcon } from "../../components/Motion/Cards/ExpandColorIcon";
import { theme } from "../../theme/colors";
import { DashedLine } from "../../components/svg/DashedLine";
import { IconType } from "react-icons";

type ServiceData = {
  title: string;
  icon: IconType;
  text: string | JSX.Element;
  link: string;
};

type Props = {
  data: ServiceData[];
};

export const SixTiles = ({ data, ...props }: Props): JSX.Element => {
  const styling = [
    {
      borderTop: { sm: "none" },
      borderLeft: { sm: "none" },
    },
    {
      borderTop: { sm: "none" },
      borderRight: { sm: "none", lg: `solid thin ${theme.toHex("gray.100")}` },
    },
    {
      borderTop: { lg: "none" },
      borderRight: { lg: "none" },
      borderLeft: { sm: "none", lg: `solid thin ${theme.toHex("gray.100")}` },
    },
    {
      borderBottom: { lg: "none" },
      borderLeft: { lg: "none" },
      borderRight: { sm: "none", lg: `solid thin ${theme.toHex("gray.100")}` },
    },
    {
      borderBottom: { sm: "none" },
      borderLeft: { sm: "none", lg: `solid thin ${theme.toHex("gray.100")}` },
    },
    {
      borderBottom: { sm: "none" },
      borderRight: { sm: "none" },
    },
  ];

  const { colorMode } = useColorMode();

  return (
    <Box
      bg={theme.bg[colorMode]}
      color={theme.fg[colorMode]}
      align="center"
      position="relative"
      {...props}
    >
      <Flex direction="row" wrap="wrap" align="center" justify="center">
        <SimpleGrid columns={[1, 2, 2, 3]}>
          {data.map((service, i) => {
            return (
              <ExpandColorIcon
                border={{ sm: `solid thin ${theme.toHex("gray.100")}` }}
                key={i}
                {...service}
                {...styling[i]}
                maxWidth="28rem"
                color={theme.fg[colorMode]}
              />
            );
          })}
        </SimpleGrid>
      </Flex>
      <DashedLine />
      <DashedLine />
      <DashedLine />
    </Box>
  );
};
