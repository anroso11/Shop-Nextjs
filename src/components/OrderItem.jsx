import React, {useContext} from 'react';
import iconClose from '@images/icon_close.png'
import AppContext from '@context/AppContext';
import Image from 'next/image';
import styles from '@styles/OrderItem.module.scss';

const OrderItem = ({product}) => {
  const {removeFromCart} = useContext(AppContext);

  const handleRemove = product =>{
    removeFromCart(product);
  }

  return (
    <div className={styles.OrderItem}>
      <figure>
        <Image
          loader={()=> product.images[0]}
          src={product.images[0]}
          alt={product.title}
          width="70"
          height="70" 
          layout='responsive' 
        />
      </figure>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <Image src={iconClose} alt="close" onClick={()=> handleRemove(product)} />
    </div>
  );
};

export default OrderItem;