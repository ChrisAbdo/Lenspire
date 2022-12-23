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
        <div className="navbar bg-[#000] border-b-2 border-black sticky top-0 z-50">
          <div className="navbar-start">
            <div className="dropdown text-white">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#555555] rounded-box w-52"
              >
                <li>
                  <a href="/create">Create</a>
                </li>
                <li>
                  <a href="/feed">Feed</a>
                </li>
              </ul>
            </div>
            <a
              href="/"
              className="btn btn-ghost normal-case text-xl text-white"
            >
              Lenspire
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                />
              </svg>
            </a>
          </div>

          <div className="navbar-end">
            <SignInButton />
          </div>
        </div>
      </>
    );
  }

  // Desktop view
  return (
    <>
      <div className="navbar bg-[#000] border-b-2 border-black sticky top-0 z-50 px-12 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link
            href="/"
            className="btn btn-ghost normal-case text-xl text-white"
          >
            Lenspire
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
              />
            </svg>
          </Link>
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                href="/create"
                className="hidden text-white md:block relative before:content-[''] before:absolute before:block before:w-full before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-white
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300
              active:after:content-[''] active:after:absolute active:after:block active:after:w-full active:after:h-[1px]"
              >
                Create
              </Link>
            </li>
            <li>
              <Link
                href="/feed"
                className="hidden text-white md:block relative before:content-[''] before:absolute before:block before:w-full before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-white
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300
              active:after:content-[''] active:after:absolute active:after:block active:after:w-full active:after:h-[1px]"
              >
                Feed
              </Link>
            </li>
            {/* <li>
              <a
                href="/discover"
                className="hidden text-black md:block relative before:content-[''] before:absolute before:block before:w-full before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-black
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300
              active:after:content-[''] active:after:absolute active:after:block active:after:w-full active:after:h-[1px]"
              >
                Discover
              </a>
            </li> */}
          </ul>
        </div>
        <div className="navbar-center hidden lg:flex"></div>
        <div className="navbar-end">
          <SignInButton />
        </div>
      </div>
    </>
  );
}
