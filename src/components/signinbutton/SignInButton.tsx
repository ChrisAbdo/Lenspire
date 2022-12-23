import { Button, Typography } from '@mui/material';
import {
  useNetworkMismatch,
  useAddress,
  ConnectWallet,
  useNetwork,
} from '@thirdweb-dev/react';
import React from 'react';
import { CHAIN_ID } from '../../../const/blockchain';
import useLogin from '../../lib/auth/useLogin';
import styles from './signinbutton.module.css';
import { MediaRenderer } from '@thirdweb-dev/react';
import { useLensUserContext } from '../../context/LensUserContext';
import Link from 'next/link';

export default function SignInButton() {
  const address = useAddress();
  const isOnWrongNetwork = useNetworkMismatch();
  const [, switchNetwork] = useNetwork();
  const {
    data: lensUser,
    isSignedIn,
    isLoading: loadingLensUser,
    error,
  } = useLensUserContext();
  const { mutateAsync: login } = useLogin();

  async function handleLogin() {
    await login();
  }

  // If no wallet is connected,
  if (!address) {
    return <ConnectWallet className="bg-transparent text-white " />;
  }

  // If is on wrong network,
  if (isOnWrongNetwork) {
    return (
      <Button
        className={styles.ctaButton}
        onClick={() => switchNetwork?.(CHAIN_ID)}
      >
        Switch Network
      </Button>
    );
  }

  if (!isSignedIn) {
    return (
      <Button
        variant="contained"
        className="btn btn-outline"
        onClick={handleLogin}
      >
        Sign In 🌿
      </Button>
    );
  }

  if (loadingLensUser) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>Error!</Typography>;
  }

  if (lensUser?.defaultProfile === null) {
    return <Typography variant="body1">No Lens Profile</Typography>;
  }

  return (
    <div className={styles.profileContainer}>
      {/* TODO: Should create profile page and link to it. */}
      {/* <Link
        className="text-white btn btn-ghost"
        href={`/profile/${lensUser?.defaultProfile?.handle}`}
      >
        @{lensUser?.defaultProfile?.handle}
      </Link> */}

      <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
        <label tabIndex={0} className="btn m-1">
          @{lensUser?.defaultProfile?.handle}
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-[#555555] rounded-box w-52"
        >
          <li>
            <Link
              href={`/profile/${lensUser?.defaultProfile?.handle}`}
              className="btn btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Profile
            </Link>
          </li>
          <li>
            <a className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              Coming soon!
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
