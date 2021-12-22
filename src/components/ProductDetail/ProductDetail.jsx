import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import StarRatings from 'react-star-ratings';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Producto = styled.h1`
  color: black;
`;

const ProductCard = styled.div`
  display: flex;
  justify-content: center;
  width: auto;
  height: auto;
  max-width: 1000px;
  padding: 2em;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  border-radius: 20px;
`;

const Img = styled.img`
  width: auto;
  height: auto;
  max-width: 500px;
  max-height: 500px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0 5em;
  width: 50%;
`;

const Description = styled.h3`
  color: black;
`;

const Text = styled.p`
  font-size: ${(props) => props.fs || '30px'};
  margin: ${(props) => props.margin || '30px 0'};
`;

const Rating1 = styled.div`
  display: flex;
`;

const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const [rating, setRating] = useState([]);
  const { id } = useParams();

  const getProduct = async () => {
    await axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      const { data } = res;
      setProduct(data);
      setRating(data.rating);
    });
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <Container>
      {product.id !== undefined ? (
        <>
          <Producto>{product.title}</Producto>
          <ProductCard>
            <Img src={product.image} />
            <Info>
              <Text fs="20px">{product.category}</Text>
              <Description>{product.description}</Description>
              <Text>${product.price}</Text>
              <Rating1>
                <StarRatings
                  rating={rating.rate}
                  starRatedColor="blue"
                  numberOfStars={5}
                  name="rating"
                  starDimension="45px"
                />
                <Text fs="30px" margin="8px 15px">
                  {rating.count}
                </Text>
              </Rating1>
            </Info>
          </ProductCard>
        </>
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
    </Container>
  );
};

export default ProductDetail;
