// pages/unauthorized.tsx
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function Unauthorized() {
  return (
    <div>
      <Head>
        <title>Unauthorized</title>
        <meta name="description" content="You are not authorized to access this page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          You are not authorized to access this page
        </h1>

        <p>
          Please <Link href="/api/auth/login">log in</Link> with appropriate credentials to continue
        </p>
      </main>
    </div>
  )
}