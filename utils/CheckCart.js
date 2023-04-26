export function checkInList(cart, product) {
    return cart.find((c) => c.id === product.id);
  }