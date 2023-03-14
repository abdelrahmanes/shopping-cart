import { Group, Image, Text, Button } from "@mantine/core";
import useItemQuantity from "../hooks/useItemQuantity";
import {
  decreaseItems,
  increaseItems,
  resetItemQuantity,
} from "../Redux/features/shoppingCart/shoppingCartSlice";
import { useDispatch } from "react-redux";

type cartItemProps = {
  item: {
    image: string;
    title: string;
    id: number;
    price: number;
    description: string;
    category: string;
    rating: {
      rate: number;
      count: number;
    };
  };
};

export function CartItem({ item }: cartItemProps) {
  const { id, image, title, price } = item;
  const quantity = useItemQuantity(id);
  const dispatch = useDispatch();

  return (
    <div key={id} className="flex">
      <div className="flex justify-start items-start gap-2">
        <Image
          src={image}
          height={100}
          width={100}
          alt={title}
          fit="contain"
          className="z-0"
        />
        <Group position="apart" className="h-full">
          <Group className="gap-0">
            <Text w={250} fz="sm" truncate>
              {title}
            </Text>
            <Text color="dimmed" fz={"xs"}>
              x{quantity}
            </Text>
          </Group>
          <Text fz="sm" mt="xs" className="self-baseline">
            <span className="text-xs"> price:</span> ${price.toFixed(3)}
          </Text>
        </Group>
        <Group position="apart">
          <Text className="  text-center flex items-center gap-1">
            <span className="text-xs"> total:</span> $
            {(price * quantity).toFixed(3)}
          </Text>
          <div className="flex justify-start items-start gap-1 w-full">
            <Button
              className="bg-red-400 transition duration-200 "
              color={"red"}
              radius="md"
              onClick={() => {
                dispatch(decreaseItems(id));
              }}
            >
              -
            </Button>
            <Button
              className="bg-blue-400 transition duration-200 "
              color={"blue"}
              radius="md"
              onClick={() => {
                dispatch(increaseItems(id));
              }}
            >
              +
            </Button>
          </div>
          <Button
            color={"red"}
            className="bg-transparent border border-gray-200    text-red-500 hover:text-white transition duration-200"
            onClick={() => {
              dispatch(resetItemQuantity(id));
            }}
          >
            &times;
          </Button>
        </Group>
      </div>
    </div>
  );
}
