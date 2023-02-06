import React, {useContext} from 'react';
import logo from '@images/logo_yard_sale.svg';
import Image from 'next/image';
import IconMenu from '@images/icon_menu.svg';
import IconShopping from '@images/icon_shopping_cart.svg';
import Menu from '@components/Menu';
import AppContext from '@context/AppContext';
import MyOrder from '@containers/MyOrder';
import styles from '@styles/Header.module.scss';
import Link from 'next/link';

const Header = () => {
  const [toggleDesktop, setToggleDesktop] = React.useState(false);
  const [toggleOrders, setToggleOrders] = React.useState(false);
  const {state} = useContext(AppContext);

  const handleToggle = () => {
    setToggleDesktop(!toggleDesktop);
  }
  return (
    <nav className={styles.Nav}>
      <img src={IconMenu.src} alt="menu" className={styles.menu} />
      <div className={styles['navbar-left']}>
        <Link href={'/'}>
          <img src={logo.src} alt="logo" className={styles['nav-logo']} />
        </Link>
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>

      <div className={styles['navbar-right']}>
        <ul>
          <li className={styles['navbar-email']} onClick={handleToggle}>
            pepitoperez@example.com
          </li>
          <li className={styles['navbar-shopping-cart']} onClick={() => setToggleOrders(!toggleOrders)}>
            <Image src={IconShopping} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggleDesktop ? <Menu /> : ''}
      {/* {toggleOrders ? <MyOrder /> : ""} */}
      {toggleOrders && <MyOrder toggleOrders={toggleOrders} setToggleOrders={setToggleOrders} />}
    </nav>
  );
}

export default Header