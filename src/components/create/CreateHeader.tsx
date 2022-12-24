import Link from 'next/link';
import React, { useState } from 'react';
import headerStyles from '../landing/header/header.module.css';
import createStyles from './create.module.css';
import SignInButton from '../signinbutton/SignInButton';
import SettingsIcon from '@mui/icons-material/Settings';
import { useLensUserContext } from '../../context/LensUserContext';
import SettingsSidebar from './SettingsSidebar';
import { ButtonBase } from '@mui/material';

type Props = {
  postMetadata: Record<string, any>;
  setPostMetadata: React.Dispatch<React.SetStateAction<Record<string, any>>>;
};

export default function CreateHeader({ postMetadata, setPostMetadata }: Props) {
  const { isSignedIn, data: lensProfile } = useLensUserContext();
  const [openSettingsSidebar, setOpenSettingsSidebar] =
    useState<boolean>(false);

  return (
    <>
      <div className={headerStyles.header}>
        <div className={headerStyles.left}>
          <Link href="/feed">
            <button className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 btn-btn-outline"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
          </Link>
          <Link
            href="/"
            className="hidden text-white md:block relative before:content-[''] before:absolute before:block before:w-full before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-white
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300
              active:after:content-[''] active:after:absolute active:after:block active:after:w-full active:after:h-[1px]"
          >
            Home
          </Link>
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
        </div>

        {/* Before accesing post settings, need sign in and lens profile */}
        {!isSignedIn || !lensProfile ? (
          <SignInButton />
        ) : (
          <div className="sticky top-0 z-50">
            <button
              onClick={() => setOpenSettingsSidebar(!openSettingsSidebar)}
              className="btn btn-ghost"
            >
              Upload
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
                  d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
                />
              </svg>
            </button>
          </div>
        )}
      </div>

      <SettingsSidebar
        postMetadata={postMetadata}
        setPostMetadata={setPostMetadata}
        open={openSettingsSidebar}
        setOpen={setOpenSettingsSidebar}
      />
    </>
  );
}
