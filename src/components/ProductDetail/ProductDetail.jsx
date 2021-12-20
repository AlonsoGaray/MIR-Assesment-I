import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Img = styled.img`
  width: 110px;
  height: 110px;
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
    <>
      <Img src={product.image} />
      <Title>
        Id: {product.id} | Producto: {product.title}
      </Title>
    </>
  );
};

export default ProductDetail;
