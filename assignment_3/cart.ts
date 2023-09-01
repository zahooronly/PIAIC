let shoppingCart:string[] = [];

function addItemToCart(item: string) {
  shoppingCart.push(item);
  console.log(`Added ${item} to the cart.`);
  console.log(`Cart Contents: ${shoppingCart}`);
}

function removeItemFromCart(item: string) {
  const index = shoppingCart.indexOf(item);
  if (index !== -1) {
    shoppingCart.splice(index, 1);
    console.log(`Removed ${item} from the cart.`);
    console.log(`Cart Contents: ${shoppingCart}`);
  } else {
    console.log(`${item} not found in the cart.`);
  }
}

function updateQuantity(item: string, quantity: number) {
  const index = shoppingCart.indexOf(item);
  if (index !== -1) {
    shoppingCart.splice(index, 1, `${item} (Quantity: ${quantity})`);
    console.log(`Updated quantity of ${item} to ${quantity}.`);
    console.log(`Cart Contents: ${shoppingCart}`);
  } else {
    console.log(`${item} not found in the cart.`);
  }
}

addItemToCart("Product A");
addItemToCart("Product B");
addItemToCart("Product C");
removeItemFromCart("Product B");
updateQuantity("Product A", 5);
