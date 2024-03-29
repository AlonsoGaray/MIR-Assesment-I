/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Countdown from 'react-countdown';
import './style.css';

const AllProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  border-radius: 20px;
  max-width: 1400px;
  margin: 50px auto;
  padding: 0 0 12px 0;
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
  width: 85%;
  margin: 10px auto;
  padding: 15px;
  @media screen and (min-width: 600px) {
    width: 43%;
  }
  @media screen and (min-width: 769px) {
    width: 28%;
  }
`;

const Img = styled.img`
  width: 150px;
  height: 150px;
`;

const Title = styled.h1`
  color: black;
  text-align: center;
`;

const Text = styled.h3`
  color: black;
  background-color: ${(props) => props.bgc || 'none'};
  border-radius: 20px;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
  width: 110%;
  height: 30px;
  padding: 2px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: bold;
  max-width: 120px;
  @media screen and (min-width: 769px) {
    margin-left: 10px;
  }
`;

const Timer = styled.span`
  font-size: 20px;
`;

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    await axios.get('https://fakestoreapi.com/products').then((res) => {
      const { data } = res;
      setProducts(data);
    });
  };

  function numeroRandom() {
    return Math.random() * (180000 - 60000) + 60000;
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Title>Productos</Title>
      <AllProducts>
        {products.length > 0 ? (
          products.map((product) => {
            const tiempo = numeroRandom();
            const renderer = ({ minutes, seconds, completed }) => {
              if (completed) {
                return <Text bgc="#F05454">Tiempo agotado</Text>;
              }
              return (
                <>
                  <Contador>
                    <Timer>
                      {minutes > 9 ? minutes : `0${minutes}`}:
                      {seconds > 9 ? seconds : `0${seconds}`}
                    </Timer>
                  </Contador>
                  <Link
                    className="btn"
                    to={`/detalle/${product.id}`}
                    key={product.id}
                  >
                    <Button id={product.id}>Go To Detail</Button>
                  </Link>
                </>
              );
            };
            return (
              <SingleProduct key={product.id}>
                <Img src={product.image} />
                <Text>
                  Id: {product.id} | Producto: {product.title}
                </Text>
                <Bottom>
                  <Countdown date={Date.now() + tiempo} renderer={renderer} />
                </Bottom>
              </SingleProduct>
            );
          })
        ) : (
          <>
            <h1>Loading</h1>
            <div className="lds-roller">
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
          </>
        )}
      </AllProducts>
    </>
  );
};

export default ProductCard;
