import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
  const showCart = useSelector((state) => state.ui.cartVisible);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
          const sendCartData = async()=>{
            const response = await fetch("https://react-d9bf7-default-rtdb.firebaseio.com/cart.json", 
            {
              method: "PUT",
              body: JSON.stringify(cart),
              headers:{'Content-Type':'application/json'}
          });
            if(!response.ok){
              throw new Error ('Sending cart data failed.')
            }
            const responseData = await response.json();
          }; 
  }, [cart]);

  return (
    <Layout>
      {showCart ? <Cart /> : ""}
      <Products />
    </Layout>
  );
}

export default App;
