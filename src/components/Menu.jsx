import React, {useState} from "react";
import Link  from 'next/link'; 
import Orders from "../templates/Orders";
import styles from '@styles/Menu.module.scss';


const Menu = () => {
  const [toggleOrders, setToggleOrders] = useState(false);
  return (
    <div className={styles.Menu}>
      <ul>
        <li>
          <Link href={"/checkout"} className={styles.title}
          // onClick={()=> setToggleOrders(true)} 
          >
              My orders
          </Link>
        </li>
        <li>
          <a href="/">My account</a>
        </li>
        <li>
          <a href="/">Sign out</a>
        </li>
      </ul>
      <div>
        {toggleOrders && <Orders setToggleOrders={setToggleOrders} />}
      </div>
    </div>
  );
};

export default Menu;
