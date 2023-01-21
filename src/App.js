import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "./store/ui-slice";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
  const showCart = useSelector((state) => state.ui.cartVisible);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "sending",
          message: "Sending cart data!",
        })
      );
      const response = await fetch(
        "https://react-d9bf7-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log(response.ok);

      if (!response.ok) {
        throw new Error("Sending Cart data failed.");
      }

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!!",
          message: "Sent cart data sucessfully",
        })
      );
    };

    sendCartData().catch((error) =>
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "xxxxx Error!!",
          message: "Sending cart data Failed",
        })
      )
    );
  }, [cart, dispatch]);

  return (
    <>
      {notification ? (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      ) : (
        ""
      )}
      <Layout>
        {showCart ? <Cart /> : ""}
        <Products />
      </Layout>
    </>
  );
}

export default App;
