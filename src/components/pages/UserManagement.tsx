import { useDisclosure } from "@chakra-ui/hooks";
import { Center, Wrap, WrapItem } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import { memo, useCallback, useEffect, VFC } from "react";
import { useAllUsers } from "../../hooks/useAllUsers";
import { useSelectUser } from "../../hooks/useSelectUser";
import { useLoginUser } from "../../providers/LoginUserProvider";
import { UserCard } from "../organisms/user/UserCard";
import { UserDetailModal } from "../organisms/user/UserDetailModal";

export const UserManagement: VFC = memo(() => {
  const { getUsers, loading, users } = useAllUsers();
  useEffect(() => getUsers(), [getUsers]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { onSelectUser, selectedUser } = useSelectUser();
  const onClickUser = useCallback((id: number) => {
    onSelectUser({id, users, onOpen});
  }, [users, onSelectUser, onOpen]);

  const { loginUser } = useLoginUser();
  console.log(loginUser);

  return (
    <>
      {loading ? (
        <Center h="100vh"><Spinner color="teal.200" /></Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} >
              <UserCard
                id={user.id} userName={user.username} fullName={user.name}
                imageUrl="https://images.metmuseum.org/CRDImages/ep/original/LC-EP_1993_132_suppl_CH-003.jpg"
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal isOpen={isOpen} onClose={onClose} user={selectedUser} isAdmin={loginUser?.isAdmin} />
    </>
  );
});
