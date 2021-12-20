import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';

const AllProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  border-radius: 20px;
  max-width: 1300px;
  margin: 50px auto;
  padding: 0 0 15px 0;
`;

const SingleProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  border-radius: 20px;
  width: 30%;
  margin: 10px auto;
  padding: 10px;
`;

const Img = styled.img`
  width: 110px;
  height: 110px;
`;

const Title = styled.h5`
  color: black;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: yellow;
  width: 90%;
  height: 40px;
`;

const Contador = styled.p`
  color: black;
  width: 50%;
  @media screen and (min-width: 769px) {
    margin-left: -20px;
  }
`;

const Button = styled.button`
  background-color: #4caf50;
  width: 50%;
  padding: 2px;
  border-radius: 20px;
  max-width: 120px;
  @media screen and (min-width: 769px) {
    margin-left: 10px;
  }
`;

const ProductCard = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    await axios.get('https://fakestoreapi.com/products').then((res) => {
      const { data } = res;
      setProducts(data);
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

export default ProductCard;
