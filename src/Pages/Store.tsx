import StoreItems from "../Data/Data.json";
import { Grid, Container, Text } from "@mantine/core";
import { ProductCard } from "../Components/ProductCard";
export function Store() {
  let quantity = 1;
  return (
    // <Container className="bg-gray-100">
    //   <h1 className="text-base font-bold mb-4">Store</h1>
    //   <div className="grid grid-cols-12 gap-3">
    //     {StoreItems.map((item) => {
    //       return (
    //         <div
    //           key={item.id}
    //           className="col-span-12 md:col-span-6 lg:col-span-4 border border-gray-200 py-6 px-5 rounded-md"
    //         >
    //           <div className="">
    //             <img
    //               src={item.image}
    //               alt={`${item.title} image`}
    //               className="w-full h-[500px] object-contain"
    //             />
    //           </div>

    //           <div className="flex justify-start items-baseline   my-8">
    //             <p className=" truncate w-60 " title={item.title}>
    //               {item.title}
    //             </p>
    //             <p className="ml-auto">${item.price}</p>
    //           </div>
    //           {quantity === 0 ? (
    //             <div className="w-full bg-blue-500 border border-blue-500 text-center rounded-md cursor-pointer text-white py-2">
    //               Add to cart
    //             </div>
    //           ) : (
    //             <div className="flex flex-col justify-center items-center ">
    //               <p className="mb-4 text-sm">
    //                 <span className="text-blue-500 text-2xl font-bold">1</span>{" "}
    //                 in cart
    //               </p>
    //               <div className="flex justify-center items-center gap-2">
    //                 <p className="border border-red-500 bg-red-500 px-3 py-1 text-white rounded-md text-xl cursor-pointer hover:bg-red-400 hover:border-red-400 transition duration-200">
    //                   -
    //                 </p>
    //                 <p
    //                   className="border border-gray-500  px-3 py-1  rounded-md cursor-pointer text-lg text-red-500 hover:bg-gray-200   transition duration-200"
    //                   title="remove"
    //                 >
    //                   &times;
    //                 </p>
    //                 <p className="border border-blue-500 bg-blue-500 px-3 py-1 text-white rounded-md text-xl cursor-pointer hover:bg-blue-400 hover:border-blue-400 transition duration-200">
    //                   +
    //                 </p>
    //               </div>
    //             </div>
    //           )}
    //         </div>
    //       );
    //     })}
    //   </div>
    // </Container>
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
