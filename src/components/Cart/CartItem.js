import classes from './CartItem.module.css';
import {useDispatch} from 'react-redux';
import {cartActions} from '../../store/cart-slice';

const CartItem = (props) => {

  const dispatch = useDispatch();
  

  const removeItemHandler = (event)=> {
    event.preventDefault();
    dispatch(cartActions.removeItemsFromCart(props.item.id))
  };
  const addItemHandler = (event)=> {
    event.preventDefault();
    dispatch(cartActions.addItemsToCart({ 
      id:props.item.id, 
      title:props.item.title, 
      price:props.item.price
    }));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{props.item.title}</h3>
        <div className={classes.price}>
          ${props.item.total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${props.item.price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{props.item.quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
