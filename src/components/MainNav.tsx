'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function MainNav() {
    const pathname = usePathname();

    

    const navElStyle = "text-lg font-medium hover:underline";
    const activeNavElStyle = "text-lg font-medium underline";

  return (
    <div className="flex gap-4">
      <Link href='/' className={`${pathname === '/' ? activeNavElStyle : navElStyle}`}>Home</Link>
      <Link href='/blog'  className={`${pathname === '/blog' ? activeNavElStyle : navElStyle}`}>Blog</Link>
    </div>
  )
}

export default MainNav
