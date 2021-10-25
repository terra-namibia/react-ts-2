import { Input } from "@chakra-ui/input";
import { Box, Divider, Flex, Heading, Stack } from "@chakra-ui/layout";
import { ChangeEvent, memo, useState, VFC } from "react";
import { useAuth } from "../../hooks/useAuth";
import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const Login: VFC = memo(() => {
  const [userId, setUserId] = useState('');
  const {login, loading} = useAuth();
  const onClickLogin = () => login(userId)
  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value);

  return (
    <Flex alignItems="center" justifyContent="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">ユーザ管理アプリ</Heading>
        <Divider my={4} />
        <Stack spacing={10} py={4} px={10}>
          <Input placeholder="ユーザID" value={userId} onChange={onChangeUserId} />
          <PrimaryButton onClick={onClickLogin} >ログイン</PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
