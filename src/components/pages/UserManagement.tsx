import { Image } from "@chakra-ui/image";
import { Box, Stack, Text, Wrap, WrapItem } from "@chakra-ui/layout";
import { memo, VFC } from "react";

export const UserManagement: VFC = memo(() => {
  return (
    <Wrap p={{ base: 4, md: 10 }}>
      {[...Array(10)].map(() => (
        <WrapItem>
          <Box
            w="260px"
            h="260px"
            bg="white"
            borderRadius="10px"
            shadow="md"
            p={4}
            _hover={{ cursor: "pointer", opacity: 0.8 }}
          >
            <Stack textAlign="center">
              <Image
                borderRadius="full"
                boxSize="160px"
                src="https://source.unsplash.com/random"
                alt="プロフィール画像"
                m="auto"
              />
              <Text fontSize="lg" fontWeight="bold">apple</Text>
              <Text fontSize="sm" color="gray">apple</Text>
            </Stack>
          </Box>
        </WrapItem>
      ))}
    </Wrap>
  );
});
