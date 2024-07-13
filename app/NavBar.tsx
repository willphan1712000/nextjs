'use client';

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  const {status, data: session} = useSession();

  return (
    <div className='flex bg-slate-200 p-5'>
      <Link href="/" className='mr-5'>Next.js</Link>
      <Link href="/users" className='mr-5'>Users</Link>
      { status === 'loading' && <div>Loading...</div>}
      { status === 'authenticated' && <div>{session.user!.name}
        <Link href="/api/auth/signout" className='pl-4'>Signout</Link>
        </div>}
      { status === 'unauthenticated' && <Link href="/api/auth/signin" className='mr-5'>Login</Link> }
      <Link href="/register" className='pl-4'>Register</Link>
    </div>
  )
}

export default NavBar
