import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ProductDetail = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    await axios.get('https://fakestoreapi.com/products').then((res) => {
      const { data } = res;
      setTimeout(() => {
        setProducts(data);
      }, 1000);
    });
  };

  useEffect(() => {
    getProducts();
  });

  return (
    <AllProducts>
      {products.map((product) => {
        return (
          <SingleProduct key={product.id}>
            <Img src={product.image} />
            <Title>
              Id: {product.id} | Producto: {product.title}
            </Title>
            <Bottom>
              <Contador>Tiempo</Contador>
              <Button>Go To Detail</Button>
            </Bottom>
          </SingleProduct>
        );
      })}
    </AllProducts>
  );
};

export default ProductDetail;
