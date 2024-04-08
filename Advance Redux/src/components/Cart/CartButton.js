import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { uiAction } from "../../store/ui-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartVisibilityHandler = () => {
    dispatch(uiAction.toggle());
  };

  return (
    <button onClick={cartVisibilityHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
