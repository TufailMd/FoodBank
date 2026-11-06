export function getCartTotal(cart) {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

export function getTotalQuantity(cart) {
  return cart.reduce((total, item) => total + item.quantity, 0);
}
