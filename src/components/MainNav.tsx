'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function MainNav() {
    const pathname = usePathname();

    

    const navElStyle = "text-lg font-medium hover:border-b hover:border-white/70 transition-all duration-500";
    const activeNavElStyle = "text-lg font-medium border-b-2 border-white";

  return (
    <div className="flex gap-4">
      <Link href='/' className={`${pathname === '/' ? activeNavElStyle : navElStyle}`}>Home</Link>
      <Link href='/blogs'  className={`${pathname === '/blogs' ? activeNavElStyle : navElStyle}`}>Blog</Link>
    </div>
  )
}

export default MainNav
