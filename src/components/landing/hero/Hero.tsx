import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function Hero() {
  const router = useRouter();
  return (
    <div className="bg-[#000] h-screen">
      <div>
        <div className="hero border-b-2 border-black  h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse  h-screen">
            <img
              src="https://raw.githubusercontent.com/lens-protocol/brand-kit/main/Illustration/PNGs/LENS%20illustration_landing%20page_for%20Martin_illustration_%20social%20network%20graph.png"
              className=" rounded-lg bg-white shadow-5xl w-128 h-96 mx-6"
              alt="lensfrens"
            />

            <div className="space-y-8">
              <h1 className=" shadow-gradient text-white max-w-md bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-5xl font-extrabold tracking-tightest text-transparent sm:text-6xl lg:text-7xl">
                Share your{' '}
                <span
                  className=" 
                  bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400
                      bg-clip-text
                      background-animate"
                >
                  UI designs
                </span>{' '}
                to Lens and earn!
              </h1>

              <p className="py-6 text-[#a9a9a9] max-w-md  text-2xl">
                Lenspire is a platform for UI designers to share designs and
                earn from the community, built on Lens.
              </p>

              <Link
                href="/create"
                className="cursor-pointer relative inline-flex items-center justify-start  px-5 py-3 overflow-hidden font-bold rounded-full group"
              >
                <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                  Get Started
                </span>
                <span className="absolute inset-0 border-2 border-white rounded-full"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer items-center p-4 bg-neutral text-neutral-content">
        <div className="items-center grid-flow-col">
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
          <p>Built with 🤍 by Chris Abdo</p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}
