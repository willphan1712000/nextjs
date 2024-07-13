'use client'

import Image from 'next/image';
import Link from 'next/link';
import ProductCard from './components/ProductCard';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/authOptions';
// import HeavyCom from './components/HeavyCom';
import { useState } from 'react';
import dynamic from 'next/dynamic';
const HeavyCom = dynamic(() => import("./components/HeavyCom"), {
  ssr: false,
  loading: () => <p>Loading...</p>
});

export default function Home() {
  // const session = await getServerSession(authOptions);
  // console.log("Print all session:  "  + session);
  const [isVis, setVis] = useState(false);

  return (
    <>
      {/* <h1 className='font-poppins'>Hello Friends, welcome to our programming world {session && <span>{session.user!.name}</span>}</h1> */}
      <button onClick={() => setVis(true)} className='btn btn-primary m-3'>Show</button>
      {isVis && <HeavyCom />}
      <ProductCard />
    </>
  )
}
