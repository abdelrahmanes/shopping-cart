import { useDisclosure } from "@mantine/hooks";
import { Drawer, Group, Badge, Stack } from "@mantine/core";
import { ShoppingCart } from "tabler-icons-react";
import data from "../Data/Data.json";
import { useSelector } from "react-redux/es/exports";
import { RootState } from "../Redux/store";
import { CartItem } from "./CartItem";

export function Cart() {
  const [opened, { open, close }] = useDisclosure(false);
  const cartItemsIds = useSelector((state: RootState) =>
    state.cartReducer.cartItems
      .filter((x) => x.quantity !== 0)
      .map((item) => item.id)
  ); //array of items id

  const currentItems = data.filter((currentItem) => {
    return cartItemsIds.includes(currentItem.id);
  });

  const totalItems = useSelector((state: RootState) => {
    if (state.cartReducer.cartItems.length > 0) {
      return state.cartReducer.cartItems
        .map((carItem) => carItem.quantity)
        .reduce((total, curr) => total + curr);
    } else {
      return;
    }
  });

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title={"Cart"}
        closeOnClickOutside={true}
        position={"right"}
      >
        {currentItems.length > 0 ? (
          <Stack>
            {currentItems.map((item) => {
              return <CartItem key={item.id} item={item} />;
            })}
          </Stack>
        ) : (
          <p
            className="flex justify-center items-center flex-col gap-2"
            style={{ height: "calc(100vh - 70px)" }}
          >
            <ShoppingCart
              width={60}
              height={60}
              onClick={close}
              className="cursor-pointer text-blue-500"
            />
            <span onClick={close} className="cursor-pointer">
              start shopping now
            </span>
          </p>
        )}
      </Drawer>
      <Group
        onClick={open}
        className=" text-gray-800 rounded-full border border-gray-500 p-2 hover:bg-blue-400 hover:text-white hover:border-blue-400 transition duration-200 cursor-pointer relative"
      >
        <ShoppingCart strokeWidth={1.2} />
        {totalItems! > 0 && (
          <Badge
            size={"md"}
            variant="filled"
            className="absolute px-2 py-3 bottom-0 right-0 translate-x-1/4 translate-y-1/4"
          >
            {totalItems}
          </Badge>
        )}
      </Group>
    </>
  );
}
