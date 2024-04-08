import { useSelector, useDispatch } from "react-redux";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cart.items.map((data) => (
          <CartItem
            key={data.id}
            item={{
              id: data.id,
              title: data.name,
              quantity: data.quantity,
              total: data.totalPrice,
              price: data.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
