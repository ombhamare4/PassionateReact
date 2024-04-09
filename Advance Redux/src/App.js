import { Fragment, useEffect } from "react";
import axios from "axios";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";

import { useSelector, useDispatch } from "react-redux";
import { uiAction } from "./store/ui-slice";

let intital = true; // to let not send request when first time pahe render

function App() {
  const dispatch = useDispatch();

  const ui = useSelector((state) => state.ui);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    const sendRquest = async () => {
      dispatch(
        uiAction.showNotification({
          status: "Pending",
          title: "Sending...",
          message: "Sending Cart Data",
        }),
      );
      try {
        const response = await axios.put(
          {firebase_url}
          cart,
        );
        if (response.status === 200) {
          dispatch(
            uiAction.showNotification({
              status: "success",
              title: "Success!",
              message: "Successfully Added to Cart",
            }),
          );
        }
      } catch (e) {
        dispatch(
          uiAction.showNotification({
            status: "error",
            title: "Error!",
            message: "Something Went Wrong",
          }),
        );
        // throw new Error("Something went wrong", e);
      }
    };
    if (intital) {
      intital = false;
      return;
    }
    sendRquest();
  }, [cart, dispatch]); // dispatch is also now dependency.
  return (
    <Fragment>
      {ui.notification ? (
        <Notification
          status={ui.notification.status}
          title={ui.notification.title}
          message={ui.notification.message}
        />
      ) : null}
      <Layout>
        {ui.cartIsVisible ? <Cart /> : null}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
