import { Product } from '@lib/types';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import Badge from '../Badge';

const Card = ({ key, product }: { key?: number; product: Product }) => (
  <CardBox>
    <div className='card-image'>
      <Image
        objectFit={'cover'}
        fill
        src={product.thumbnail}
        alt='A screenshot showing the autodocs tag being set, pointing a docs page being generated'
      />
    </div>
    <div className='card-content'>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <Badge text={product.category} />
    </div>
  </CardBox>
);

const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 35rem;
  background: #ffffff;
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: 0px 15px 40px 15px rgba(0, 0, 0, 0.1);
  .card-image {
    height: 20rem;
  }
  .card-content {
    padding: 1rem;
  }
  h3 {
    font-size: 30px;
    padding-top: 20px !important;
    padding-bottom: 5px !important;
    margin: 0 !important;
  }
  p {
    margin: 0;
    padding-bottom: 10px;
    font-size: 16px;
    margin: 16px 0;
    line-height: 24px;
    color: #2e3438;
  }
`;

export default Card;
