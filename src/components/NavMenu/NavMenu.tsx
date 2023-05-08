import {
  DrawerProps,
  DrawerContentProps,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { Close } from "@icons/Close";
import { NavMenuItem } from "@components/NavMenuItem";

export type NavMenuProps = {
  onClose: () => void;
  isOpen: boolean;
};

export const NavMenu = (props: NavMenuProps) => {
  const { onClose, isOpen, ...rest } = props;
  return (
    <Drawer
      isOpen={isOpen}
      placement={"right"}
      onClose={onClose}
      size={"full"}
      autoFocus={false}
    >
      <DrawerOverlay />
      <DrawerContent backgroundColor={"brand.primary"}>
        <DrawerCloseButton
          marginTop={"2rem"}
          marginRight={"2.5rem"}
          alignSelf={"flex-end"}
          size={"xl"}
          color={"brand.trim"}
        />
        <DrawerBody
          padding={0}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          color={"white"}
        >
          <p>Hello</p>
          <p>Test</p>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
