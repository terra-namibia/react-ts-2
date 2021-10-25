import { Wrap, WrapItem } from "@chakra-ui/layout";
import { memo, VFC } from "react";
import { UserCard } from "../organisms/user/UserCard";

export const UserManagement: VFC = memo(() => {
  return (
    <Wrap p={{ base: 4, md: 10 }}>
      {[...Array(10)].map(() => (
        <WrapItem>
          <UserCard
            imageUrl="https://images.metmuseum.org/CRDImages/ep/original/LC-EP_1993_132_suppl_CH-003.jpg"
            userName="Mike"
            fullName="Mike News"
          />
        </WrapItem>
      ))}
    </Wrap>
  );
});
