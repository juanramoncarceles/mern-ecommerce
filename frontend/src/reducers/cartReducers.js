import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const exists = state.cartItems.find(i => i.product === item.product);
      // If the product exists it is replaced, otherwise it is added.
      if (exists) {
        return {
          ...state,
          cartItems: state.cartItems.map(i =>
            i.product === exists.product ? item : i
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(x => x.product !== action.payload),
      };
    default:
      return state;
  }
};
