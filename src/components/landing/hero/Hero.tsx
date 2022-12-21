import { Button, Typography, Container } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './hero.module.css';

export default function Hero() {
  const router = useRouter();
  return (
    <div className="bg-[#f0f0f0] h-screen">
      <div className="hero border-b-2 border-black py-6 h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src="/lensfrens.gif"
            className=" rounded-lg border-2 border-black"
            width={500}
            height={500}
            alt="lensfrens"
          />
          <div>
            <h1 className="text-5xl font-bold text-black ">
              Share your{' '}
              <a
                href="#_"
                className="relative inline-block px-4 py-2 font-medium group "
              >
                <span className="absolute rounded-full inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute rounded-full inset-0 w-full h-full bg-[#fede65] border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">
                  UI Designs
                </span>
              </a>{' '}
              to Lens!
            </h1>
            <p className="py-6 text-black max-w-xl text-2xl">
              Create. Share. Inspire. <br />
              <br />
              Lenspire is a platform for UI designers to share their UI designs
              and earn from the community.
            </p>
            <a
              href="/feed"
              className="relative inline-block px-4 py-2 font-medium group"
            >
              <span className="rounded-3xl absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="rounded-3xl absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
              <span className="relative text-black group-hover:text-white">
                Get Started
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
