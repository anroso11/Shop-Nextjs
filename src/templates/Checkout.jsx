import React, { useContext } from 'react'
import OrderItem from '../components/OrderItem';
import '../styles/Checkout.scss';
import AppContext from '../context/AppContext';
import flechita from '@images/flechita.svg';
import Link  from 'next/link'; 


const Checkout = ({ setToggle }) => {
  
  const {state} = useContext(AppContext);

  const today = new Date(Date.now()).toLocaleString().split(', ')[0];
  const sumTotal = () => {
    return state.cart.reduce((total, product) => total + product.price, 0);
  }

  return (
    <div className="Checkout">
      <div className="Checkout-container">
        <Link to="/" className='title-container'
          // onClick={()=> setToggle(false)}
        >
          {/* <Image src={flechita} alt="arrow" className= {style['title-flecha']}/> */}
          <h1 className="title">My order</h1>
        </Link>
        <div className="Checkout-content">
          <div className="order-checkout">
            <p>
              <span>{today}</span>
              <span>{state.cart.length}articles</span>
            </p>
            <p>$ {sumTotal()}</p>
          </div>
        </div>
        {state.cart.map(product => (
            <OrderItem product={product} key={`orderItems-${product.id}`}/>
        ))}
      </div>
    </div>
  );
}


export default Checkout