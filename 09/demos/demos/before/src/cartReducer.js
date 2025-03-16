export const cartReducer = (cart, action) => {
  switch (action.type) {
    case "empty":
      return [];
    case "updateQuantity": {
      const { sku, quantity } = action;
      return quantity === 0
        ? cart.filter((i) => i.sku !== sku)
        : cart.map((i) => (i.sku === sku ? { ...i, quantity } : i));
    }
    case "add": {
      const { id, sku } = action;

      const cartItem = cart.find((i) => i.sku === sku);
      if (cartItem) {
        return cart.map((i) =>
          i.sku === sku ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...cart, { id, sku, quantity: 1 }];
      }
    }
    default:
      throw new Error("Unhandled action " + action.type);
  }
};
