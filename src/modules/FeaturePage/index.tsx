import React, { Fragment, useEffect, useState } from 'react';
import Card from '@components/UI/Card';
import { styled } from 'styled-components';
import { Header } from '@components/UI/Header';
import { useProducts } from '@lib/hooks/useProducts';
import { Product } from '@lib/types';

type User = {
  name: string;
};
const FeaturePage: React.FC = () => {
  const [user, setUser] = useState<User>();
  const { products, isLoading, error } = useProducts();

  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />
      <Container>
        <div className='title-section'>
          <h1>Do More</h1>
          <p>
            Now that you know the basics, let's explore other parts of Storybook that will
            improve your experience. This list is just to get you started. You can
            customise Storybook in many ways to fit your needs.
          </p>
        </div>
        <CardsContainer>
          {!isLoading &&
            products.length > 0 &&
            products.map((product, i) => <Card key={i} product={product} />)}
        </CardsContainer>
      </Container>
    </article>
  );
};

export default FeaturePage;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  .title-section {
    margin-bottom: 32px;
    h1 {
      font-size: 32px;
      margin: 20px 0 8px;
      padding: 0;
      cursor: text;
      position: relative;
      color: #2e3438;
      font-weight: 700;
    }
    p {
      font-size: 14px;
      margin: 16px 0;

      line-height: 24px;
      color: #2e3438;
    }
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 32px 20px;
`;
