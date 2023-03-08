import { useDisclosure } from "@mantine/hooks";
import {
  Drawer,
  Group,
  Badge,
  Image,
  Text,
  Stack,
  Button,
} from "@mantine/core";
import { ShoppingCart } from "tabler-icons-react";
import data from "../Data/Data.json";
export function Cart() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title={"Cart"}
        closeOnClickOutside={true}
        position={"right"}
      >
        <Stack>
          {data.map((item) => {
            return (
              <div key={item.id} className="flex">
                <div className="flex justify-start items-start">
                  <Image
                    src={item.image}
                    height={100}
                    alt={item.title}
                    fit="contain"
                    className="z-0"
                  />
                  <div>
                    <Group className="gap-0">
                      <Text w={250} fz="sm">
                        {item.title}
                      </Text>
                      <Text color="dimmed" fz={"xs"}>
                        x5
                      </Text>
                    </Group>
                    <Text fz="sm" mt="xs">
                      ${item.price}
                    </Text>
                  </div>
                  <Group position="apart">
                    <Text>${item.price * 5}</Text>
                    <Button
                      color={"red"}
                      className="bg-transparent border border-gray-200   text-red-500 hover:text-white transition duration-200"
                    >
                      &times;
                    </Button>
                  </Group>
                </div>
                <Group position="right"></Group>
              </div>
            );
          })}
        </Stack>
      </Drawer>
      <Group
        onClick={open}
        className=" text-gray-800 rounded-full border border-gray-500 p-2 hover:bg-blue-400 hover:text-white hover:border-blue-400 transition duration-200 cursor-pointer relative"
      >
        <ShoppingCart strokeWidth={1.2} />
        <Badge
          size={"md"}
          variant="filled"
          className="absolute px-2 py-3 bottom-0 right-0 translate-x-1/4 translate-y-1/4"
        >
          2
        </Badge>
      </Group>
    </>
  );
}
