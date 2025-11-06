import BlogPosts from '@/components/BlogPosts'
import MainNav from '@/components/MainNav'
import React from 'react'

function page() {
  return (
    <div className='bg-blue-950 text-white h-screen flex'>
        <MainNav />
      <BlogPosts />
    </div>
  )
}

export default page
