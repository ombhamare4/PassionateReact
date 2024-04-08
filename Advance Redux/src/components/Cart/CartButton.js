import classes from "./CartButton.module.css";
import { useSelector, useDispatch } from "react-redux";
import { uiAction } from "../../store/ui-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const cartVisibilityHandler = () => {
    dispatch(uiAction.toggle());
  };

  return (
    <button onClick={cartVisibilityHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cart.totalQuantity}</span>
    </button>
  );
};

export default CartButton;
