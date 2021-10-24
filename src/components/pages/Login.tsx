import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Box, Divider, Flex, Heading } from "@chakra-ui/layout";
import { memo, VFC } from "react";

export const Login: VFC = memo(() => {
  return (
    <Flex>
      <Box>
        <Heading as="h1">ユーザ管理アプリ</Heading>
        <Divider />
        <Input placeholder="ユーザID" />
        <Button>ログイン</Button>
      </Box>
    </Flex>
  );
});
