import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  //version useEffect React 17
  // useEffect(async ()=>{
  //     const response = await axios.get(API);
  //     setProducts(response.data);
  // },[])

  //version useEffect React 18
  useEffect(() => {
    const getproducts = async () => {
      const response = await axios.get(API);
      setProducts(response.data);
    };
    getproducts();
  }, []);
  return products;
};

export default useGetProducts;
