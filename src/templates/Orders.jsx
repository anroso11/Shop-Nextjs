import React, { useContext } from 'react';
import OrderItem from '../components/OrderItem';
import AppContext from '../context/AppContext';
import styles from '@styles/Orders.module.scss';

const Orders = ({ setToggleOrders }) => {
  const {state} = useContext(AppContext);
  return (
    <div className={styles['my-orders']}>
      <div className="my-orders-container">
        <h1 className="title-my-orders" onClick={()=> setToggleOrders(false)}>My orders</h1>
        <div className="my-orders-content">
        {state.cart.map(product => (
            <OrderItem product={product} key={`orderItems-${product.id}`}/>
        ))}
        </div>
        <a href='/checkout'><button className='primary-button'>Checkout</button></a>
      </div>
    </div>
  );
};

export default Orders;