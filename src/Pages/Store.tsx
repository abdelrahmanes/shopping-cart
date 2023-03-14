import StoreItems from "../Data/Data.json";
import { Grid, Container, Text } from "@mantine/core";
import { ProductCard } from "../Components/ProductCard";
export function Store() {
  return (
    <Container my="md" size={"xxl"}>
      <Text fw={500} fz={"lg"} mb={16}>
        Store
      </Text>
      <Grid>
        {StoreItems.map((item) => {
          return (
            <Grid.Col key={item.id} xs={4}>
              <ProductCard item={item} />
            </Grid.Col>
          );
        })}
      </Grid>
    </Container>
  );
}
