import React from 'react';

import { Button } from '../Button';
import styles from './header.module.css';

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
  <header>
    <div className={styles['storybook-header']}>
      <div>
        <svg
          width='32'
          height='32'
          viewBox='0 0 32 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0 5.02154C0 2.24822 2.26214 0 5.05263 0H26.9474C29.7379 0 32 2.24822 32 5.02154V26.3631C32 29.1364 29.7379 31.3846 26.9474 31.3846H5.05263C2.26214 31.3846 0 29.1364 0 26.3631V5.02154Z'
            fill='white'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M26.9474 1.67385H5.05263C3.1923 1.67385 1.68421 3.17266 1.68421 5.02154V26.3631C1.68421 28.212 3.1923 29.7108 5.05263 29.7108H26.9474C28.8077 29.7108 30.3158 28.212 30.3158 26.3631V5.02154C30.3158 3.17266 28.8077 1.67385 26.9474 1.67385ZM5.05263 0C2.26214 0 0 2.24822 0 5.02154V26.3631C0 29.1364 2.26214 31.3846 5.05263 31.3846H26.9474C29.7379 31.3846 32 29.1364 32 26.3631V5.02154C32 2.24822 29.7379 0 26.9474 0H5.05263Z'
            fill='black'
          />
          <path
            d='M10.4614 25.2309V7.38477H17.1224C18.487 7.38477 19.6319 7.64037 20.557 8.15159C21.488 8.66281 22.1905 9.36574 22.6646 10.2604C23.1445 11.1492 23.3845 12.16 23.3845 13.2928C23.3845 14.4372 23.1445 15.4539 22.6646 16.3427C22.1847 17.2315 21.4764 17.9315 20.5397 18.4428C19.603 18.9482 18.4494 19.2009 17.0791 19.2009H12.6644V16.5431H16.6454C17.4434 16.5431 18.0967 16.4037 18.6056 16.1248C19.1144 15.846 19.4902 15.4626 19.7331 14.9746C19.9817 14.4866 20.106 13.926 20.106 13.2928C20.106 12.6596 19.9817 12.1019 19.7331 11.6197C19.4902 11.1376 19.1115 10.7629 18.5969 10.4956C18.0881 10.2226 17.4318 10.0861 16.6281 10.0861H13.6792V25.2309H10.4614Z'
            fill='#F51250'
          />
        </svg>

        <h1>PandaBook</h1>
      </div>
      <div>
        {user ? (
          <>
            <span className={styles['welcome']}>
              Welcome, <b>{user.name}</b>!
            </span>
            <Button size='small' onClick={onLogout} label='Log out' />
          </>
        ) : (
          <>
            <Button size='small' onClick={onLogin} label='Log in' />
            <Button primary size='small' onClick={onCreateAccount} label='Sign up' />
          </>
        )}
      </div>
    </div>
  </header>
);
