import { Wrap, WrapItem } from "@chakra-ui/layout";
import { memo, VFC } from "react";

export const UserManagement: VFC = memo(() => {
  return (
    <Wrap p={2} >
      {[...Array(10)].map(() => (
        <WrapItem>
          <div style={{width: '100px', height: '100px', backgroundColor: 'teal'}}>test</div>
        </WrapItem>
      ))}
    </Wrap>
  );
});
