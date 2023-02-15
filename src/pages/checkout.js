import Head from 'next/head';
import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import styles from '@styles/Checkout.module.scss';
import AppContext from '@context/AppContext';
import flechita from '@images/flechita.svg';
import Link from 'next/link';

const Checkout = ({ setToggle }) => {
  const { state } = useContext(AppContext);

  const today = new Date(Date.now()).toLocaleString().split(', ')[0];
  const sumTotal = () => {
    return state.cart.reduce((total, product) => total + product.price, 0);
  };

  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <div className={styles.Checkout}>
        <div className={styles['Checkout-container']}>
          <Link
            href={'/'}
            className={styles['title-container']}
            // onClick={()=> setToggle(false)}
          >
            {/* <img src={flechita} alt="arrow" className='title-flecha'/> */}
            <h1 className={styles.title}>My order</h1>
          </Link>
          <div className={styles['Checkout-content']}>
            <div className={styles['order-checkout']}>
              <p>
                <span>{today}</span>
                <span>{state.cart.length}articles</span>
              </p>
              <p>$ {sumTotal()}</p>
            </div>
          </div>
          {state.cart.map((product) => (
            <OrderItem product={product} key={`orderItems-${product.id}`} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Checkout;
