import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='border-t'>
      <div>
        <Link href='/'>
          <Image src='/assets/images/logo.svg' alt='logo' width={128} height={24} />
        </Link>
      </div>
    </footer >
  )
}

export default Footer