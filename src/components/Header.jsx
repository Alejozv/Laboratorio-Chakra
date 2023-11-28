import { Button, Heading, Image, Stack } from "@chakra-ui/react";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <Stack margin={"80px"} gap={"40px"}>
      <picture className={styles.banner}>
        <Image objectFit={"cover"} boxSize={"100%"} src="/dragon-ball.png" />
        <div className={styles.detalles}>
          <Heading as="h1" fontSize={"50px"} color={"#5E4890"}>
            El Regreso de Cooler
          </Heading>
          <Stack justifyContent={"space-between"} direction={"row"}>
            <Button
              size={"lg"}
              height={"48px"}
              width={"200px"}
              background={"none"}
              borderColor={"white"}
              color={"white"}
            >
              VER DETALLES
            </Button>
            <Button
              size={"lg"}
              height={"48px"}
              width={"200px"}
              background={"none"}
              borderColor={"white"}
              color={"white"}
            >
              VER VIDEO
            </Button>
          </Stack>
        </div>
      </picture>

      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        boxSize={"300px"}
        position={"relative"}
      >
        <Image
          boxSize={"100%"}
          objectFit={"cover"}
          src="/dragon-ball.png"
          objectPosition={"left"}
        />
        <Stack position={"absolute"} alignItems={"center"}>
          <Heading
            as="h1"
            fontSize={"35px"}
            textAlign={"center"}
            color={"#5E4890"}
          >
            El Regreso de Cooler
          </Heading>
          <Stack>
            <Button
              size={"lg"}
              height={"48px"}
              width={"200px"}
              background={"none"}
              borderColor={"white"}
              color={"white"}
            >
              VER DETALLES
            </Button>
            <Button
              size={"lg"}
              height={"48px"}
              width={"200px"}
              background={"none"}
              borderColor={"white"}
              color={"white"}
            >
              VER VIDEO
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
