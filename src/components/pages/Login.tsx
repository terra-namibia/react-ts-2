import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Box, Divider, Flex, Heading, Stack } from "@chakra-ui/layout";
import { memo, VFC } from "react";

export const Login: VFC = memo(() => {
  return (
    <Flex alignItems="center" justifyContent="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">ユーザ管理アプリ</Heading>
        <Divider my={4} />
        <Stack spacing={10} py={4} px={10}>
          <Input placeholder="ユーザID" />
          <Button bg="teal.400" color="white" _hover={{ opacity: 0.8 }}>ログイン</Button>
        </Stack>
      </Box>
    </Flex>
  );
});
