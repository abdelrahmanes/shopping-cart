import {
  Card,
  Image,
  Text,
  Group,
  Button,
  createStyles,
  rem,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  section: {
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },
}));

interface ProductCardProps {
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
}

export function ProductCard({ item }: ProductCardProps) {
  const { classes } = useStyles();
  const { title, price, image } = item;
  let quantity = 0;
  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={image} alt={title} height={500} fit="contain" />
      </Card.Section>

      <Card.Section className={`${classes.section} border-b-0`} mt="md">
        <Group position="apart">
          <Text truncate w={250} fz="lg" fw={500}>
            {title}
          </Text>
          <Text fz="sm" mt="xs">
            ${price}
          </Text>
        </Group>
      </Card.Section>

      <Group mt="xs">
        {quantity === 0 ? (
          <Button className="bg-blue-500" radius="md" style={{ flex: 1 }}>
            Add to cart
          </Button>
        ) : (
          <div className="flex flex-col justify-center items-center w-full">
            <p className="mb-4 text-sm">
              <span className="text-blue-500 text-2xl font-bold">1</span> in
              cart
            </p>
            <div className="flex justify-center items-center gap-2">
              <Button
                className="bg-red-400 transition duration-200"
                color={"red"}
                radius="md"
                style={{ flex: 1 }}
              >
                -
              </Button>
              <Button
                color={"gray"}
                className="border border-gray-500 text-red-500 transition duration-200 bg-gray-100"
                radius="md"
                style={{ flex: 1 }}
              >
                &times;
              </Button>
              <Button
                className="bg-blue-400 transition duration-200"
                color={"blue"}
                radius="md"
                style={{ flex: 1 }}
              >
                +
              </Button>
            </div>
          </div>
        )}
      </Group>
    </Card>
  );
}
