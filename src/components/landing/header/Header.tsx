import Link from 'next/link';
import React from 'react';
import SignInButton from '../../signinbutton/SignInButton';
import styles from './header.module.css';
import theme from '../../../lib/mui/theme';
import BurgerMenu from './BurgerMenu';
import { useMediaQuery } from '@mui/material';

const navItems = [
  <Link className="link link-hover" href="/create" key={0}>
    Create
  </Link>,

  <Link className="link link-hover" href="/feed" key={1}>
    Feed
  </Link>,
  <Link className="link link-hover" href="/discover" key={2}>
    Discover
  </Link>,
];

export default function Header() {
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  // Mobile view
  if (matches) {
    return (
      <>
        <div className={styles.header}>
          <div className={styles.left}>
            <Link href="/feed">
              {/*  eslint-disable-next-line @next/next/no-img-element */}
            </Link>
          </div>

          <BurgerMenu />
        </div>
      </>
    );
  }

  // Desktop view
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Link href="/feed">
            {/*  eslint-disable-next-line @next/next/no-img-element */}
            <h1 className="text-red-500">Lenspire</h1>
          </Link>
          {navItems}
        </div>

        <SignInButton />
      </div>
    </>
  );
}
