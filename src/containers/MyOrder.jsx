import React, { useContext, useState } from 'react';
import OrderItem from '@components/OrderItem';
import flechita from '@images/flechita.svg';
import AppContext from '@context/AppContext';
import Link  from 'next/link'; 
import styles from '@styles/MyOrder.module.scss';
import Image from 'next/image';


const MyOrder = ({toggleOrders, setToggleOrders}) => {
  // const [toggle, setToggle] = useState(false);
  // const [toggleOrders, setToggleOrders] = useState(false);
  const { state } = useContext(AppContext);
  
  const sumTotal = () => {
    const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <aside className={styles.MyOrder}>
      <div className={styles['title-container']}>
        <Image src={flechita} 
        alt="arrow" 
        className={styles['title-flecha']} 
        onClick={() => setToggleOrders(!toggleOrders)} 
        />
        <p className={styles.title}>My order</p>
      </div>
      <div className={styles['my-order-content']}>
        {state.cart.map((product) => (
          <OrderItem product={product} key={`orderItems-${product.id}`} />
        ))}
        <div className={styles['order-shop']}>
          <p>
            <span>Total:</span>
          </p>
          <p>$ {sumTotal()}</p>
        </div>
        <Link href={'/checkout'}>
          <button
            className={styles['primary-button']}
            // onClick={() => setToggle(true)}
          >
            Checkout
          </button>
        </Link>
      </div>
      {/* {toggle && <Checkout setToggle={setToggle} />} */}
    </aside>
  );
};



export default MyOrder