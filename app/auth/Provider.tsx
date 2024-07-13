'use client';
import React, {ReactNode} from 'react'
import { SessionProvider } from 'next-auth/react'

const AuthProvider = ({children} : {
    children: ReactNode
}) => {
  return (
    <div>
      <SessionProvider>{children}</SessionProvider>
    </div>
  )
}

export default AuthProvider
