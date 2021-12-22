import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const ProductCard = styled.div`
  display: flex;
  justify-content: center;
  width: auto;
  height: auto;
  max-width: 900px;
  padding: 1em;
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

const Title = styled.h5`
  color: black;
`;

const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  const getProduct = async () => {
    await axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      const { data } = res;
      setProduct(data);
    });
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <Container>
      <ProductCard>
        <Img src={product.image} />
        <Title>
          Id: {product.id} | Producto: {product.title}
        </Title>
      </ProductCard>
    </Container>
  );
};

export default ProductDetail;
