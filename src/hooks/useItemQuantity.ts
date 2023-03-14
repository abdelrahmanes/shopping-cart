import { useSelector } from "react-redux";
import { cartItem } from "../Redux/features/shoppingCart/shoppingCartSlice";
import { RootState } from "../Redux/store";

const useItemQuantity = (id: number) => {
  return useSelector(
    (state: RootState) =>
      state.cartReducer.cartItems?.find((item: cartItem) => item.id === id)
        ?.quantity || 0
  );
};

export default useItemQuantity;
